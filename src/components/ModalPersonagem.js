import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ModalPersonagem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalState: false,
            open: false
        }
    }

    render() {

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.props.click}
            />
        ];


        return (
            <div>
                <Dialog
                    actions={actions}
                    modal={false}
                    open={
                        this.props.modalState
                    }>
                    Personagens
                </Dialog>

            </div>
        );
    }
}

export default ModalPersonagem;