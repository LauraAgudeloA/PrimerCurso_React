import React, { Component } from "react";

class Props extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <>
            <h1>Hola! Mi nombre es {this.props.nombre}</h1>
            </>
        );
    }
}

export default Props;