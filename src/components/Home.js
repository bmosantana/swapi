import React, { Component } from 'react';
import Menu from './Menu';
import abre from '../images/abre.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Menu />
                <img className="imagem" src={abre} />
            </div>
        );
    }
}

export default Home;