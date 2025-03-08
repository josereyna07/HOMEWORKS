import Counter from "./Counter";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Counter defaultValue={10} />
    </div>
  );
}

export default App;
