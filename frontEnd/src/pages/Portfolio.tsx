import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";

const Portfolio = () => {
  return (
    <>
      <div className="container portfolio">
        <Nav />
        <section className="portfolio-projects">
          <ProjectCard tags={["Foo", "Bar"]} githubLink="https://www.google.com" />
          <ProjectCard tags={["Zip", "Zap"]} />
          <ProjectCard />
          <ProjectCard />
        </section>
      </div>
    </>
  );
};

export default Portfolio;
