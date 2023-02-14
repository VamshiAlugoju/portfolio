import React from "react";
import "./about.css";
import { Icons } from "./Icons";
import icons from "./icons.js";

export const About = () => {
  const iconsimgs = icons.map((icon) => {
    return <Icons key={icon.key} url={icon.url} title={icon.title} />;
  });

  return (
    <div id="about" className="about section">
      <div className="left">
        <h1>About</h1>
        <p>
          Hi, My name is Vamshi krishna.I live in Hyderabad and I gradudated
          from kakatiya university in Computer Science.
        </p>
        <p>
         Proficient in JAVASCRIPT, C++, and React and some Other skills I
          mentioned aside.
          And  Passionate about implementing and launching new projects.Looking to
          start the career as an entry-level software engineer with a reputed
          firm driven by technology.
        </p>
        <p>
           In my free time,I do nothing as everyone.I just watch youtube or scroll through memes.
            Keep Smiling and have a nice day. 

        </p>
      </div>
      <div className="right">
        <h1>Skills I Have:</h1>
        <div className="icons-right">{iconsimgs}</div>
      </div>
    </div>
  );
};
