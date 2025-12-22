import { useState } from "react";
import Gallery from "./components/Gallery";
import { componentsData } from "./data/componentsData";
import "./App.css";

function App() {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", "Buttons", "Forms", "Cards", "Data Display"];
  const filteredComponents =
    filter === "All"
      ? componentsData
      : componentsData.filter((comp) => comp.category === filter);
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Component Gallery</h1>
        <p>Interactive examples of React fundamentals</p>
      </header>

      <main className="app-main">
        <Gallery components={componentsData} />
      </main>

      <footer className="app-footer">
        <p>Built with React + TypeScript</p>
      </footer>
    </div>
  );
}

export default App;
