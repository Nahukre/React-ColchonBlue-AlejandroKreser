import { Item } from "./Item";

export const ItemList = ({inversiones}) => {
    return (
        
        <><Item />
        <div className="card__dolares">
            <h5 className="dolarNombre">Dolar ${inversiones.denominacion}</h5>
            <img className="dolarFoto" src={inversiones.foto} alt="foto dolar"/>
            <h5 className="dolarPrecio">$${inversiones.valor}</h5>
        </div>
        </>
    );
};
export default ItemList;