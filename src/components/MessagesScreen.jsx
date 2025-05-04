import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFirebaseData, addDataToFirebase } from "../redux/actions/firebaseActions";

const MessagesScreen = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.firebase);
  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch(fetchFirebaseData());
  }, [dispatch]);

  const handleAddMessage = () => {
    const trimmed = message.trim();
    if (trimmed.length === 0) return;
    
    const newMessage = {
      text: trimmed,
      time: new Date().toISOString()
    };

    try {
      dispatch(addDataToFirebase(newMessage));
      setMessage("");
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
    }
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "500px", margin: "auto" }}>
      <h2>💬 Mensajes en tiempo real</h2>
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ width: "70%", padding: "0.5rem", marginRight: "0.5rem" }}
        />
        <button onClick={handleAddMessage} style={{ padding: "0.5rem 1rem" }}>
          Enviar
        </button>
      </div>
      {loading ? (
        <p>Cargando...</p>
      ) : data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.text} <small style={{ color: "#777" }}>({new Date(item.time).toLocaleTimeString()})</small>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay mensajes aún.</p>
      )}
    </div>
  );
};

export default MessagesScreen;
