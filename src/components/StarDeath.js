import React, { Component } from 'react';
import stardeath from '../images/stardeath.png';



export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="stardeath">
                <img src={stardeath} height="150px" width="150px" />
            </div>
        );
    }
}