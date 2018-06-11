import React, { Component } from "react";
import "./Oolographer.css";
import Zoom from './components/Zoomin.js';

class Oolographer extends Component {
  render() {
    return (
      <div>
        <div className="grid">
            <Zoom className="oolographer-page"/>
        </div>
        <div className="grid-small"/>
      </div>
    );
  }
}

export default Oolographer;
