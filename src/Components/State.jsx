import React, { Component } from "react";

class State extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        name: "Laura",
        apellidos: "Agudelo"
    }

    cambiarDatos() {
        //Cambiar funciones
        if (this.state.name === "Laura" && this.state.apellidos === "Agudelo") {
            this.setState({ name: "Lina", apellidos: "Arias" })
        }else{
            this.setState({ name: "Laura", apellidos: "Agudelo" })
        }
    }

    render() {
        return (
            <>
                <h2>Mi nombre es {this.state.name} {this.state.apellidos}</h2>
                <button onClick={this.cambiarDatos.bind(this)}> Pulsar</button>
            </>
        );
    }
}

export default State;