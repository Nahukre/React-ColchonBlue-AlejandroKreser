import { useState } from "react";

export const ItemCount  = ({stock, initial, onAdd}) => {
    
    const [counter, setCounter] = useState(initial);

    const resta = () => {
        setCounter(counter - 1);
    };
    const suma = () => {
        setCounter(counter + 1);
    };

    return (
        <div class="contador">
            <button class="botonesContador" onClick={resta}>-</button> <br />
            <span class="cantidad" stock="10" initial="1" >{counter}</span>
            <button class="botonesContador" onClick={suma}>+</button> <br />
        </div>
    
    );
}