import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";
import Modal from "../Modal/Modal";
import { useModal } from "../Modal/useModal";
import FaltaStock from "../FaltaStock/FaltaStock";
import { useFaltaStock } from "../FaltaStock/useFaltaStock";
import "./ItemCount.css";

export const ItemCount  = ({stock, initial, onAdd, quantity, id}) => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [isOpenFalta, openFalta, closeFalta] = useFaltaStock(false);
    const [counter, setCounter] = useState(initial);
    const {cartData} = useContext(CartContext);
    
    const isInCart = cartData.some((product) => product.id === id);
    const stockNuevo = cartData.map((itemCarrito) => itemCarrito.quantity);

    const resta = () => {
        if(counter > 1) {
        setCounter(counter - 1)}
        else 
        setCounter(counter);
    };
    
    const suma = () => {
        if (!isInCart) {
            if (counter < stock) {
            setCounter(counter + 1)}
            else
            setCounter(counter);
        }
        else {
            if ((stock - stockNuevo) > counter) {
            setCounter(counter + 1)}
            else
            setCounter(counter);
        }
    };
    console.log(stockNuevo)
    const resetCounter = () => {
        setCounter(counter - (counter - 1));      
    };
    
    const click = () => {
        if (!isInCart) {
            resetCounter();
            openModal1();
            onAdd(counter);
        }
        else {
            if ((stock - stockNuevo) >= counter) {
                resetCounter();
                openModal1();
                onAdd(counter);
            }
            else {
                openFalta();
            }
        }
    }

    return (
        <><div className="contador">
                <button className="botonesContador" onClick={resta}>-</button>
                <span className="cantidad">{counter}</span>
                <button className="botonesContador" onClick={suma}>+</button>
        </div>
        <div>
            <button className="aniadir" id={id} onClick={click}>Añadir al carrito</button>
        </div>
        <Modal isOpen= {isOpenModal1} closeModal= {closeModal1}>
            <Link to="/"><button className="botonesModal">Seguir comprando</button></Link>
            <Link to="/cart"><button className="botonesModal">Finalizar compra de {quantity} items</button></Link>
        </Modal>
        <FaltaStock isOpen= {isOpenFalta} closeFalta= {closeFalta}>
            <Link to="/"><button className="botonesModal">Comprar otros productos</button></Link>
            <Link to="/cart"><button className="botonesModal">Finalizar compra</button></Link>
        </FaltaStock>
        </>
    
    );
}