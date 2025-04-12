import React, { useState } from "react";
import { Queue } from "./Queue";

const queue = new Queue();
// Datos de prueba
queue.enqueue({ name: "Alice", withdrawalAmount: 100 });
queue.enqueue({ name: "Bob", withdrawalAmount: 200 });

export default function QueuePage() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [update, setUpdate] = useState(false); // para forzar re-render

  const handleAdd = () => {
    if (name && amount) {
      queue.enqueue({ name, withdrawalAmount: parseFloat(amount) });
      setName("");
      setAmount("");
      setUpdate(!update); // forzar actualización
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">ATM Queue</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Monto"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">
          Agregar
        </button>
      </div>

      <ul className="list-disc pl-5">
        {queue.getAll().map((person, index) => (
          <li key={index}>
            {person.name} - ${person.withdrawalAmount}
          </li>
        ))}
      </ul>
    </div>
  );
}
