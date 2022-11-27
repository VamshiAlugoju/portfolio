import React from "react";
import "./home.css"; //nav bar styles is in home.css
import { Link } from "react-scroll";
export default function Navbar() {
    
    
      
 
  function handlechange(e) {
    //   let btns = document.querySelectorAll('.navbarr .navlist li')
    //    btns.forEach(btn=>{
    //       btn.classList.remove("navactive")
    //    })
    //    e.target.parentNode.classList.add("navactive")
    console.log("hlel");
  }

  function handleactive(item)
  {
    let anchors = document.querySelectorAll('.navbarr .navlist li a')
    anchors.forEach(anchor=>{
           let boo =   anchor.classList.contains("active")
             if(boo){
              anchor.parentElement.classList.add("navactive")
             }
    })
  }
  return (
    <div className="navbarr">
      <img className="navlogo" src="./images/logo1.png" alt="" />

      <ul className="navlist">
        <li  className="navitems navactive">
          {" "}
          <Link
            to="Home"
            spy={true}
            duration={0}
            smooth={true}
            offset={0}
            onClick={handlechange}
            onSetActive={handleactive}
          >
            home{" "}
          </Link>{" "}
        </li>
        <li className="navitems  ">
          {" "}
          <Link
            to="project"
            spy={true}
            duration={0}
            smooth={true}
            offset={-20}
            onClick={handlechange}
            onSetActive={handleactive}
          >
            projects{" "}
          </Link>
        </li>
        <li className="navitems  ">
          <Link
            to="about"
            spy={true}
            duration={0}
            smooth={true}
            offset={0}
            onClick={handlechange}
            onSetActive={handleactive}
          >
            about{" "}
          </Link>{" "}
        </li>
        <li className="navitems  ">
          {" "}
          <Link
            to="about"
            spy={false}
            duration={500}
            smooth={true}
            offset={50}
            onClick={handlechange}
          >
            {" "}
            about{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}
