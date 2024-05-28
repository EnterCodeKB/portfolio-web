import Link from "next/link";
export default function AboutMe() {
  return (
    <div>
      <Link className="text-xl" href="/">
        <span>Home</span>
      </Link>
      <p></p>
      <h1>Here's a few things about me</h1>
      <p></p>
      <p className="text-lg w-3/4">
        Jag är en mångsidig och professionell person med en akademisk bakgrund
        inom IT, ekonomi, transportlogistik och systemutveckling. Jag tar examen
        som mjukvaruingenjör våren 2025, men min kunskap slutar inte där. Jag
        strävar ständigt efter att utvecklas och hålla mig uppdaterad med de
        senaste trenderna inom IT-utveckling.
      </p>
    </div>
  );
}
