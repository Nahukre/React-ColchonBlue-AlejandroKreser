import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({inversiones}) => {

    return (
        <div className="card__dolares">
            <h5 className="dolarNombre">{inversiones.denominacion}</h5>
            <img className="dolarFoto" src={inversiones.foto} alt={inversiones.denominacion}/>
            <h5 className="dolarPrecio" id={inversiones.to}>${inversiones.valor}</h5>
            <Link to={`/item/${inversiones.id}`}>
                <button className="detalle">Comprar</button>
            </Link> 
        </div>
    );
};

