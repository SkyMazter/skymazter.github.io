import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <Link to={""}>Portfolio</Link>
        <Link to={""}>Work History</Link>
        <Link to={""}>About Me</Link>
        <Link to={""}>Photography</Link>
        <Link to={""}>Else</Link>
      </nav>
    </>
  );
};

export default Nav;
