import React from "react";

export const Item = ({inversiones}) => {
    return (
        <>
        <div className="card__dolares">
            <h5 className="dolarNombre">Dolar ${inversiones.denominacion}</h5>
            <img className="dolarFoto" src={inversiones.foto} alt={inversiones.descripcion}/>
            <h5 className="dolarPrecio">$${inversiones.valor}</h5>
        </div>
        </>
    );
};

