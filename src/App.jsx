import { useState, useReducer } from "react";

function App() {
  const [count, setCount] = useState(0);
  // create a reducer, initial value is 0
  const [state, dispatch] = useReducer(reducer, 0);
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return state + action.payload;
      case "decrement":
        return state - action.payload;
      default:
        return state;
    }
  }

  return (
    <div>
      Use State: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      Use Reducer: {state}
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
    </div>
  );
}

export default App;
