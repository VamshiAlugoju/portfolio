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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
          nobis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quasi
          libero eius in eos autem architecto sed? Illo, accusantium. Est,
          exercitationem laudantium. Quas voluptas expedita non doloribus dicta
          ut molestiae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quasi
          libero eius in eos autem architecto sed? Illo, accusantium. Est,
          exercitationem laudantium. Quas voluptas expedita non doloribus dicta
          ut molestiae.
        </p>
      </div>
      <div className="right">
        <h1>Skills I Have:</h1>
        <div className="icons-right">{iconsimgs}</div>
      </div>
    </div>
  );
};
