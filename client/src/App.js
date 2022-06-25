// client/src/components/App.js
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import Skills from "./Skills";
import Projects from "./Projects";
import {Link} from "react-scroll"
import Contact from "./Contact";

function App() {

  return (
      <div className="App">
        <header className="nav">
          <nav className="nav__container__actions">
            <ul className="nav-list">
              <li>
                <Link activeClass="active" smooth spy to="about">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="resume">
                  RESUME
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="projects">
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="skills">
                  SKILLS
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="contact">
                  CONTACT ME
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <section id="about"><Home></Home></section>
        <section id="resume"><Resume></Resume></section>
        <section id="projects"><Projects></Projects></section>
        <section id="skills"><Skills></Skills></section>
        <section id="contact"><Contact></Contact></section>
      </div>
  );
}

export default App;
