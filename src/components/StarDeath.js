import React, { Component } from 'react';
import stardeath from '../images/stardeath.png';



export default class StarDeath extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <a href="#" className="link-pages"> <img src={stardeath} className="stardeath" height="150px" width="150px" /> </a>
        );
    }
}