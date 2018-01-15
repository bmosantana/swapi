import React, { Component } from 'react';

class Menu extends Component {
 
    render() {
        return (
            <div>
                <div>
                    <ul id="nav">
                        <li><a href="/">Planetas</a></li>
                        <li><a href="/personagens">Personagens</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;