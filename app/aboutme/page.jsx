import Link from "next/link";
export default function AboutMe() {
  return (
    <div>
      <Link className="text-xl" href="/">
        <span>Home</span>
      </Link>
      <p></p>
      <h1>Hi everyone,</h1>
      <p></p>
      <div className="beskrivning">
        <p>
          My expertise and skills are ready for a fresh challenge, and I am
          particularly keen on roles in Stockholm.
        </p>

        <p>
          I am a versatile professional with an academic background in IT,
          economics, transport logistics, and systems development. I will be
          graduating as a Software Engineer in the spring of 2025, but my
          knowledge doesn’t stop there. I continuously strive to grow and stay
          updated with the latest trends in IT development.
        </p>

        <img
          className="textimg"
          src="/Images/03E1E11D-1537-4707-A3FA-3ABB12576451.png"
          alt="mobil icon"
        />

        <p>
          I possess a diverse skill set in modern web and app development
          technologies, enabling me to create robust and scalable applications.
          Proficient in JavaScript and TypeScript, I leverage React and React
          Native to build dynamic user interfaces and mobile applications that
          deliver exceptional user experiences. My expertise extends to Redux
          for state management, ensuring efficient data flow within
          applications.
        </p>
        <p>
          I am well-versed in core web technologies, including HTML, CSS,
          Tailwind and Next.js, allowing me to develop responsive and optimized
          websites.{" "}
        </p>
        <p>
          Additionally, I utilize Node.js to build server-side applications,
          ensuring seamless integration across the stack. My experience with
          Docker facilitates the development and deployment of applications in
          isolated environments, enhancing collaboration and efficiency.
          Leveraging AWS allows me to implement scalable cloud solutions, while
          GitHub supports my commitment to version control and collaborative
          coding practices.{" "}
        </p>

        <img
          className="textimg2"
          src="/Images/F6387D49-EEBD-439A-BFBB-7C6F44729698.png"
          alt="annons icon"
        />
        <p>
          I embrace agile methodologies to drive project success through
          iterative development and continuous feedback. Additionally, I have
          hands-on experience with Mailchimp for effective email marketing
          campaigns, enabling me to engage users and enhance outreach. With this
          comprehensive toolkit, I am excited to contribute to innovative
          projects and drive impactful results in a collaborative environment.
        </p>
        <p>
          I would welcome the opportunity to contribute to your team and look
          forward to connecting with you.
        </p>
        <img
          className="textimg3"
          src="/Images/05089DD0-484A-4363-B72C-6F8A70933FF6.png"
          alt="annons icon"
        />
      </div>
      {/* <p>Jag är en mångsidig och professionell
        person med en akademisk bakgrund inom IT, ekonomi, transportlogistik och
        systemutveckling. Jag tar examen som mjukvaruingenjör våren 2025, men
        min kunskap slutar inte där. Jag strävar ständigt efter att utvecklas
        och hålla mig uppdaterad med de senaste trenderna inom IT-utveckling.</p>*/}
    </div>
  );
}
