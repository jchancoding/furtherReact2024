import { useState, useReducer } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
