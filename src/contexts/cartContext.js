import { createContext } from "react";


export const CartContext = createContext([]);




// export const useTheme =() => useContext(CartContext);

// export const ThemeProvider = () => {
//     const [isDarkMode, setIsDarkMode] =useState(false);
//     const SwitchDarkMode= () => {
//         setIsDarkMode(!isDarkMode);
//     }

//     return (
//         <CartContext.Provider value={{isDarkMode, SwitchDarkMode}}>
//         </CartContext.Provider>
//     )
// }


