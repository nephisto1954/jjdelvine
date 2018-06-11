import React, { Component } from "react";
import "./About.css";


class About extends Component {
  render() {
    return (
      <div className="about-page">
        <div>
          <p id="work-description">
            <em>‘The re-use and re-interpretation of images, strategies, techniques, and anachronisms from the history <br />
             of art is a thread that runs through my practice. I am interested in the use of ‘the detail’ that has developed <br />
            with the photographic reproduction of
            paintings and the publication of catalogues and monographs. <br />
            I use photography and computer imaging to document and modify poses and situations and then deliberately <br />
            reintroduce painterly effects back into the realisation of the image in a sort of reverse process - <br />
            from the perspective of painting after photography.’
            </em>
          </p>

          <p>
            <strong>JJ Delvine</strong> (aka Jeremy James Wood b.1967) is an artist who lives and works in South East London. <br />
            His art practice encompasses painting, curating, sound art, writing and fabrication and his portraits <br />
            have been selected 3 times for the BP Portrait Award.
          </p>
          <p>
            The <a href="http://www.oolographer.com/#" target="_blank">Oolographer</a> is a new project combining Eggs, Painting, Art History and the History of Collections.
          </p>
          <p>
            Please <a href="http://www.jjdelvine.com/#/contact">contact</a> the artist if you are interested in finding out more.
          </p>
        </div>
      </div>
    );
  }
}
export default About;


