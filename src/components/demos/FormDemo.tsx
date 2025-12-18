// FormDemo.tsx (and similar for others)
import { useState } from "react";
function FormDemo() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted:", { name, email });

    setName("");
    setEmail("");
  };
  return (
    <div className="container">
      <h2>Form Demo</h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-required="true"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-required="true"
          />
        </div>

        <div className="button-group">
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormDemo;
