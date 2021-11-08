import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cartContext";
import {ItemCount} from "../ItemCount/ItemCount";
import "./ItemDetail.css";


export const ItemDetail = ({to, denominacion, foto, descripcion, nivelRiesgo, valor, stock}) => {
    const { AddToCart } = useContext(CartContext);
    const [cart, setCart] = useState([]);


    const onAdd = (quantityToAdd) => {

    }

    const addToCart = (item, quantity) => {
        const isInCart = cart.find(x => x.producto.id === item.id)

        if (isInCart) {
            let nuevaCantidad = isInCart.cantidad + counter;
            let posicion = cart.indexof(isInCart);
            cart[posicion].cantidad = nuevaCantidad;
            setCart(cart);
        } else{
            setCart([...cart, {producto: item, cantidad: quantity}]);
        }
    }
  



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
                    <ItemCount initial={1} stock={stock} onAdd={OnAdd} onClick={x => addToCart(item, counter)}/> 
                </div>
            </div>
        </div> 
        </>
    );
};


export default ItemDetail;