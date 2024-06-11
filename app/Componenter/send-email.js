import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Kontrollera att alla nödvändiga fält är ifyllda
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Alla fält måste vara ifyllda" });
    }

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    let mailOptions = {
      from: email,
      to: "helenaltv@gmail.com",
      subject: `Kontaktformulär meddelande från ${name}`,
      text: message,
    };

    try {
      let info = await transporter.sendMail(mailOptions);
      console.log("E-post skickad:", info);
      res.status(200).json({ message: "E-post skickad!" });
    } catch (error) {
      console.error("Fel vid skickande av e-post:", error);
      res.status(500).json({ message: "Något gick fel. Försök igen senare." });
    }
  } else {
    res.status(405).json({ message: "Metod ej tillåten" });
  }
}
