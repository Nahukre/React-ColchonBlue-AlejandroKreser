import { CartContext } from "./cartContext";
import React, { useState } from "react";
// import { toast } from "react-toastify";
import { inversiones } from "../services/inversiones"
// export const Mycon = createContext();

// export default function CartProvider({defaultValue = [], children}) {
//     const [cart, SetCart] = useState(defaultValue);


//     function getFromCart(id) {
//         return cart.find(inversiones => inversiones.id === id)
//     }
//     function isInCart(id) {
//         return id === undefined ? undefined :getFromCart !== undefined
//     }
//     function addToCart(inversiones) {
//         if (isInCart(inversiones && inversiones.id)) {
//             console.log("add");
//             return;
//         }
//         SetCart([...cart, inversiones]);
//     }
//     return <CartContext.Provider value={{cart, addToCart, isInCart, cartSize: cart.length}}>
//         {children}
//     </CartContext.Provider>
// };


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
