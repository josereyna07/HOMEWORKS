import React, { useState, useEffect } from 'react';
import useCollection from '../firebase/firestore';

const Crud = () => {
  const [user, setUser] = useState({ name: '' });
  const { add, getAll, update, remove, isPending, results } = useCollection("users");

  useEffect(() => {
    getAll();
  }, []);

  const handleSetUser = (e) => {
    setUser({ name: e.target.value });
  };

  const save = async () => {
    if (!user.name) return;
    await add(user);
    await getAll();
    setUser({ name: '' });
  };

  const edit = async (id) => {
    const newName = prompt("Nuevo nombre:");
    if (newName) {
      await update(id, { name: newName });
      await getAll();
    }
  };

  const del = async (id) => {
    if (confirm("¿Eliminar este usuario?")) {
      await remove(id);
      await getAll();
    }
  };

  return (
    <>
      <input type="text" onChange={handleSetUser} value={user.name} />
      <button onClick={save}>Guardar</button>
      {isPending && <span>Guardando...</span>}
      <ul>
        {results.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => edit(item.id)}>✏️</button>
            <button onClick={() => del(item.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Crud;
