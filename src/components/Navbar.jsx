import React from "react";
import "./home.css"; //nav bar styles is in home.css
import { Link } from "react-scroll";
import logo from "../images/logo1.png";


export default function Navbar() {
  let [yyy, setyyy] = React.useState(0);
  const [bgnav, setbgnav] = React.useState({ backgroundColor: "yellow" });
  console.log(yyy);
  React.useEffect(() => {
    const off = () => setyyy(window.scrollY);
    window.removeEventListener("scroll", off);
    window.addEventListener("scroll", off, { passive: true });

    setbgnav((prevnav) => {
      if (yyy > 600 && yyy <= 1280) {
        return {
          ...prevnav,
          backgroundColor: " #ADEFD1ff",
        };
      } else {
        return {
          ...prevnav,
          backgroundColor: "  #00203FFF ",
        };
      }
    });
  }, [yyy]);

  

  return (
    <div className="navbarr" style={bgnav}>
     <img   className="navlogo" src={logo} alt="" />  

      <ul className="navlist">
        <li className="navitems">
          {" "}
          <Link
            to="Home"
            spy={true}
            duration={0}
            smooth={true}
            offset={0}
            activeClass="active"
          >
            home{" "}
          </Link> 
        </li>
        <li className="navitems  ">
          {" "}
          <Link to="project" spy={true} duration={0} smooth={true} offset={0}>
            projects{" "}
          </Link>
        </li>
        <li className="navitems  ">
          <Link to="about" spy={true} duration={0} smooth={true} offset={-50}>
            about{" "}
          </Link> 
        </li>
        <li className="navitems  ">
          {" "}
          <Link
            to="footer"
            spy={true}
            duration={0}
            smooth={true}
            offset={-200}
          >
            {" "}
            contact{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}
