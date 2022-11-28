import React from "react";
import "./home.css";


export default function Home() {
  return (
    <div id="Home" className="Home section">
      <h1 className="title firsth1">Hi</h1>
      <br />
      <h1 className="title">I'm webvital</h1>
      <img className="belowline" src="./images/belowline.png" alt="" />
      <ul className="icons">
        <li className="iconlist">
          <a rel="noreferrer"  href="https://github.com/VamshiAlugoju" target={"_blank"}>
            {" "}
            <i className="fa-brands fa-github"></i>
            
          </a>
        </li>
        <li className="iconlist">
          <a rel="noreferrer"  href="https://www.instagram.com/alugojuvamshi" target={"_blank"}>
            <i className="fa-brands fa-linkedin"></i>{" "}
          </a>
        </li>
        <li className="iconlist">
          <a rel="noreferrer" href="https://www.instagram.com/alugojuvamshi" target={"_blank"}>
            {" "}
            <i className="fa-brands fa-instagram"></i>{" "}
          </a>
        </li>
        <li className="iconlist">
          <a rel="noreferrer"  href="https://www.facebook.com/alugoju.vamshikrishna/" target={"_blank"}>
            {" "}
            <i className="fa-brands fa-facebook"></i>{" "}
          </a>
        </li>
      </ul>

      <button className="btn btn-outline-dark my-4">
        {" "}
        <a rel="noreferrer"  href="#footer"> Contact me</a>
      </button>
    </div>
  );
}
