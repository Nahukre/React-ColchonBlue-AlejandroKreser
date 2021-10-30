import React from "react";
import {ItemCount} from "../ItemCount/ItemCount";
import "./ItemDetail.css";


export const ItemDetail = ({inversiones}) => {

    return (
        <>
        <div className="inversiones_detail" id={inversiones.to}>
            <div className= "activo__dolarBlue">
                <h2 className="dolarBlue__nombre">{inversiones.denominacion}</h2>
                <img className="activo__foto" src={inversiones.foto} alt={inversiones.descripcion} width= "100px" height= "100px"/>
                <p className="activo__info">{inversiones.descripcion}</p>
                <h4 className="nivelRiesgo">{inversiones.nivelRiesgo}</h4>
                <p className="activo__valor">Valor: ${inversiones.valor}</p>
                <div>
                    <ItemCount initial={1} stock={inversiones.stock}/>
                </div>
            </div>
        </div>  
        </>
    );
};

export default ItemDetail;