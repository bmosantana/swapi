import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const planeta = {
    name: "",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "",
    gravity: "",
    terrain: "",
    surface_water: "",
    population: "",
    films: [],
    created: "",
    edited: "",
    url: ""
}

class ModalPlaneta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            modalState: false,
            resultado: {result: []},
        }
    }

    componentWillMount(){
        console.log(this.state.result);
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
                    <p>planets</p>
                </Dialog>

            </div>
        );
    }
}

export default ModalPlaneta;