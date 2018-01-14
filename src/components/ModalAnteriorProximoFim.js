import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import texture from '../images/texture.png';

class ModalAnteriorProximoFim extends Component {

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
                    <div className="modal-ap">
                        <p>Não há mais páginas a serem visualizadas!</p>
                    </div>
                </Dialog>

            </div>
        );
    }
}

export default ModalAnteriorProximoFim;