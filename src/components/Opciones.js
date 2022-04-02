import React, { Component } from "react";
import "../index.css"


class Opciones extends Component{
    render(){
        const {opcionA, opcionB} = this.props;
        return (
        <div className="opciones">
        <div className="opcion">
        <button id="A" className="botones" onClick={this.props.clickear}>A</button>
        <h2>{opcionA}</h2>
      </div>
      <div className="opcion">
        <button id= "B"className="botones" onClick={this.props.clickear}>B</button>
        <h2>{opcionB}</h2>
      </div>
    </div>
        );
    }

}

export default Opciones;