// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route path="/">
            <h1>Hello</h1>
          </Route>
          <Route path="/skills">
            <h1>Skills</h1>
          </Route>
          <Route path="/projects">
            <h1>Projects</h1>
          </Route>
          <Route path="/resume">
            <h1>Resume</h1>
          </Route>
          <Route path="/contact">
            <h1>Contact me</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
