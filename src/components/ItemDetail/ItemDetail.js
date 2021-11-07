import {ItemCount} from "../ItemCount/ItemCount";
import "./ItemDetail.css";


export const ItemDetail = ({to, denominacion, foto, descripcion, nivelRiesgo, valor, stock}) => {
    
    return (
        <>
        <div className="inversiones_detail" id={to}>
            <div className= "activo__dolarBlue">
                <h2 className="dolarBlue__nombre">{denominacion}</h2>
                <img className="activo__foto" src={foto} alt={descripcion} width= "100px" height= "100px"/>
                <p className="activo__info">{descripcion}</p>
                <h4 className="nivelRiesgo">{nivelRiesgo}</h4>
                <p className="activo__valor">Valor: ${valor}</p>
                <div>
                    <ItemCount initial={1} stock={stock}/>
                </div>
            </div>
        </div> 
        </>
    );
};


export default ItemDetail;