// ToggleDemo.tsx (and similar for others)

import { useState, useCallback } from "react";

function ToggleDemo() {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggle = useCallback(() => setIsOn((v) => !v), []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className="container">
      <h1>Toggle Demo</h1>

      <div className="toggle-wrapper">
        <button
          type="button"
          role="switch"
          aria-checked={isOn}
          onClick={toggle}
          onKeyDown={onKeyDown}
          className={`switch ${isOn ? "on" : ""}`}
        >
          <span className="switch-handle" />
          <span className="sr-only">{isOn ? "On" : "Off"}</span>
        </button>
      </div>

      <p>Status: {isOn ? "Enabled" : "Disabled"}</p>
    </div>
  );
}

export default ToggleDemo;
