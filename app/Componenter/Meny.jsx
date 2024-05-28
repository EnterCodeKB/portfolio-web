import Link from "next/link";
import hamburger from "./hamburger";

function Meny() {
  return (
    <nav className="navbar">
      <h1 className="nav-logo">
        <span>HELENA</span> <br />
        <span className="A">ADELSTEN</span>
      </h1>
      <ul className="nav-menu">
        <li className="menulist">
          <Link href={"/"}>
            <span className="hem"> Home</span>
          </Link>
        </li>
        <li>
          <Link href={"/aboutme"}>
            <span className="ommig">About me</span>
          </Link>
        </li>
        <li>
          <Link href={"/contact"}>
            <span className="kontaktlink">Contact</span>
          </Link>
        </li>
      </ul>

      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <hamburger />
    </nav>
  );
}

export default Meny;
