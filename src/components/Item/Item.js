import React from "react";
import "./Item.css";

export const Item = ({inversiones}) => {
    return (
        <>
        <div className="card__dolares">
            <h5 className="dolarNombre">{inversiones.denominacion}</h5>
            <img className="dolarFoto" src={inversiones.foto} alt={inversiones.descripcion}/>
            {/* <link to="/inversiones/id">
                <img className="mas" src="../../img.mas.svg" alt="abrir"/>
            </link> */}
            <h5 className="dolarPrecio">${inversiones.valor}</h5>
        </div>
        </>
    );
};

