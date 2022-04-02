import React, { Component } from "react";
import "../index.css";
import data from "./data.json";
import Opciones from "../components/Opciones";
import Recordatorio from "../components/Recordatorio";


class Main extends Component{
    constructor (props){
        super(props);
        this.state = {
            historial: [],
            seleccionPrevia: "",
            contador: 0,
        };
    }
    
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.contador !== this.state.contador) {
            this.state.historial.push(this.state.seleccionPrevia);
        }
    }
   
    clickear = (e) => {
        const click = e.target.id;
        if(this.state.contador >= 7) {
            alert('Fin del juego.');
        }if (click === "A" && this.state.seleccionPrevia !== "A"){
            this.setState({
                seleccionPrevia: click,
                contador: this.state.contador + 1,
            })
            this.state.opcionesElegidas.push(click)
        }else if(click === "B" && this.state.seleccionPrevia !=="B"){ 
            this.setState({
                seleccionPrevia: click,
                contador: this.state.contador + 3,
            })
            this.state.opcionesElegidas.push(click)
        }else if(click === "A" && this.state.seleccionPrevia !== "B"){
            this.setState({
                seleccionPrevia: click,
                contador: this.state.contador + 3,
            })
            this.state.opcionesElegidas.push(click)
        }else if(click === "B" && this.state.seleccionPrevia !=="A"){
            this.setState({
                seleccionPrevia: click,
                contador: this.state.contador + 2,
            })
            this.state.opcionesElegidas.push(click)
        }
    }
    
    render(){
        return (
            <div className="layout">
                <h1 className="historia">{data[this.state.contador].historia}</h1>
                <Opciones
                    clickear={this.clickear}
                    opcionA={data[this.state.contador].opciones.a}
                    opcionB={data[this.state.contador].opciones.b}
                />
                <Recordatorio
                    seleccionPrevia={this.state.seleccionPrevia}
                    historial={this.state.historial.map(
                        (e, index) => (
                            <li key={index}>{e}</li>
                        ),
                        data[this.state.contador].id
                    )}
                />
            </div>
        )
    }

    
}
export default Main;