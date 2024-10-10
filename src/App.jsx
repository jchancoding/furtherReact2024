import { useState, useReducer } from "react";

function App() {
  // create a reducer, initial value is 0
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + action.payload };
      case "decrement":
        return { ...state, count: state.count - action.payload };
      default:
        return state;
    }
  }

  return (
    <div>
      Use Reducer: {state.count}
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
