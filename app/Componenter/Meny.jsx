import Link from "next/link";
import hamburger from "./Hamburger";

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
            <span style={{ textDecoration: "none" }}>Home</span>
          </Link>
        </li>
        <li>
          <Link href={"/aboutme"}>
            <span style={{ textDecoration: "none" }}>About me</span>
          </Link>
        </li>
        <li>
          <Link href={"/contact"}>
            <span style={{ textDecoration: "none" }}>Contact</span>
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
