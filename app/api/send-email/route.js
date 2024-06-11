import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    console.log("Received form data:", body);

    if (!name || !email || !message) {
      console.error("Missing required form data");
      return new Response(
        JSON.stringify({ message: "Missing required form data" }),
        { status: 400 }
      );
    }

    // Configure the email transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("Transporter created successfully");

    // Verify the transporter configuration
    transporter.verify((error, success) => {
      if (error) {
        console.error("Transporter verification failed:", error);
        throw new Error("Transporter verification failed");
      } else {
        console.log("Server is ready to take our messages");
      }
    });

    // Set up email data
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: "helenaltv@gmail.com",
      subject: `Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}

        Message:
        ${message}
      `,
    };

    console.log("Mail options set:", mailOptions);

    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent:", result);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Error sending email", error: error.message }),
      { status: 500 }
    );
  }
}
