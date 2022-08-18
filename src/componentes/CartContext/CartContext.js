import { createContext, useState } from "react";



export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [listaCarrito, setListaCarrito] = useState([])


        return ( 
        <CartContext.Provider value = {{listaCarrito}}> 

        {children} 
        
        </CartContext.Provider>
        );
    }
                

export default CartContextProvider;