import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const planet ={
    name: "Alderaan", 
    rotation_period: "24", 
    orbital_period: "364", 
    diameter: "12500", 
    climate: "temperate", 
    gravity: "1 standard", 
    terrain: "grasslands, mountains", 
    surface_water: "40", 
    population: "2000000000", 
    residents: [
        "https://swapi.co/api/people/5/", 
        "https://swapi.co/api/people/68/", 
        "https://swapi.co/api/people/81/"
    ], 
    films: [
        "https://swapi.co/api/films/6/", 
        "https://swapi.co/api/films/1/"
    ], 
    created: "2014-12-10T11:35:48.479000Z", 
    edited: "2014-12-20T20:58:18.420000Z", 
    url: "https://swapi.co/api/planets/2/"
}

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
                    <div className="content-informations">
                    </div>
                </Dialog>

            </div>
        );
    }
}

export default ModalPlaneta;