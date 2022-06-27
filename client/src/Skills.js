import React from "react";
import javascript from "./resources/javascript-logo.png";
import html from "./resources/html.png";
import css from "./resources/css.png";
import ruby from "./resources/ruby.png";
import rails from "./resources/rails.png";
import postgresql from "./resources/postgresql.png"


function Skills() {


  

  return (
    <div>
        <h2>Skills</h2>
        <br></br>
        <img height="90" width="90" src={javascript}/>
        <img height="90" width="90" src={html} />
        <img height="90" width="90" src={css} />
        <img height="90" width="90" src={ruby} />
        <img height="90" width="90" src={rails} />
        <img height="90" width="90" src={postgresql}/>
    </div>
    
  );
}

export default Skills;