import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cartContext";
import {ItemCount} from "../ItemCount/ItemCount";
import Modal from "../Modal/Modal";
import "./ItemDetail.css";

export const ItemDetail = ({to, denominacion, foto, descripcion, nivelRiesgo, valor, stock, id}) => {
    const { AddToCart } = useContext(CartContext);
    const [counter, setCounter] = useState(1);
    // const [cartNumber, setCartNumber] = useState(0);
    const [cart, setCart] = useState(0);

    const resta = () => {
        if(counter > 1) {
        setCounter(counter - 1)}
        else 
        setCounter(counter);
    };
    const suma = () => {
        if (counter < stock){
        setCounter(counter + 1)}
        else
        setCounter(counter);
    };
    const onAdd = () => {
        console.log(counter);
    };
    const resetCounter = () => {
        setCounter(counter - (counter - 1));      
    };
    // const onAddCart = (counter) => {
    //     setCartNumber(counter)
    // }


    // const [cart, setCart] = useState([]);
    
    // const addProduct = () => {
    //     AddToCart( denominacion, id, valor);
    // };
    // const onAdd = (quantityToAdd) => {

    // }

    const addItem = (item, quantity) => {
        const isInCart = cart.find(x => x.producto.id === item.id)

        if (isInCart) {
            let nuevaCantidad = isInCart.cantidad + counter;
            let posicion = cart.indexOf(isInCart);
            cart[posicion].cantidad = nuevaCantidad;
            setCart(cart);
        } else{
            setCart([...cart, {producto: item, cantidad: quantity}]);
        }
        console.log(cart);
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
                    <ItemCount initial={1} stock={stock} counter={counter} addItem={addItem} suma={suma} resta={resta} value={{denominacion, id, valor}} AddToCart={AddToCart} onAdd={onAdd} resetCounter={resetCounter} /> 
                </div>
            </div>
        </div> 
        </>
    );
};


export default ItemDetail;

// onAdd={OnAdd} onClick={x => addToCart(item, counter)}