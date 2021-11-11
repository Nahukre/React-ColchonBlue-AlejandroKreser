import { createContext } from "react";
import { inversiones } from "../services/inversiones"
import React, { useState } from "react";

export const CartContext = createContext();

const Provider = ({ children }) => {
    const [cartData, setCartData] = useState([]);
    // const [items, setItems] = useState(inversiones);
    console.log(cartData);

    const AddToCart = (inversiones, counter) => {
        setCartData((prev) => {
            const isItemInCart = prev.find((cartData) => cartData.inversiones.id === inversiones.id);
            let quantity= counter;
            if(isItemInCart) {
                return cartData.map((currentItem) => 
                currentItem.inversiones.id === inversiones.id
                ? {inversiones, quantity: currentItem.quantity + counter}
                : currentItem,
                );
            }
            return [...prev, {inversiones, quantity}];
        });
    };

    // const AddToCart = ({ denominacion, id, valor, counter}) => {
    //     // const alreadyincart = cartData.findIndex((array) => array.id === id);
    //     // if (alreadyincart !== -1) {
    //     // alert("Ya está en el carrito");
    //     // return;
    //     // }
    //     const selected = {
    //     denominacion: denominacion,
    //     id: id,
    //     valor: valor,
    //     counter: counter,
    //     };
    //     setCartData([...cartData, selected]);
    // };
    
    const Remove = (id) => {
        setCartData(cartData.filter((singal) => singal.id !== id));
    };

    const Buy = () => {
        setCartData([]);
        alert("compra exitosa");
        return;
    };

    return (
        <CartContext.Provider value={{ inversiones, AddToCart, cartData, Remove, Buy }}>
        {children}
        </CartContext.Provider>
    );
};

export default Provider;

