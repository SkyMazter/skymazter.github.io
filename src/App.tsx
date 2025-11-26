import TableBox from "./components/TableBox";
import TableView from "./components/TableView";
import GHLogo from "./components/Icons/GHLogo";
import LNlogo from "./components/Icons/LNlogo";
import Highlight from "./components/Highlight";
import { Link } from "react-router-dom";

import JSlogo from "./assets/JS-logo.svg";
import TSlogo from "./assets/TS-logo.svg";
import CPPlogo from "./assets/CPP-logo.svg";
import PYlogo from "./assets/PY-logo.svg";
import AboutMe from "./components/AboutMe";
import CTLsite from "./assets/CTLsite-img.png";

const App = () => {
  return (
    <div className="container-fluid home">
      <div className="home-main">
        <section>
          <header className="home-name">
            <h1 className="typewriter">Oscar Comunidad</h1>
          </header>
          <h3>Software Developer, Facilitator, Amateur Photographer</h3>
          <section className="home-links">
            <LNlogo />
            <GHLogo />
          </section>
          <AboutMe />
          <TableView title="Tech Stack">
            <TableBox label="7 Years Experience" image={JSlogo}></TableBox>
            <TableBox label="3 Years Experience" image={TSlogo}></TableBox>
            <TableBox label="5 Years Experience" image={CPPlogo}></TableBox>
            <TableBox label="2 Years Experience" image={PYlogo}></TableBox>
          </TableView>
          <TableView title="Highlighted Projects">
            <Highlight
              title={"Seen.it"}
              description={
                "This is a application made for the raspberry pi to serve as an archiving app. Allowing users to create accounts, upload, and download files. "
              }
              githubLink="https://github.com/SkyMazter/Seen_It"
            />
            <Highlight
              imgLink={CTLsite}
              title={"CommunityTechLab.org"}
              description="This is a website I built to showcase the work El Puente and CTNY has done when it comes to community technology and digital equity. Showcasing version history of Portable Network Kits, Our trained stewards, and examples of community owned networks throughout the United States."
              siteLink="https://communitytechlab.org"
              githubLink="https://github.com/Community-Tech-Lab/CTLab_Website"
            />
          </TableView>
        </section>
      </div>
      <div className="home-nav">
        <ul>
          <li className="fade-up-element">
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
          <li className="fade-up-element-1">
            <Link to={""}>About Me</Link>
          </li>
          <li className="fade-up-element-2">
            <Link to={""}>Work History</Link>
          </li>
          <li className="fade-up-element-3">
            <Link to={""}>Photography</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
