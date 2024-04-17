import Link from "next/link";
import Kontakt from "./Kontakt";

function Meny() {
  return (
    <div>
      <div className="Meny">
        <nav>
          <ul>
            <li className="">
              <Link href={"/"}>HEM</Link>
              <Link href={"/page1"}>Lite om mig</Link>
              <Link href={"/Kontakt"}>Kontakta mig</Link>
              <Kontakt />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Meny;
