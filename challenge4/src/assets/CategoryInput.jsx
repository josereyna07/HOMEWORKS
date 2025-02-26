import { useState } from "react";

function CategoryInput({ addCategory }) {
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAdd = () => {
    addCategory(category);
    setCategory(""); // Limpiar input después de agregar
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={category}
        onChange={handleChange}
        placeholder="Enter category"
        className="border p-2 rounded w-48"
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white p-2 rounded">
        Add
      </button>
    </div>
  );
}

export default CategoryInput;
