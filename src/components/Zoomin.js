import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';

import oolo from "../pictures/JJDelvine_TheOolographer850-80.jpg";
import oolo2 from "../pictures/JJDelvine_TheOolographerDetail3005.jpg";

export default class Zoom extends Component {
    render() {
        return (
            <div className="fluid">
                <div className="fluid__image-container">
                    <p>Scroll over the image to see in more detail (only on desktop)</p>
                    <ReactImageMagnify {...{
                        smallImage: {
                            width: 638,
                            height: 850,
                            src: oolo,
                        },
                        largeImage: {
                            src: oolo2,
                            width: 2254,
                            height: 3005
                        }
                    }}/>
                </div>
            </div>
        );
    }
}
