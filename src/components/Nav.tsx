import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="nav fade-up-element">
        <Link to={"/"}>Home</Link>
        <Link to={"/portfolio"}>Portfolio</Link>
        <Link to={""}>Work History</Link>
        <Link to={""}>About Me</Link>
        <Link to={""}>Photography</Link>
      </nav>
    </>
  );
};

export default Nav;
