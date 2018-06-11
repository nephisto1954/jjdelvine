import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';

import oolo from "../pictures/JJDelvine_TheOolographer850-80.jpg";
import oolo3 from "../pictures/JJDelvine_TheOolographerIndex.jpg";

export default class Zoomin extends Component {
    render() {
        return (
            <div className="fluid">
                <div className="fluid__image-container">
                    <ReactImageMagnify {...{
                        smallImage: {
                            width: 638,
                            height: 850,
                            src: oolo,
                        },
                        largeImage: {
                            src: oolo3,
                            width: 2928,
                            height: 3904
                        }
                    }}/>
                    <p>Scroll over the image for more information</p>
                </div>
            </div>
        );
    }
}
