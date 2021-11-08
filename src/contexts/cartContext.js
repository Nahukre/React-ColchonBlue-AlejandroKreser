import { createContext } from "react";
import { inversiones } from "../services/inversiones"
import React, { useState } from "react";

export const CartContext = createContext();

const Provider = ({ children }) => {
    const [cartData, setCartData] = useState([]);
    console.log(cartData);

    const AddToCart = ({ denominacion, id, valor }) => {
        const alreadyincart = cartData.findIndex((array) => array.id === id);
        if (alreadyincart !== -1) {
        alert("Ya está en el carrito");
        return;
        }
        const selected = {
        denominacion,
        id,
        valor,
        };
        setCartData([...cartData, selected]);
    };

    const Remove = (id) => {
        setCartData(cartData.filter((singal) => singal.id !== id));
    };

    const Buy = () => {
        setCartData([]);
      // toast("Payment Successfull", { type: "success" });
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

