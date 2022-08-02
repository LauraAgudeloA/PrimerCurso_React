import React, {Component} from "react";
import styles from './EstilosEnModulo.module.css'

class EstilosEnModulo extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
            <h1 className={styles.titulo}>Estamos en modulo</h1>
            </>
         );
    }
}
 
export default EstilosEnModulo;