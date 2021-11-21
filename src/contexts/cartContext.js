import { createContext } from "react";
import React, { useState } from "react";

export const CartContext = createContext();

const Provider = ({ children }) => {
    const [cartData, setCartData] = useState([]);

    const itemsTotales = cartData.reduce((total, itemCarrito) => total +itemCarrito.quantity, 0)
    const addToCart = (item, counter) => {
        const itemCarrito = {denominacion: item.denominacion, valor: item.valor, id: item.id, quantity: counter}
        setCartData((prev) => {
            const isItemInCart = prev.find((itemCarrito) => itemCarrito.id === item.id);
            if(isItemInCart) {
                return cartData.map((currentItem) => 
                currentItem.id === item.id
                ? {...itemCarrito, quantity: currentItem.quantity + counter}
                : currentItem,
                );
            }
            return [...prev, itemCarrito];
        });
    };

    const restaCantidad = (cartData) => {
        if(cartData.quantity > 1) {
        setCartData(cartData.quantity - 1)}
    };
    const sumaCantidad = (cartData, item) => {
        if (cartData.quantity < item.stock){
        setCartData(cartData.quantity + 1)}
    };
    console.log(cartData.quantity)
    const remove = (id) => {
        setCartData(cartData.filter((item) => item.id !== id));
    };

    const clear = () => {
        setCartData([]);
    }

    const buy = () => {
        setCartData([]);
        return;
    };

    return (
        <CartContext.Provider value={{ addToCart, cartData, remove, buy, clear, itemsTotales, sumaCantidad, restaCantidad }}>
        {children}
        </CartContext.Provider>
    );
};

export default Provider;

