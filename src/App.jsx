import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy } from './slices/counterSlice';
import { push, pop } from './slices/stackSlice';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const stack = useSelector((state) => state.stack.items);
  
  const [inputValue, setInputValue] = useState(0);
  const [stackItem, setStackItem] = useState('');

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Contador Redux</h2>
      <p>Counter is: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br /><br />
      <input 
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
        placeholder="Valor a incrementar"
      />
      <button onClick={() => dispatch(incrementBy(inputValue))}>Increment By</button>

      <hr />

      <h2>Pila (Stack) Redux</h2>
      <input 
        value={stackItem}
        onChange={(e) => setStackItem(e.target.value)}
        placeholder="Elemento para la pila"
      />
      <button onClick={() => dispatch(push(stackItem))}>Push</button>
      <button onClick={() => dispatch(pop())}>Pop</button>

      <ul>
        {[...stack].reverse().map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
