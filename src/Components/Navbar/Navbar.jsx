import "./Navbar.css";

const Navbar = ({ handleNavEle }) => {
  const homeStr = "//01. <Home/>";
  const portfolioStr = "//02. <Portfolio/>";
  const skillsStr = "//03. <Skills/>";
  const contactStr = "//04. <Contact/>";
  return (
    <div className="navbar">
      <div className="left">
        <div className="compnay">Bitscorp</div>
      </div>
      <div className="right">
        <div onClick={() => handleNavEle("home")} className="navEle navHover">
          {homeStr}
        </div>
        <div
          onClick={() => handleNavEle("portfolio")}
          className="navEle navHover"
        >
          {portfolioStr}
        </div>
        <div onClick={() => handleNavEle("skills")} className="navEle navHover">
          {skillsStr}
        </div>
        <div onClick={() => handleNavEle("contact")} className="navHover">
          {contactStr}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
