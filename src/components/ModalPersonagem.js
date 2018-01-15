import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import texture from '../images/texture.png';

class ModalPersonagem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            modalState: false,
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
                        <div className="info-planet-person">
                            <h2>{this.props.personagem.name}</h2>
                            <p>Altura:<span>{this.props.personagem.height}</span></p>
                            <p>Gênero:<span>{this.props.personagem.gender}</span></p>
                            <p>Ano de Nascimento:<span>{this.props.personagem.birth_year}</span></p>
                            <p>Cor de cabelo:<span>{this.props.personagem.hair_color}</span></p>
                            <p>Cor de Pele:<span>{this.props.personagem.skin_color}</span></p>
                            <p>Mundo Natal:<span>{this.props.personagem.homeworld}</span></p>
                            <p>Filmes:
                                <span>
                                    <table>
                                        <tr>
                                            <td>{this.props.personagem.films}</td>
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

export default ModalPersonagem;