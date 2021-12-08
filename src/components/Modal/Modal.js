import "./Modal.css";

export const Modal = ({children, isOpen, closeModal}) => {
    const handleModalContainerClick = e => e.stopPropagation();
    
    return(
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modalContainer" onClick={handleModalContainerClick} >
                <button className="modalClose" onClick={closeModal}> x </button>
                <h2 className="suProducto">Su producto ha sido agregado al carrito exitosamente </h2>       
            {children}
            </div>
        </article>
    )
}
export default Modal