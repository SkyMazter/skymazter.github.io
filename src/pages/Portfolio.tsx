import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";
import projectData from "../project-data";

const Portfolio = () => {
  return (
    <>
      <div className="container portfolio">
        <Nav />
        <MobileNav />
        <section className="portfolio-projects">
          {projectData.map((proj, key) => (
            <ProjectCard
              key={key}
              title={proj.title}
              description={proj.description}
              siteLink={proj.siteLink}
              imgLink={proj.imgLink}
              githubLink={proj.githubLink}
              tags={proj.tags}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default Portfolio;
