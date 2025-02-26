import { useState } from "react";
import CategoryInput from "./CategoryInput";


function App() {
  const [categories, setCategories] = useState([]);

  const addCategory = (newCategory) => {
    if (newCategory.trim() !== "") {
      setCategories([...categories, newCategory]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full">

      <h1 className="text-2xl font-bold mb-4">Challenge 04</h1>
      <CategoryInput addCategory={addCategory} />
      <ul className="mt-4 w-64 bg-white p-4 rounded shadow">
        {categories.map((category, index) => (
          <li key={index} className="p-2 border-b text-center">{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
