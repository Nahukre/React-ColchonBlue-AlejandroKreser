import "./useFinalizarCompra";
import "./FinalizarCompra.css";

export const FinalizarCompra = ({children, isOpen, closeFinalizar}) => {
    const handleFinalizarCompraContainerClick = e => e.stopPropagation();
    
    return(
        <article className={`finalizarCompra ${isOpen && "is-open"}`} onClick={closeFinalizar}>
            <div className="finalizarContainer" onClick={handleFinalizarCompraContainerClick} >
                <button className="finalizarClose" onClick={closeFinalizar}> x </button>
                <h2 className="suCompra">Datos personales</h2>       
            {children}
            </div>
        </article>
    )
}
export default FinalizarCompra