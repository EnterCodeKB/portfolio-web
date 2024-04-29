import Link from "next/link";

function Meny() {
  return (
    <div>
      <div className="Meny">
        <nav>
          <ul>
            <li className="">
              <Link href={"/"}>
                {" "}
                <span className="hem"> Hem</span>
              </Link>
              <Link href={"/page1"}>
                <span className="ommig">Lite om mig</span>
              </Link>
              <Link href={"/page1"}>
                <span className="kontaktlink">Kontakt</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Meny;
