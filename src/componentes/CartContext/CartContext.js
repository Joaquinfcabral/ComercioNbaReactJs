import { createContext, useState } from "react";



export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [listaCarrito, setListaCarrito] = useState([])

    const addToCart = ( item ) => {
        setListaCarrito ( [
            ...listaCarrito,
            item        
        ] );
    }

        return ( 
        <CartContext.Provider value = {{listaCarrito, addToCart}}> 

        {children} 
        
        </CartContext.Provider>
        );
    }
                

export default CartContextProvider;