import React, { Component } from 'react';
import Menu from './Menu';
import texture from '../images/texture.png';
import ModalPlaneta from './ModalPlaneta';
import ModalAnteriorProximoFim from './ModalAnteriorProximoFim';
import { randomBytes } from 'crypto';

var endereco = "https://swapi.co/api/planets/?page=1";

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

class ListaPlanetas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fixedHeader: false,
            fixedFooter: false,
            stripedRows: false,
            showRowHover: false,
            selectable: false,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: false,
            showCheckboxes: false,
            height: '100%',
            width: '100%',

            modalState: false,
            open: false,
            resultado: { results: [] },
            planeta: planeta,
            modalAp: false,
        };
        // this.next = this.next.bind(this)    
    }

    handleModalPlaneta = () => {
        console.log(this.state.modalState)
        this.setState({ modalState: !this.state.modalState });
    }

    handleModalAP = () => {
        console.log(this.state.modalAp)
        this.setState({ modalAp: !this.state.modalAp });
    }

    next = () => {
        if (this.state.resultado.next !== null) {
            endereco = this.state.resultado.next
            this.handleBusca()
        } else {
            this.setState({modalAp: true})
        }
    }

    previous = () => {
        if (this.state.resultado.previous !== null) {
            endereco = this.state.resultado.previous
            this.handleBusca()
        } else {
            this.setState({modalAp: true})
        }
    }

    componentWillMount() {
        this.handleBusca()
    }

    handleBusca = () => {
        fetch(endereco, {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        })
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({ resultado: result })
                console.log(result)
            })
    }

    render() {
        return (
            <div>
                <Menu />
                <div className="box-content">
                    <div className="position-planets">
                        {this.state.resultado.results.map((row, index) => (
                            <div className="list-planets">
                                <div className="plan-det"
                                    onClick={
                                        () => {
                                            this.handleModalPlaneta()
                                            this.setState({ planeta: row })
                                        }
                                    }>
                                    <div className="planet">
                                        <span className="radius"></span>
                                        <span className="texture" style={{ backgroundImage: 'url(' + texture + ')' }}></span>
                                    </div>
                                    <p className="font-description">Nome: <span className="graph">{row.name}</span>  </p>
                                    <p className="font-description">População: <span className="graph">{row.population}</span>  </p>
                                </div>
                            </div>
                        ))}
                        <ModalPlaneta planeta={this.state.planeta} click={this.handleModalPlaneta} modalState={this.state.modalState}></ModalPlaneta>
                        <div id="btns">
                            <button className="btn-np" id="btn-ant" onClick={() => {
                                this.previous()
                            }}>Anterior</button>

                            <button className="btn-np" onClick={() => {
                                this.next()
                               
                            }}>Próximo</button>
                            <ModalAnteriorProximoFim click={this.handleModalAP} modalState={this.state.modalAp}></ModalAnteriorProximoFim>
                        </div>

                    </div>
                </div>
            </div >
        );
    }
}

export default ListaPlanetas;