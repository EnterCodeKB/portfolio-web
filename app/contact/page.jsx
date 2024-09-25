"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactForm() {
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
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (response.ok) {
        alert("E-post skickad!");
      } else {
        console.error("API error response:", responseData);
        alert(`Något gick fel: ${responseData.message}`);
      }
    } catch (error) {
      console.error("Fel vid skickande av e-post:", error);
      alert(`Något gick fel: ${error.message}`);
    }
  };

  return (
    <div>
      <Link className="text-xl" href="/">
        <span>Home</span>
      </Link>
      <section className="Kontakt">
        <h1>Feel free to contact me at helenaltv@gmail.com</h1>
      </section>
    </div>
  );
}
