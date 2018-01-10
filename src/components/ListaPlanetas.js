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
import world from '../images/world.png';
import ModalPlaneta from './ModalPlaneta';

var endereco = "https://swapi.co/api/planets/?page=1";

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
        };
        // this.next = this.next.bind(this)
    }

    handleModalPlaneta = () => {
        console.log(this.state.modalState)
        this.setState({ modalState: !this.state.modalState });
    }

    next = () => {
        if (this.state.resultado.next !== null){
            endereco = this.state.resultado.next
            this.busca()
        }
    }

    componentWillMount() {
       this.busca()
    }

    busca = () => {
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
            })
    }

    render() {
        return (
            <div>
                <Menu />
                <div className="box-content">
                    <Table
                        className="table-body-config"
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
                            <TableRow >
                                <TableHeaderColumn tooltip="ID">ID</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Nome">Name</TableHeaderColumn>
                                <TableHeaderColumn tooltip="População">População</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Clique aqui para ver mais informações">Ações</TableHeaderColumn>
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
                                    <TableRowColumn>{index}</TableRowColumn>
                                    <TableRowColumn>{row.name}</TableRowColumn>
                                    <TableRowColumn>{row.population}</TableRowColumn>
                                    <TableRowColumn>
                                        <button className="button-view-planet"
                                            onClick={
                                                this.handleModalPlaneta
                                            }>
                                            <img src={world} />
                                        </button>
                                    </TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                    <ModalPlaneta click={this.handleModalPlaneta} modalState={this.state.modalState}></ModalPlaneta>
                </div>
                <div>
                    <button onClick={this.next}>></button>
                </div>
            </div>
        );
    }
}

export default ListaPlanetas;