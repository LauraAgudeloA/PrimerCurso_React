import React, { Component } from "react";

class EstilosEnLinea extends Component {
    state = {}
    render() {

    let age=29;

    const titulos = {
        textAling:'Center',
        color:'blue',
        backgroundColor:age>=27 ? 'orange' : 'red'
    }
        return (
            <>
                <h1 style={titulos}>Soy un titulo</h1>
            </>
        );
    }
}

export default EstilosEnLinea;