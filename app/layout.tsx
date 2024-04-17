import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Meny from "./Componenter/Meny";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Min Portfolio",
};

function Layout() {
  return (
    <html>
      <body>
        <div className="Meny">
          <div className="box11">
            <h1>HELENA ADELSTEN</h1>
          </div>
          <div className="box12">
            <Meny />
          </div>
          <div className="rad2">
            <div className="box21" style={{ gridRow: 2 }}>
              <h1>Text</h1>
              Hej! Detta är min Grid 2. Hej! Detta är min Grid 2. Hej! Detta är
              min Grid 2. Hej! Detta är min Grid 2.
            </div>
            <div className="box22" style={{ gridRow: 2 }}>
              <h1>Text</h1>
              Hej! Detta är min Grid 3. Hej! Detta är min Grid 3. Hej! Detta är
              min Grid 3. Hej! Detta är min Grid 3. Hej! Detta är min Grid 3.
            </div>
            <div className="box23" style={{ gridRow: 2 }}>
              <img
                src="/Images/FDBA17AB-F83B-4088-956C-803F4B80203C_1_105_c.jpeg"
                alt="profilphoto"
              />
            </div>
          </div>
          <div className="rad3">
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
