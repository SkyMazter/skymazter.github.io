import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";

const Portfolio = () => {
  return (
    <>
      <div className="container portfolio">
        <Nav />
        <section className="portfolio-projects">
          <ProjectCard
            tags={["Foo", "Bar"]}
            githubLink="https://www.google.com"
            siteLink="https://www.google.com"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <ProjectCard tags={["Zip", "Zap"]} />
          <ProjectCard siteLink="https://www.google.com" />
          <ProjectCard />
          <ProjectCard tags={["Zip", "Zap"]} />
          <ProjectCard siteLink="https://www.google.com" />
        </section>
      </div>
    </>
  );
};

export default Portfolio;
