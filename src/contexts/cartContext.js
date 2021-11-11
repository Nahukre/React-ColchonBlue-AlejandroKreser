import { createContext } from "react";
import React, { useState } from "react";

export const CartContext = createContext();

const Provider = ({ children }) => {
    const [cartData, setCartData] = useState([]);
    // const [items, setItems] = useState(inversiones);
    console.log(cartData);

    const addToCart = (item, counter) => {
        setCartData((prev) => {
            const isItemInCart = prev.find((cartData) => cartData.item.id === item.id);
            let quantity= counter;
            if(isItemInCart) {
                return cartData.map((currentItem) => 
                currentItem.item.id === item.id
                ? {item, quantity: currentItem.quantity + quantity}
                : currentItem,
                );
            }
            return [...prev, {item, quantity}];
        });
    };

    const remove = (id) => {
        setCartData(cartData.filter((singal) => singal.id !== id));
    };
    const clear = () => {
        setCartData([]);
    }

    const buy = () => {
        setCartData([]);
        alert("compra exitosa");
        return;
    };

    return (
        <CartContext.Provider value={{ addToCart, cartData, remove, buy, clear }}>
        {children}
        </CartContext.Provider>
    );
};

export default Provider;

