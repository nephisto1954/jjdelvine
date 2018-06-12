import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import Oolographer from "./Oolographer";
import IconButton from "./components/pages.js";
import "./Main.css";


const styles = {
  transition: 'all 0.4s ease-out'
}


class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: true
    };
    this.toggleDiv = this.toggleDiv.bind(this)
  }

  toggleDiv() {
    const { show } = this.state;

    this.setState({
      show: true
    });
  }

  render() {
    return (
      <HashRouter>
        <div>
          <header>
            JJ Delvine
          </header>
          <nav>
            <a className="handle" onClick={this.toogleDiv} style={{cursor: 'pointer'}}>Menu</a>
            {this.state.show && <Ul />}
          </nav>
          <section className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/oolographer" component={Oolographer}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </section>
          <footer>
            Created by Tanguy Chennaux
          </footer>
        </div>
      </HashRouter>
    );
  }
}

class Ul extends Component {
  render() {
    return(
      <ul className="showing">
        <NavLink exact to="/"><li>Home</li></NavLink>
        <NavLink to="/projects"><li>Projects</li></NavLink>
        <NavLink to="/Oolographer"><li>Oolographer</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
        <NavLink to="/contact"><li>Contact</li></NavLink>
      </ul>
    )
  }
}

export default Main;



