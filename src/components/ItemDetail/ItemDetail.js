import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cartContext";
import {ItemCount} from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({item}) => {
    const { addToCart } = useContext(CartContext);
    const [cartNumber, setCartNumber] = useState([]);

    const onAddCart = (counter) => {
        setCartNumber(cartNumber + counter)
    }

    const onAdd = (counter) => {
        addToCart(item, counter);
        onAddCart(counter);
    };
    
    return (
        <div className="inversiones_detail" id={item.to}>
            <div className= "activo__dolarBlue">
                <h2 className="dolarBlue__nombre">{item.denominacion}</h2>
                <img className="activo__foto" src={item.foto} alt={item.descripcion} width= "100px" height= "100px"/>
                <p className="activo__info">{item.descripcion}</p>
                <h4 className="nivelRiesgo">{item.nivelRiesgo}</h4>
                <p className="activo__valor">Valor: ${item.valor}</p>
                <div>
                    <ItemCount initial={1} stock={item.stock}  onAdd={onAdd}  id={item.id} quantity={cartNumber}/>
                </div>
            </div>
        </div> 
    );
};

export default ItemDetail;

