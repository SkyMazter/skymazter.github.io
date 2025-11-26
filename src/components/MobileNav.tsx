import hamburger from "../assets/Hamburger-menu-icon.svg";
const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <button className="menu-btn">
        {" "}
        <img src={hamburger}></img>
      </button>
    </div>
  );
};

export default MobileNav;
