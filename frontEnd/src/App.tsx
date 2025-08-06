import TableBox from "./components/TableBox";
import TableView from "./components/TableView";
import GHLogo from "./components/Icons/GHLogo";
import LNlogo from "./components/Icons/LNlogo";

import JSlogo from "./assets/JS-logo.svg";
import TSlogo from "./assets/TS-logo.svg";
import CPPlogo from "./assets/CPP-logo.svg";
import PYlogo from "./assets/PY-logo.svg";
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <div className="container home">
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
          <TableView title="Tech Stack">
            <TableBox label="7 Years Experience" image={JSlogo}></TableBox>
            <TableBox label="3 Years Experience" image={TSlogo}></TableBox>
            <TableBox label="5 Years Experience" image={CPPlogo}></TableBox>
            <TableBox label="2 Years Experience" image={PYlogo}></TableBox>
          </TableView>
          <AboutMe />
        </section>
      </div>
      <div className="home-nav">
        <ul>
          <li>Projects</li>
          <li>Work History</li>
          <li>About Me</li>
          <li>Technical Skills</li>
          <li>Photography Portfolio</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
