import { Link } from "react-router-dom";
import placeholder from "../assets/Placeholder.png";
import GHLogo from "./Icons/GHLogo";
import LinkIcon from "./Icons/LinkIcon";
import Tag from "./Tag";

interface Props {
  title?: string;
  description?: string;
  siteLink?: string;
  tags?: string[];
  githubLink?: string;
  imgLink?: string;
}

const ProjectCard = ({
  title,
  description,
  siteLink,
  tags,
  githubLink,
  imgLink,
}: Props) => {
  return (
    <div className="proj-card">
      <img src={imgLink ?? placeholder}></img>
      <header style={{ minHeight: "fit-content" }}>
        <h2>{title ?? "Project Name"}</h2>
        {githubLink ? <GHLogo link={githubLink} /> : <></>}
      </header>
      <div>
        {" "}
        {tags?.map((tag, key) => (
          <Tag key={key} text={tag} />
        ))}
      </div>
      <div>
        <p> {description ?? "Project Description Missing"}</p>
      </div>

      {siteLink ? (
        <Link to={siteLink} className="link-btn">
          Visit Site <LinkIcon />{" "}
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProjectCard;
