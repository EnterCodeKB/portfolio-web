"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  //const handleChange = (e) => {
  // const { name, value } = e.target;
  //setFormData((prevData) => ({
  // ...prevData,
  // [name]: value,
  // }));
  // };

  return (
    <div>
      <Link className="text-xl" href="/">
        <span>Home</span>
      </Link>
      <section>
        <img className="gammaltel" src="/Images/gammaltel.png" alt="" />

        <div className="kontakt">
          <h1>Feel free to contact me at helenaltv@gmail.com</h1>
        </div>
      </section>
    </div>
  );
}
