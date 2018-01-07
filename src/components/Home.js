import React, { Component } from 'react';
import Particles from 'react-particles-js';
import StarDeath from './StarDeath';
import stardeath from '../images/stardeath.png';


export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="inital-page">

                <Particles
                    width="100%"
                    height="100%"
                    params={{
                        particles: {
                            line_linked: {
                                shadow: {
                                    enable: true,
                                    color: "#efff00",
                                    blur: 1
                                }
                            }
                        }
                    }}



                />

                <div className="stardeath">
                    <img src={stardeath} height="150px" width="150px" />
                </div>

                {/* <div class="planet">
                    <span class="radius"></span>
                    <span class="texture"><img src={stardeath} height="150px" width="150px" /></span>
                </div> */}
            </div>

        );
    }
}