import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import texture from '../images/texture.png';

class ModalPlaneta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            modalState: false,
            resultado: { result: [] },
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
                        <div className="info-planet">
                            <h2>{this.props.planeta.name}</h2>
                            <p>População:<span>{this.props.planeta.population}</span></p>
                            <p>Diâmetro:<span>{this.props.planeta.diameter}</span></p>
                            <p>Clima:<span>{this.props.planeta.climate}</span></p>
                            <p>Gravidade:<span>{this.props.planeta.gravity}</span></p>
                            <p>Filmes:
                                <span>
                                    <table>
                                        <tr>
                                            <td>{this.props.planeta.films}</td>
                                        </tr>
                                    </table>
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