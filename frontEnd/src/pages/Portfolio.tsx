import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";

const Portfolio = () => {
  return (
    <>
      <div className="container portfolio">
        <Nav />
        <section className="portfolio-projects">
          <ProjectCard githubLink="https://www.google.com" />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard githubLink="https://www.google.com" />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </section>
      </div>
    </>
  );
};

export default Portfolio;
