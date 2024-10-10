import { useState, useReducer } from "react";
import BankAccount from "./components/BankAccount";

function App() {
  // create a reducer, initial value is 0
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + state.incrementBy };
      case "decrement":
        return { ...state, count: state.count - state.incrementBy };
      case "setIncrementBy":
        return { ...state, incrementBy: action.payload };
      default:
        return state;
    }
  }

  return (
    <div>
      <div>
        Use Reducer: {state.count}
        <input
          type="number"
          value={state.incrementBy}
          onChange={(e) =>
            dispatch({
              type: "setIncrementBy",
              payload: Number(e.target.value),
            })
          }
        />
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>
      <BankAccount />
    </div>
  );
}

export default App;
