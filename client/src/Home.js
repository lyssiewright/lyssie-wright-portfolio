import React, { useState } from "react";
import GitHub from "./resources/GitHub.png"
import LinkedIn from "./resources/LinkedIn.png"
import medium from "./resources/medium.png"

function Home() {

  return (
    <div>
        <h1>Lyssie Wright</h1>
        <p>Hello there, welcome to my portfolio! </p>
        <p>I am a recent Software Engineering grad living in Fort Walton Beach, FL.</p>
        <a href="https://www.linkedin.com/in/lyssie-wright-509b32152" target="_blank">
         <img src={LinkedIn} width="60" height="55"></img></a>
        <a href="https://github.com/lyssiewright" target="_blank">
         <img src={GitHub} width="60" height="60"></img></a>
        <a href="https://medium.com/@lyssie.wright15" target="_blank">
         <img src={medium} width="50" height="45"></img></a>
    </div>
    
  );
}

export default Home;