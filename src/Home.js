import React, { Component } from "react";
import "./Home.css";
import SimpleSlider from './components/ExternalLargeImage.js';

class Home extends Component {
  render() {
    return (
      <div className="home-Oolographer">
        <img src={require("./pictures/JJDelvine_EaselA4-300.jpg")} alt="JJ Delvine studio" id="banner-image" />
      </div>
    );
  }
}

export default Home;

