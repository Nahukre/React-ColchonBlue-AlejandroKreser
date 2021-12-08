import { useState } from "react";

export const useFinalizarCompra = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue);

    const openFinalizar = () => setIsOpen(true);
    const closeFinalizar = () => setIsOpen(false);

return [isOpen, openFinalizar, closeFinalizar];
}