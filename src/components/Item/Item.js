import React from "react";
import "./Item.css";
import mas from "../../img/mas.svg";
import { NavLink } from "react-router-dom";

export const Item = ({inversiones}) => {

    return (
        <>
        <div className="card__dolares">
            <h5 className="dolarNombre">{inversiones.denominacion}</h5>
            <img className="dolarFoto" src={inversiones.foto} alt={inversiones.descripcion}/>
            <NavLink to="../../pages/Inversiones/Inversiones#{inversiones.to}">
                <img className="mas" src={mas} alt="abrir"/>
            </NavLink> 
            <h5 className="dolarPrecio">${inversiones.valor}</h5>
        </div>
        </>
    );
};

