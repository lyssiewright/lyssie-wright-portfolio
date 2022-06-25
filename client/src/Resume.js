import React from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import resume from "./Lyssie-Wright-Resume.pdf"
import resume from "./resources/Lyssie-Wright.png"

function Resume() {


  

  return (
    <div className="resume">
        <h2>Resume</h2>
        <img height="600"
            width="auto"
            src={resume}/>
        </div>
  );
}

export default Resume;