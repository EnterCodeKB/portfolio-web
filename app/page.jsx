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
              Mitt namn är Helena Adelsten och jag är Mjukvaruingenjör med en
              bred akademisk utbildnning som täcker områden som apputveckling
              och webbutveckling i React
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
              description="Vi har skapat en hemsida EaseAccess som är ett verktyg för att göra webbsidor tillgängliga för alla. Det är enkelt att använda och hjälper utvecklare att följa riktlinjer för webbtillgänglighet."
              linkUrl="https://github.com/helenaltv/Bank.git"
            />
            <CardComponent
              imgSrc="/Images/82B24444-4289-4E41-B68B-D3A4A6341BAB_1_201_a.jpeg"
              imgAlt="imgcard1"
              title="My AI-project"
              description="Vi har skapat en hemsida EaseAccess som är ett verktyg för att göra webbsidor tillgängliga för alla. Det är enkelt att använda och hjälper utvecklare att följa riktlinjer för webbtillgänglighet."
              linkUrl="https://github.com/helenaltv?tab=repositories"
            />
            <CardComponent
              imgSrc="/Images/82B24444-4289-4E41-B68B-D3A4A6341BAB_1_201_a.jpeg"
              imgAlt="imgcard1"
              title="My AI-project"
              description="Vi har skapat en hemsida EaseAccess som är ett verktyg för att göra webbsidor tillgängliga för alla. Det är enkelt att använda och hjälper utvecklare att följa riktlinjer för webbtillgänglighet."
              linkUrl="https://github.com/helenaltv?tab=repositories"
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
                  <Link className="hover:text-gray-500 font-bold" href="/">
                    Home
                  </Link>
                </li>
                <br />
                <li>
                  <Link
                    className="hover:text-gray-500 font-bold"
                    href="/aboutme"
                  >
                    About me
                  </Link>
                </li>
                <br />
                <li>
                  <Link
                    className="hover:text-gray-500 font-bold"
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
