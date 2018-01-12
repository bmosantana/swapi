import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import texture from '../images/texture.png';

const planeta = {
    name: "Tatooine",
    rotation_period: "23",
    orbital_period: "304",
    diameter: "10465",
    climate: "arid",
    gravity: "1 standard",
    terrain: "desert",
    surface_water: "1",
    population: "200000",
    residents: [
        "https://swapi.co/api/people/1/",
        "https://swapi.co/api/people/2/",
        "https://swapi.co/api/people/4/",
        "https://swapi.co/api/people/6/",
        "https://swapi.co/api/people/7/",
        "https://swapi.co/api/people/8/",
        "https://swapi.co/api/people/9/",
        "https://swapi.co/api/people/11/",
        "https://swapi.co/api/people/43/",
        "https://swapi.co/api/people/62/"
    ],
    films: [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/4/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/"
    ],
    created: "2014-12-09T13:50:49.641000Z",
    edited: "2014-12-21T20:48:04.175778Z",
    url: "https://swapi.co/api/planets/1/"
}
class ModalPlaneta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            modalState: false,
            resultado: { result: [] },
            urlPlanet: "",

        }
    }

    componentWillMount() {

    }


    render() {

        const actions = [
            <div id="btns">
                <button className="btn-np" id="btn-ok" onClick={this.props.click}>OK</button>

            </div>
        ];

        return (
            <div>
                <Dialog
                    actions={actions}
                    modal={false}
                    open={
                        this.props.modalState
                    }
                >
                    <div className="modal-plan">
                        <div >
                            <div className="planet">
                                <span className="radius"></span>
                                <span className="texture">
                                    <img src={texture} />
                                </span>
                            </div>
                        </div>
                        <div className="info-planet">
                            <h2>{planeta.name}</h2>
                            <p>População:<span>{planeta.population}</span></p>
                            <p>Diâmetro:<span>{planeta.diameter}</span></p>
                            <p>Clima:<span>{planeta.climate}</span></p>
                            <p>Gravidade:<span>{planeta.gravity}</span></p>
                            <p>Filmes:
                                <span>
                                    {planeta.films.length}
                                </span>
                            </p>
                        </div>
                    </div>
                </Dialog>

            </div>
        );
    }
}

export default ModalPlaneta;