"use client";
import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") {
        setCount((prev) => prev + 1);
      } else if (event.key === "ArrowDown") {
        setCount((prev) => (prev > 0 ? prev - 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="counter-container">
      <h2 aria-live="polite">Current Count is: {count}</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button onClick={() => setCount((prev) => prev + 1)}>Up</button>
        <button onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
          disabled={count === 0}>Down</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}