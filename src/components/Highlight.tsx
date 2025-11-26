import { Link } from "react-router-dom";
import GHLogo from "./Icons/GHLogo";
import placeholder from "../assets/Placeholder.png";
import LinkIcon from "./Icons/LinkIcon";

interface Props {
  title?: string | null;
  description?: string;
  siteLink?: string;
  tags?: string[];
  githubLink?: string;
  imgLink?: string;
}

const Highlight = ({
  title,
  description,
  siteLink,
  tags,
  githubLink,
  imgLink,
}: Props) => {
  const placeholderText: string =
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis nisi varius enim hendrerit adipiscing. Tortor mus diam; class class at sed. Senectus euismod imperdiet eros facilisis non augue? Lacus vitae bibendum libero faucibus est.";
  return (
    <div className="my-3">
      <div className="">
        <img className="highlight-img" src={imgLink ?? placeholder} />

        {tags ? (
          <div className="d-flex align-items-center py-3">
            <p className="m-0 me-1 text-center">Tags:</p>
            {tags?.length ? (
              tags.map((tag, index) => (
                <span className="me-1" key={index}>
                  {tag}
                </span>
              ))
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
        <img></img>
        <header>
          <h5 style={{ textDecoration: "underline" }}>
            {title ?? "Project Title"}
          </h5>
        </header>
        <article className="highlight-text">
          <section> {description ?? placeholderText} </section>
        </article>
        <footer className="highlight-footer">
          {siteLink ? (
            <Link
              className="link-btn"
              style={{ marginRight: "0.7rem" }}
              to={siteLink ?? "https://github.com/SkyMazter"}
            >
              Visit Site <LinkIcon />
            </Link>
          ) : (
            <></>
          )}
          {githubLink ? <GHLogo link={githubLink} /> : <></>}
        </footer>
      </div>
    </div>
  );
};

export default Highlight;
