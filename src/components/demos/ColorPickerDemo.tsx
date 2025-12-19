import { useState } from "react";

function ColorPickerDemo() {
  const colors = [
    "#3b82f6",
    "#22c55e",
    "#ef4444",
    "#eab308",
    "#8b5cf6",
    "#f472b6",
  ];
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

  return (
    <div className="container">
      <div
        className="card-demo"
        style={{
          backgroundColor: selectedColor,
          marginBottom: "1.5rem",
          transition: "background 0.3s",
        }}
      >
        <span
          style={{
            color: "#fff",
            fontWeight: "bold",
            textShadow: "0 1px 2px rgba(0,0,0,0.2)",
          }}
        >
          {selectedColor.toUpperCase()}
        </span>
      </div>

      <div className="category-filter">
        {colors.map((color) => (
          <button
            key={color}
            className={`filter-button ${selectedColor === color ? "active" : ""}`}
            onClick={() => setSelectedColor(color)}
            title={color}
          >
            <div
              style={{
                display: "inline-block",
                width: "16px",
                height: "16px",
                backgroundColor: color,
                borderRadius: "4px",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            />
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ColorPickerDemo;
