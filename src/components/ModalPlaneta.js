import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ModalPlaneta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            modalState: false,
        }
    }


    render() {

        const actions = [
            <FlatButton
                label="OK"
                primary={true}
                onClick={this.props.click}
            />,
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
                  Planetas
                </Dialog>

            </div>
        );
    }
}

export default ModalPlaneta;