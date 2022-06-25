import React from "react";
import javascript from "./resources/javascript-logo.png";
import html from "./resources/html.png";
import css from "./resources/css.png";
import ruby from "./resources/ruby.png";
import rails from "./resources/rails.png";


function Skills() {


  

  return (
    <div>
        <h2>Skills</h2>
        <br></br>
        <img height="70" width="70" src={javascript}/>
        <img height="70" width="70" src={html} />
        <img height="70" width="70" src={css} />
        <img height="70" width="70" src={ruby} />
        <img height="70" width="70" src={rails} />

    </div>
    
  );
}

export default Skills;