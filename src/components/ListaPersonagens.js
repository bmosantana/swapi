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

var endereco = "https://swapi.co/api/people/?page=1";

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
        };
    }

    handleModalPersonagem = () => {
        console.log(this.state.modalState);
        this.setState({ modalState: !this.state.modalState })
    }

    next = () => {
        if (this.state.resultado.next !== null) {
            endereco = this.state.resultado.next
            this.handleBusca()
        }else{
            alert("Infelizmente não há uma próxima página!");
        }
    }

    previous = () => {
        if (this.state.resultado.previous !== null) {
            endereco = this.state.resultado.previous
            this.handleBusca()
        }else{
            alert("Infelizmente não há páginas anteriores!");
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
                                    <TableHeaderColumn tooltip="Nome">Name</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Altura">Altura</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Ações"></TableHeaderColumn>
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
                                        <TableRowColumn className="font-person"><span className="graph">{row.name}</span></TableRowColumn>
                                        <TableRowColumn className="font-person"><span className="graph">{row.height}</span></TableRowColumn>
                                        <TableRowColumn>
                                            <button className="button-view-p"
                                                onClick={
                                                    this.handleModalPersonagem
                                                }>
                                                <img src={eye} />
                                            </button>
                                        </TableRowColumn>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <ModalPersonagem click={this.handleModalPersonagem} modalState={this.state.modalState}></ModalPersonagem>
                        <div id="btns">
                            <button className="btn-np" id="btn-ant" onClick={this.previous}>Anterior</button>
                            <button className="btn-np" onClick={this.next}>Próximo</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListaPersonagens;