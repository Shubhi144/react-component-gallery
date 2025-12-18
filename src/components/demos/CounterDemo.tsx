// CounterDemo.tsx (and similar for others)
import { useState } from "react";
function CounterDemo() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="container">
      <h2>Counter Demo</h2>
      <div className="counter-display">Count: {count}</div>
      <div className="button-group">
        <button className="increment-btn" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="decrement-btn" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button className="reset-btn" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterDemo;
