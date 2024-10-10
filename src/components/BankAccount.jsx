import { useReducer, useState } from "react";

export default function bankAccount() {
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  const [amount, setAmount] = useState(0);

  function reducer(state, action) {
    switch (action.type) {
      case "deposit":
        return { ...state, balance: state.balance + action.payload };
      case "withdraw":
        return { ...state, balance: state.balance - action.payload };
      default:
        return state;
    }
  }
  return (
    <div>
      <h1>Bank Account</h1>
      {state.balance}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button
        onClick={() => dispatch({ type: "deposit", payload: Number(amount) })}
      >
        Deposit
      </button>
      <button
        onClick={() => dispatch({ type: "withdraw", payload: Number(amount) })}
      />
    </div>
  );
}
