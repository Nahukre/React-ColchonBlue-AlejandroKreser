import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cartContext";
import {ItemCount} from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({item}) => {
    const { AddToCart } = useContext(CartContext);
    const [cartNumber, setCartNumber] = useState([]);
    


    const onAddCart = (counter) => {
        setCartNumber(cartNumber + counter)
        console.log(counter)
    }
    console.log(cartNumber);
    

    // const addToCart = (item, quantity) => {
    //     const isInCart = cart.find(x => x.producto.id === item.id)

    //     if (isInCart) {
    //         let nuevaCantidad = isInCart.cantidad + counter;
    //         let posicion = cart.indexof(isInCart);
    //         cart[posicion].cantidad = nuevaCantidad;
    //         setCart(cart);
    //     } else{
    //         setCart([...cart, {producto: item, cantidad: quantity}]);
    //     }
    // }
  



    return (
        <>
        <div className="inversiones_detail" id={item.to}>
            <div className= "activo__dolarBlue">
                <h2 className="dolarBlue__nombre">{item.denominacion}</h2>
                <img className="activo__foto" src={item.foto} alt={item.descripcion} width= "100px" height= "100px"/>
                <p className="activo__info">{item.descripcion}</p>
                <h4 className="nivelRiesgo">{item.nivelRiesgo}</h4>
                <p className="activo__valor">Valor: ${item.valor}</p>
                <div>
                    <ItemCount initial={1} stock={item.stock}  onAddCart={onAddCart}  AddToCart={AddToCart} quantity={cartNumber}/>
                </div>
            </div>
        </div> 
        </>
    );
};


export default ItemDetail;

// onAdd={OnAdd} onClick={x => addToCart(item, counter)}