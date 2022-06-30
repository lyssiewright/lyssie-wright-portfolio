import React, { useState } from "react";
import GitHub from "./resources/GitHub.png"
import LinkedIn from "./resources/LinkedIn.png"
import medium from "./resources/medium.png"

function Home() {

  return (
    <div className="home-text">
        <h1>Lyssie Wright</h1>
        <p>Hello there 👋 Welcome to my portfolio! </p>
        <p>I am a recent Software Engineering grad of Flatiron School living in Fort Walton Beach, FL.</p>
        <p>Feel free to look through my resume and projects listed below</p>
        <a href="https://www.linkedin.com/in/lyssie-wright-509b32152" target="_blank">
         <img src={LinkedIn} width="60" height="55" style={{marginRight:"20px"
         }}></img></a>
        <a href="https://github.com/lyssiewright" target="_blank">
         <img src={GitHub} width="60" height="60" style={{marginRight:"20px"}}></img></a>
        <a href="https://medium.com/@lyssie.wright15" target="_blank">
         <img src={medium} width="50" height="45"></img></a>
    </div>
    
  );
}

export default Home;