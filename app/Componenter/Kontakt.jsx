import React, { useState } from "react";
import Link from "next/link";
import layout from "../layout";
import Meny from "./Meny";

function ContactForm({ formData, handleChange }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("E-post skickad!");
      } else {
        alert("Något gick fel. Försök igen senare.");
      }
    } catch (error) {
      console.error("Fel vid skickande av e-post:", error);
      alert("Något gick fel. Försök igen senare.");
    }
  };

  return (
    <div>
      <section className="Kontakt">
        <h1>Kontakta mig</h1>
        <form className="Form" onSubmit={handleSubmit}>
          <p>
            <label>
              Namn:
              <input
                className="Namn"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              E-post:
              <input
                className="E-post"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Meddelande:
              <textarea
                className="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </label>
          </p>
          <button type="submit">Skicka</button>
        </form>
      </section>
    </div>
  );
}

export default ContactForm;
