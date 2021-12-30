import react from "react";
import ReactDOM from "react-dom";
import "./index.css"
import {App} from "./App.jsx"



function Componente({titulo,children}){
    
    // destructurar
    //const {titulo,contenido}=props
    return (
        <div className="container">
            <h1>{titulo}</h1>
            <div>{children}</div>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")

)