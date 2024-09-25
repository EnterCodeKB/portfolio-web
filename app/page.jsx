"use client";
import MyIcons from "./Componenter/MyIcons";
import React from "react";
import Meny from "./Componenter/Meny";
import { CardComponent } from "./Componenter/card1";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/contact");
  };

  return (
    <html>
      <body>
        <header>
          <div className="box11">
            {" "}
            <Meny />
          </div>
        </header>
        <div className="rad2">
          <div className="box21 " style={{ gridRow: 2 }}>
            <h3>Hej!</h3>
            <p className="text-3xl">
              Hello! My name is Helena Adelsten, and I am a Software Engineer
              with a broad academic background covering areas such as app
              development and web development in React and more.
            </p>
          </div>

          <div className="box22" style={{ gridRow: 2 }}>
            <img
              className="ph1"
              src="/Images/image_123650291 (6).JPG"
              alt="profilphoto"
            />
            <img
              className="ph2"
              src="/Images/50353683 1.png"
              alt="rundborder "
            />
          </div>
        </div>
        <div className="rad3">
          <div className="box21" style={{ gridRow: 1 }}>
            <h3 className="proglogo">My Tech Stack:</h3>
            <MyIcons />
          </div>
        </div>
        <div className="rad4">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <CardComponent
              imgSrc="/Images/82B24444-4289-4E41-B68B-D3A4A6341BAB_1_201_a.jpeg"
              imgAlt="imgcard1"
              title="My AI-project"
              description="Vi har skapat en hemsida EaseAccess som är ett verktyg för att göra webbsidor tillgängliga för alla. Det är enkelt att använda och hjälper utvecklare att följa riktlinjer för webbtillgänglighet."
              linkUrl="https://github.com/helenaltv/WCAG-min-mobilavers.git"
            />
            <CardComponent
              imgSrc="/Images/52645604-55B1-43A7-9F7F-42F217BA4B5B.png"
              imgAlt="imgcard1"
              title="My Bank-project"
              description="En av mina projekt att diploya en banksida med både back- och frontend. En responsive sida."
              linkUrl="https://github.com/helenaltv/BankAws.git"
            />
            <CardComponent
              imgSrc="/Skärmavbild 2024-06-29 kl. 19.27.11.png"
              imgAlt="imgcard3"
              title="My App-project"
              description="Arlanda appen handlar om att hå koll på sina flygavdångar på flygplatsen i lungt och ro medan du sitter och äter eller vilar på flygplatsen"
              linkUrl="https://github.com/helenaltv?tab=repositories"
            />
            <CardComponent
              imgSrc="/81BA4633-13B5-4F19-96FE-795D5BBB67E4.png"
              imgAlt="imgcard4"
              title="My Radioplayer"
              description="Jag har gjort ett litet projekt med fungerande radio stationer som playlist som fungerar via Fetch API och vanlig HTML. "
              linkUrl="https://github.com/helenaltv/Radioplayer"
            />
          </div>
          <div className="footer">
            <div className="box41 " style={{ gridRow: 3 }}>
              <h1>Contact</h1>
              <h5>Skriv till mig här:</h5>
              <div>
                <button onClick={handleButtonClick} className="contact-button">
                  Klicka här
                </button>
              </div>
            </div>
            <div className="box42 " style={{ gridRow: 3 }}>
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
            <div className="box43" style={{ gridRow: 3 }}>
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
      </body>
    </html>
  );
}
