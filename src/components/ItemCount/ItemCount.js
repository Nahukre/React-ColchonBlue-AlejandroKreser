import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";
import { inversiones } from "../../services/inversiones";
import Modal from "../Modal/Modal";
import { useModal } from "../Modal/useModal";
import "./ItemCount.css";


export const ItemCount  = ({stock, initial, onAddCart, quantity, value}) => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [counter, setCounter] = useState(initial);
    const { AddToCart } = useContext(CartContext);

    const click = () => {
        onAdd();
        resetCounter();
        openModal1();
        AddToCart(quantity, inversiones);
        onAddCart(counter);
    }
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
    
    
    return (
        <><div className="contador">
                <button className="botonesContador" onClick={resta}>-</button>
                <span className="cantidad">{counter}</span>
                <button className="botonesContador" onClick={suma}>+</button>
        </div>
        <div>
            <button className="aniadir" onClick={click}>Añadir al carrito</button>
        </div>
        <Modal isOpen= {isOpenModal1} closeModal= {closeModal1}>
            <Link to="/"><button className="botonesModal">Seguir comprando</button></Link>
            <Link to="/cart"><button className="botonesModal">Finalizar compra de {quantity} items</button></Link>
        </Modal>
        </>
    
    );
}