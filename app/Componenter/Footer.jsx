// Footer.js
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/contact");
  };

  return (
    <div className="footer">
      <div className="inner">
        <div className="box41">
          <h1>Contact</h1>
          <h5>Skriv till mig här:</h5>
          <div>
            <button onClick={handleButtonClick} className="contact-button">
              Klicka här
            </button>
          </div>
        </div>

        <div className="box42">
          <Link href="https://www.linkedin.com/in/helena-adelsten-b032a028/">
            <img src="./Linkedin.png" alt="LinkedIn logo" />
          </Link>
          <Link href="https://github.com/helenaltv?tab=repositories">
            <img src="./Vector.png" alt="GitHub" />
          </Link>
          <Link href="https://www.facebook.com/helena.lager.1">
            <img src="./fb.png" alt="Facebookslogo" />
          </Link>
        </div>

        <div className="box43">
          <ul>
            <li>
              <Link
                className="text-white hover:text-gray-500 font-bold"
                href="/"
              >
                Home
              </Link>
            </li>
            <br />
            <li>
              <Link
                className="text-white hover:text-gray-500 font-bold"
                href="/aboutme"
              >
                About me
              </Link>
            </li>
            <br />
            <li>
              <Link
                className="text-white hover:text-gray-500 font-bold"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
