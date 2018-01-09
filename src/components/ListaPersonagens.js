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

const tableData = [
    {
        name: 'John Smith',
        status: 'Employed',
    },
    {
        name: 'Randal White',
        status: 'Unemployed',
    },
    {
        name: 'Stephanie Sanders',
        status: 'Employed',
    },
    {
        name: 'Steve Brown',
        status: 'Employed',
    },
    {
        name: 'Joyce Whitten',
        status: 'Employed',
    },
    {
        name: 'Samuel Roberts',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
    {
        name: 'Samuel Roberts',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
    {
        name: 'Samuel Roberts',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    }, {
        name: 'Samuel Roberts',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    }, {
        name: 'Samuel Roberts',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    }, {
        name: 'Samuel Roberts',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    }
    
];

class ListaPersonagens extends Component {
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
            open: false
        };
    }

    handleModalPersonagem = () => {
        console.log(this.state.modalState);
        this.setState({modalState: !this.state.modalState})
    }
    render() {
        return (
            <div>
                <Menu />
                <div className="box-content">
                    <Table
                        className="table-body-config"
                        height={this.state.height}
                        width={this.state.width}
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
                                <TableHeaderColumn tooltip="ID">ID</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Nome">Nome</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Altura">Altura</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Clique aqui para ver mais informações">Ações</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={this.state.showCheckboxes}
                            deselectOnClickaway={this.state.deselectOnClickaway}
                            showRowHover={this.state.showRowHover}
                            stripedRows={this.state.stripedRows}
                        >
                            {tableData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableRowColumn>{index}</TableRowColumn>
                                    <TableRowColumn>{row.name}</TableRowColumn>
                                    <TableRowColumn>{row.status}</TableRowColumn>
                                    <TableRowColumn>
                                        <button className="button-view-planet"
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
                </div>
            </div>
        );
    }
}

export default ListaPersonagens;