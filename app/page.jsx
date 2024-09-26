"use client";
import MyIcons from "./Componenter/MyIcons";
import React from "react";
import Meny from "./Componenter/Meny";
import { CardComponent } from "./Componenter/card1";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "./Componenter/Footer";
export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/contact");
  };

  return (
    <>
      <header>
        <div className="box11">
          <Meny />
        </div>
      </header>

      <div className="rad2">
        <div className="box22">
          <img
            className="ph1"
            src="/Images/image_123650291 (6).JPG"
            alt="profilphoto"
          />
          <img className="ph2" src="/Images/50353683 1.png" alt="rundborder" />
        </div>

        <div className="box21">
          <h3>Hej!</h3>
          <p className="text-3xl">
            Hello! My name is Helena Adelsten, and I am a Software Engineer with
            a broad academic background covering areas such as app development
            and web development in React and more.
          </p>
        </div>
      </div>

      <div className="rad3">
        <div className="box21">
          <h3 className="proglogo">My Tech Stack:</h3>
          <MyIcons />
        </div>
      </div>

      <div className="rad4">
        <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
            description="Arlanda appen handlar om att hålla koll på flygavgångar i lugn och ro medan du är på flygplatsen."
            linkUrl="https://github.com/helenaltv?tab=repositories"
          />
          <CardComponent
            imgSrc="/81BA4633-13B5-4F19-96FE-795D5BBB67E4.png"
            imgAlt="imgcard4"
            title="My Radioplayer"
            description="Jag har gjort ett litet projekt med fungerande radio stationer som playlist som fungerar via Fetch API."
            linkUrl="https://github.com/helenaltv/Radioplayer"
          />
        </div>
      </div>

      {/* Lägg till Footer-komponenten här */}
      <Footer />
    </>
  );
}
