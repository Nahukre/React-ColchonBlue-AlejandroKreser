import carrito from "../../img/carrito.png";
import "./CartWidget.css";
export const CartWidget = () => {
    return (
        <><img src={carrito} className="carrito" alt="Carrito de compras" />
        </>
    );
}
