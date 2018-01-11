import React, { Component } from 'react';
import Menu from './Menu';
import world from '../images/world.png';
import texture from '../images/texture.png';
import ModalPlaneta from './ModalPlaneta';

var endereco = "https://swapi.co/api/planets/?page=1";

const style = {
    margin: 12,
};

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
                    <div className="position-planets">
                        {this.state.resultado.results.map((row, index) => (
                            <div className="list-planets">
                                <div className="plan-det"
                                    onClick={
                                        this.handleModalPlaneta
                                    }>
                                    <div className="planet">
                                        <span className="radius"></span>
                                        <span className="texture">
                                            <img src={texture} />
                                        </span>
                                    </div>
                                    <p className="font-description">Nome: <span className="graph">{row.name}</span>  </p>
                                    <p className="font-description">População: <span className="graph">{row.population}</span>  </p>
                                </div>
                            </div>
                        ))}
                        <ModalPlaneta planeta={this.state.resultado.results} click={this.handleModalPlaneta} modalState={this.state.modalState}></ModalPlaneta>
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

export default ListaPlanetas;