import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";
import Modal from "../Modal/Modal";
import { useModal } from "../Modal/useModal";
import "./ItemCount.css";

export const ItemCount  = ({stock, initial, onAdd, quantity, id}) => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [counter, setCounter] = useState(initial);
    const {cartData} = useContext(CartContext);
    
    const resta = () => {
        if(counter > 1) {
        setCounter(counter - 1)}
        else 
        setCounter(counter);
    };
    const suma = () => {
        if (counter < stock) {
        setCounter(counter + 1)}
        else
        setCounter(counter);
    };

    const resetCounter = () => {
        setCounter(counter - (counter - 1));      
    };

    const click = () => {
        resetCounter();
        openModal1();
        onAdd(counter);
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
        </>
    
    );
}