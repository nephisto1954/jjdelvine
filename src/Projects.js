import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import './Projects.css';


const details = [
  { src: require("./details/OolographerDetail300-80.jpg"), width: 1, height: 1},
  { src: require("./details/BlackEyeDetail300-80.jpg"), width: 1, height: 1},
  { src: require("./details/SistersDetail2_300-80.jpg"), width: 1, height: 1,},
  { src: require("./details/AfterReynoldsDetail300-80.jpg"), width: 1, height: 1,},
  { src: require("./details/DaddyPigDetail300-80.jpg"), width: 1, height: 1,},
  { src: require("./details/DogsDetail300-30.jpg"), width: 1, height: 1,},
  { src: require("./details/OBMDetail300-80.jpg"), width: 1, height: 1,},
  { src: require("./details/BeachDetail300-80.jpg"), width: 1, height: 1,},
  { src: require("./details/MijiDetail300-80.jpg"), width: 1, height: 1,},
  { src: require("./details/WrightVesuviusDetail300-80.jpg"), width: 1, height: 1,},
  { src: require("./details/GrandTour2Detail300-80.jpg"), width: 1, height: 1,},
  { src: require("./details/VolcanoLoverDetail300-80.jpg"), width: 1, height: 1,},
  { src: require("./details/RenaissancescapeDetail300-80.jpg"), width: 1, height: 1,},
  { src: require("./details/FirebrandDetail300-80.jpg"), width: 1, height: 1,},
  { src: require("./details/BubbleDetail300-80.jpg"), width: 1, height: 1,},
  { src: require("./details/DisappearanceDetail300-80.jpg"), width: 1, height: 1,},

];

const photos = [
  { src: require("./pictures/JJDelvine_TheOolographerR.jpg")},
  { src: require("./pictures/JJDelvine_GirlWithABlackEye.jpg")},
  { src: require("./pictures/JJDelvine_Sisters.jpg")},
  { src: require("./pictures/JJDelvine_DetailAfterReynolds.jpg")},
  { src: require("./pictures/JJDelvine_DaddyPig.jpg")},
  { src: require("./pictures/JJDelvine_IsleOfDogs.jpg")},
  { src: require("./pictures/JJDelvine_OldBiscuitMan.jpg")},
  { src: require("./pictures/JJDelvine_Beach.jpg")},
  { src: require("./pictures/JJDelvine_ReflectionsOfMiji.jpg")},
  { src: require("./pictures/JJDelvine_WrightAtVesuvius.jpg")},
  { src: require("./pictures/JJDelvine_GrandTour.jpg")},
  { src: require("./pictures/JJDelvine_VolcanoLover.jpg")},
  { src: require("./pictures/JJDelvine_Renaissance-scape.jpg")},
  { src: require("./pictures/JJDelvine_Firebrand.jpg")},
  { src: require("./pictures/JJDelvine_Bubble.jpg")},
  { src: require("./pictures/JJDelvine_Disappearance.jpg")},
  { src: require("./pictures/JJDelvine_Quincunx.jpg")},
];


class Projects extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
        <Gallery photos={details} onClick={this.openLightbox} id="gallery"  />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          spinnerColor="black"
        />
      </div>
    )
  }
}
export default Projects;
