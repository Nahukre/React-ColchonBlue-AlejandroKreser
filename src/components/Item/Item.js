import React from "react";
import "./Item.css";
// import mas from "../../img/mas.svg";
import { HashLink as Link } from "react-router-hash-link";

export const Item = ({inversiones}) => {

    return (
        <>
        <div className="card__dolares">
            <h5 className="dolarNombre">{inversiones.denominacion}</h5>
            <img className="dolarFoto" src={inversiones.foto} alt={inversiones.descripcion}/>
            <h5 className="dolarPrecio" id={inversiones.to}>${inversiones.valor}</h5>
            <Link to={`item/${inversiones.id}`}>
                <button className="detalle">Comprar</button>
                {/* <img className="mas" src={mas} alt="abrir"/> */}
            </Link> 
        </div>
        </>
    );
};

