import { useState } from "react";

export const useFaltaStock = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue);

    const openFalta = () => setIsOpen(true);
    const closeFalta = () => setIsOpen(false);

return [isOpen, openFalta, closeFalta];
}