import React from "react";
import { Title } from "../Title/Title";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { Link } from "react-router-dom";



const CartPage = () => {
    const { cartData, remove, buy, clear } = useContext(CartContext);
    let Valor = 0;
    cartData.forEach(({item}) => {
    Valor = (item.quantity) * (item.valor);
    });
    console.log(Valor);
    const valorTotal = Valor ;
    

    return (
        <div className="cart">   
            <Title text="Carrito"/>
            <div key={cartData.id}>
                {cartData.map(({item}) => (
                    <div
                    key={item.id}
                    item={item}
                    style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly"
                    }}>
                    <p>{item.denominacion}</p>
                    <p>Valor: {item.valor}</p>
                    <p>Total: {valorTotal}</p>
                    <button onClick={() => remove(item.id)}>Eliminar</button>
                    </div>
                ))}
                {cartData.length >= 1 ? (
                    <>
                    {" "}
                    <h3>
                    Items: ({cartData.length}) Valor total: {Valor}
                    </h3>{" "}
                    <button onClick={clear}>Vaciar carrito</button>
                    <button onClick={buy}>Pagar Ahora</button>{" "}
                </>
                ) : (
                <><h3>El carrito está vacio</h3>
                <Link to="/"><button>Ir a comprar</button></Link></>
                )}
            </div>
        </div> 
    );
};

export default CartPage;