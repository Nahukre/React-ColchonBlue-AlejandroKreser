import "./FaltaStock.css";

export const faltaStock = ({children, isOpen, closeFalta}) => {
    const handleFaltaContainerClick = e => e.stopPropagation();
    
    return(
        <article className={`falta ${isOpen && "is-open"}`} onClick={closeFalta}>
            <div className="faltaContainer" onClick={handleFaltaContainerClick} >
                <button className="faltaClose" onClick={closeFalta}> x </button>
                <h2 className="suProducto">Ha alcanzado el límite de stock disponible de este producto</h2>       
            {children}
            </div>
        </article>
    )
}
export default faltaStock