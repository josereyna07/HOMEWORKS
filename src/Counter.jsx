import { useState } from "react";

const Counter = ({ defaultValue }) => {
  const [counter, setCounter] = useState(defaultValue);

  const handleAdd = () => setCounter(counter + 1);
  const handleSubtract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(defaultValue);

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-bold">Counter: {counter}</h1>
      <div className="mt-4 flex gap-4">
        <button onClick={handleAdd} className="px-4 py-2 bg-green-500 text-white rounded-lg">
          +1
        </button>
        <button onClick={handleSubtract} className="px-4 py-2 bg-red-500 text-white rounded-lg">
          -1
        </button>
        <button onClick={handleReset} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
