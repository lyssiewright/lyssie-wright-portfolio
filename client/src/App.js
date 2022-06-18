// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import Skills from "./Skills";

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);




  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route path="/contact">
            <h1>Contact me</h1>
          </Route>
        <Route path="/resume">
            <h1>Resume</h1>
            <Resume></Resume>
          </Route>
          <Route path="/projects">
            <h1>Projects</h1>
          </Route>
          <Route path="/skills">
            <Skills></Skills>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
