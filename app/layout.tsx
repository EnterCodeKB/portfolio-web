import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Meny from "./Componenter/Meny";
import MyIcons from "./Componenter/MyIcons";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Min Portfolio",
};

function Layout() {
  return (
    <html>
      <body>
        <div className="box11">
          {" "}
          <h1>
            <span>HELENA </span>
            <span className="A">ADELSTEN</span>
          </h1>
          <Meny />
        </div>

        <div className="rad2">
          <div className="box21" style={{ gridRow: 2 }}>
            <h3>HI!</h3>
            <p>My name is </p>
            <p>Helena Adelsten</p>
            <p>and I'm Software Engineer</p>
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
            <h3 className="logolosta">My Tech Stack:</h3>
            <MyIcons />
          </div>
          <div className="rad4">
            <div className="box31 " style={{ gridRow: 3 }}>
              <h1>Någonting</h1>
              Hej! Detta är min Grid 5. Hej! Detta är min Grid 5. Hej! Detta är
              min Grid 5. Hej! Detta är min Grid 5.
            </div>
            <div className="box32 " style={{ gridRow: 3 }}>
              <h1>Någonting</h1>
              Hej! Detta är min Grid 5. Hej! Detta är min Grid 5. Hej! Detta är
              min Grid 5. Hej! Detta är min Grid 5.
            </div>
            <div className="box33 " style={{ gridRow: 3 }}>
              <h1>Någonting</h1>
              Hej! Detta är min Grid 5. Hej! Detta är min Grid 5. Hej! Detta är
              min Grid 5. Hej! Detta är min Grid 5.
            </div>
            <div className="box34" style={{ gridRow: 3 }}>
              <h1>Någonting</h1>
              Hej! Detta är min Grid 5. Hej! Detta är min Grid 5. Hej! Detta är
              min Grid 5. Hej! Detta är min Grid 5.
            </div>
          </div>
          <div className="footer">
            <div className="box41" style={{ gridRow: 4 }}>
              <h1>Kontakt</h1>
              Hej! Detta är min Grid 5. Hej! Detta är min Grid 5. Hej! Detta är
              min Grid 5. Hej! Detta är min Grid 5.
            </div>
            <div className="box42" style={{ gridRow: 4 }}>
              <h1>Snabbmenu</h1>
              Hej! Detta är min Grid 5. Hej! Detta är min Grid 5. Hej! Detta är
              min Grid 5. Hej! Detta är min Grid 5.
            </div>
            <div className="box43" style={{ gridRow: 4 }}>
              <h1>Snabbmenu</h1>
              Hej! Detta är min Grid 5. Hej! Detta är min Grid 5. Hej! Detta är
              min Grid 5. Hej! Detta är min Grid 5.
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
export default Layout;
