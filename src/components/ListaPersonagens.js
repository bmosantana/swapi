import React, { Component } from 'react';
import Menu from './Menu';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import eye from '../images/eye.png';
import ModalPersonagem from './ModalPersonagem';
import ModalAnteriorProximoFim from './ModalAnteriorProximoFim';

var endereco = "https://swapi.co/api/people/?page=1";

const personagem = {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "https://swapi.co/api/planets/1/",
    films: [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/",
        "https://swapi.co/api/films/7/"],
    species: [
        "https://swapi.co/api/species/1/"],
    vehicles: [
        "https://swapi.co/api/vehicles/14/",
        "https://swapi.co/api/vehicles/30/"],
    starships: [
        "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/22/"],
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    url: "https://swapi.co/api/people/1/",
}

class ListaPersonagens extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultado: { results: [] },
            modalState: false,
            open: false,
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: false,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: false,
            showCheckboxes: false,
            height: '100%',
            width: '100%',
            personagem: personagem,
            modalAp: false,
        };
    }

    handleModalPersonagem = () => {
        console.log(this.state.modalState);
        this.setState({ modalState: !this.state.modalState })
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
            this.setState({ modalAp: true })
        }
    }

    previous = () => {
        if (this.state.resultado.previous !== null) {
            endereco = this.state.resultado.previous
            this.handleBusca()
        } else {
            this.setState({ modalAp: true })
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
                    <div className="position-persons">
                        <Table
                            height={this.state.height}
                            fixedHeader={this.state.fixedHeader}
                            fixedFooter={this.state.fixedFooter}
                            selectable={this.state.selectable}
                            multiSelectable={this.state.multiSelectable}

                        >
                            <TableHeader
                                displaySelectAll={this.state.showCheckboxes}
                                adjustForCheckbox={this.state.showCheckboxes}
                                enableSelectAll={this.state.enableSelectAll}
                            >

                                <TableRow>
                                    <TableHeaderColumn className="graph-tittle" tooltip="Nome">Name</TableHeaderColumn>
                                    <TableHeaderColumn className="graph-tittle" tooltip="Altura">Altura</TableHeaderColumn>
                                    <TableHeaderColumn className="graph-tittle" tooltip="Ações">Ações</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>

                            <TableBody
                                displayRowCheckbox={this.state.showCheckboxes}
                                deselectOnClickaway={this.state.deselectOnClickaway}
                                showRowHover={this.state.showRowHover}
                                stripedRows={this.state.stripedRows}
                            >
                                {this.state.resultado.results.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableRowColumn ><span className="graph">{row.name}</span></TableRowColumn>
                                        <TableRowColumn ><span className="graph">{row.height}</span></TableRowColumn>
                                        <TableRowColumn>
                                            <button className="button-view-p"
                                                onClick={
                                                    () => {
                                                        this.handleModalPersonagem()
                                                        this.setState({ personagem: row })
                                                    }
                                                }>
                                                <img src={eye} />
                                            </button>
                                        </TableRowColumn>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <ModalPersonagem personagem={this.state.personagem} click={this.handleModalPersonagem} modalState={this.state.modalState}></ModalPersonagem>
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
            </div>
        );
    }
}

export default ListaPersonagens;