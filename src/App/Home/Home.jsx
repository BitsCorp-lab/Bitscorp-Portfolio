import Layout from "../../Components/Layout/Layout";
import LodingSvg from "../../Assets/LoadingSvg";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

import "./Home.css";
import { useState } from "react";
const Home = () => {
  const intro1 = "<p>This is</p>";
  const h1Open = "<h1>";
  const h1Close = "</h1>";
  const pOpen = "<p>";
  const pClose = "</p>";
  const intro3 = "<p>Full stack developer</p>";
  const cv = "Download Cv";
  const openBr = "<>";
  const closeBr = "</>";
  const skillsObj = {
    rj: " React.js",
    r: "Redux",
    rn: "React Native",
    nj: "Node.js",
    ej: "Express.js",
    md: "MongoDB",
    sd: "SQL",
    fd: "Firebase",
    h: "HTML",
    c: "CSS",
    mu: "Material UI",
    s: "SASS",
    js: "JavaScript",
    cp: "C++",
    g: "Git",
  };

  const [idShow, setIdShow] = useState(false);

  const handleNavEle = (secName) => {
    const element = document.getElementById(secName);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const hideEmail = () => {
    setTimeout(() => {
      setIdShow(false);
    }, 3000);
  };

  const handleClick = (socialName) => {
    if (socialName === "instagram") {
      window.open("https://www.instagram.com/sau_puttshanu/");
    }
    if (socialName === "linkedin") {
      window.open("https://www.linkedin.com/in/sahil-sondawale-a4358a203/");
    }
    if (socialName === "gmail") {
      setIdShow(true);
      hideEmail();
    }
    if (socialName === "resume") {
      window.open("https://drive.google.com/file/d/1mz3Su77hL7c3ftS1EKZ3oGmYL_G95CBg/view?usp=share_link")
    }
  };
  return (
    <>
      <Layout handleNavEle={handleNavEle}>
        <div id="home" className="section homeCon">
          <div className="homeLeft">
            <div className="intro">{intro1}</div>
            <div className="myNameCon">
              <div className="intro">{h1Open}</div>
              <div className="myName">Sahil </div>
              <div className="myName"> Manikrao</div>
              <div className="intro">{h1Close}</div>
            </div>
            <div className="intro">{intro3}</div>
          </div>
          <div className="homeRight">
            <div onClick={() => handleClick("resume")} className="resumeCon">
              <LodingSvg />
              <div className="resume">{cv}</div>
            </div>
          </div>
        </div>
        <div id="portfolio" className="section portfolioCon">
          <div className="portfolioHeader">
            <div className="headWrapper">
              <div className="headWrap ">{h1Open}</div>
              <div className="portfolioHead">My Portfolio</div>
              <div className="headWrap closeTag">{h1Close}</div>
            </div>
          </div>
          <div className="portfolioContent">
            <div className="portLeft">
              <div className="projectCon">
                <div className="projectCon0 projectConCh"></div>
                <div className="projectCon1 projectConCh"></div>
                <div className="projectCon2 projectConCh"></div>
              </div>
            </div>
            <div className="portRight">
              <div className="descWrap">{pOpen}</div>
              <div className="descHF descH">GenratorX</div>
              <div className="descBody">
                GeneratorX is a tool that generates React.js frontend and
                Node.js backend code, including initial functionality for
                performing CRUD operations on your database, as well as a
                directory structure for your app.
              </div>
              <div className="descHF descF">FOUNDER AND CEO</div>
              <div className="descWrap">{pClose}</div>
            </div>
          </div>
          <div className="swipbarCon">
            <div className="swipbar">
              <div className="navBtn">
                <MdOutlineKeyboardArrowLeft />
              </div>
              <div className="bar"></div>
              <div className="navBtn">
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>
          </div>
        </div>

        <div id="skills" className="skillsCon">
          <div className="skillsHeader">
            <div className="headWrapper">
              <div className="headWrap ">{h1Open}</div>
              <div className="portfolioHead">Skills</div>
              <div className="headWrap closeTag">{h1Close}</div>
            </div>
          </div>
          <div className="skillsContent">
            <div className="skills">
              <div className="skillWrap">
                {" "}
                <p className="pMargin">{openBr}</p>
                <p className="pMargin">{skillsObj.rj}</p>
                <p className="pMargin">{closeBr}</p>
              </div>
            </div>
            <div className="skills">
              <div className="skillWrap">
                {" "}
                <p className="pMargin">{openBr}</p>
                <p className="pMargin">{skillsObj.r}</p>
                <p className="pMargin">{closeBr}</p>
              </div>
            </div>
            <div className="skills">
              <div className="skillWrap">
                {" "}
                <p className="pMargin">{openBr}</p>
                <p className="pMargin">{skillsObj.rn}</p>
                <p className="pMargin">{closeBr}</p>
              </div>
            </div>
            <div className="skills">
              <div className="skillWrap">
                {" "}
                <p className="pMargin">{openBr}</p>
                <p className="pMargin">{skillsObj.nj}</p>
                <p className="pMargin">{closeBr}</p>
              </div>
            </div>
            <div className="skills">
              <div className="skillWrap">
                {" "}
                <p className="pMargin">{openBr}</p>
                <p className="pMargin">{skillsObj.ej}</p>
                <p className="pMargin">{closeBr}</p>
              </div>
            </div>
          </div>
          <div className="skillsContent">
            <div className="skills">
              <div className="skillWrap">
                {" "}
                <p className="pMargin">{openBr}</p>
                <p className="pMargin">{skillsObj.md}</p>
                <p className="pMargin">{closeBr}</p>
              </div>
            </div>
            <div className="skills">
              <div className="skillWrap">
                {" "}
                <p className="pMargin">{openBr}</p>
                <p className="pMargin">{skillsObj.sd}</p>
                <p className="pMargin">{closeBr}</p>
              </div>
            </div>
            <div className="skills">
              <div className="skillWrap">
                {" "}
                <p className="pMargin">{openBr}</p>
                <p className="pMargin">{skillsObj.fd}</p>
                <p className="pMargin">{closeBr}</p>
              </div>
            </div>
            <div className="skills">
              <div className="skillWrap">
                {" "}
                <p className="pMargin">{openBr}</p>
                <p className="pMargin">{skillsObj.js}</p>
                <p className="pMargin">{closeBr}</p>
              </div>
            </div>
            <div className="skills">
              <div className="skillWrap">
                {" "}
                <p className="pMargin">{openBr}</p>
                <p className="pMargin">{skillsObj.cp}</p>
                <p className="pMargin">{closeBr}</p>
              </div>
            </div>
          </div>

          {/* 3sec */}

          <div className="skillsContent">
            <div className="skills">
              <div className="skillWrap">
                {" "}
                <p className="pMargin">{openBr}</p>
                <p className="pMargin">{skillsObj.h}</p>
                <p className="pMargin">{closeBr}</p>
              </div>
            </div>
            <div className="skills">
              <div className="skillWrap">
                {" "}
                <p className="pMargin">{openBr}</p>
                <p className="pMargin">{skillsObj.c}</p>
                <p className="pMargin">{closeBr}</p>
              </div>
            </div>
            <div className="skills">
              <div className="skillWrap">
                {" "}
                <p className="pMargin">{openBr}</p>
                <p className="pMargin">{skillsObj.s}</p>
                <p className="pMargin">{closeBr}</p>
              </div>
            </div>
            <div className="skills">
              <div className="skillWrap">
                {" "}
                <p className="pMargin">{openBr}</p>
                <p className="pMargin">{skillsObj.mu}</p>
                <p className="pMargin">{closeBr}</p>
              </div>
            </div>
            <div className="skills">
              <div className="skillWrap">
                {" "}
                <p className="pMargin">{openBr}</p>
                <p className="pMargin">{skillsObj.g}</p>
                <p className="pMargin">{closeBr}</p>
              </div>
            </div>
          </div>
        </div>
        <div id="contact" className="section contactCon">
          <div className="contactHeader">
            <div className="headWrapper">
              <div className="headWrap ">{h1Open}</div>
              <div className="portfolioHead">Connect with me</div>
              <div className="headWrap closeTag">{h1Close}</div>
            </div>
          </div>
          <div className="contactContent">
            <div className="contactBox">
              <div className="contact ">
                <div
                  onClick={() => handleClick("instagram")}
                  className="contactWrap"
                >
                  <p className="pMargin">{openBr}</p>
                  <p className="pMargin">Instagram</p>
                  <p className="pMargin">{closeBr}</p>
                </div>
              </div>
              <div className="contact ">
                {" "}
                <div
                  onClick={() => handleClick("twitter")}
                  className="contactWrap contactWrapSmall"
                >
                  <p className="pMargin">{openBr}</p>
                  <p className="pMargin">Twitter</p>
                  <p className="pMargin">{closeBr}</p>
                </div>
              </div>
              <div className="contact ">
                {" "}
                <div
                  onClick={() => handleClick("linkedin")}
                  className="contactWrap contactlinkden"
                >
                  <p className="pMargin">{openBr}</p>
                  <p className="pMargin">Linkedin</p>
                  <p className="pMargin">{closeBr}</p>
                </div>
              </div>
              <div className="contact">
                {" "}
                <div
                  onClick={() => handleClick("gmail")}
                  className="contactWrap contactgmail"
                >
                  <p className="pMargin">{openBr}</p>
                  <p className="pMargin">Gmail</p>
                  <p className="pMargin">{closeBr}</p>
                </div>
              </div>
            </div>
            {idShow && <div className="gmailId">sahil.rao132000@gmail.com</div>}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
