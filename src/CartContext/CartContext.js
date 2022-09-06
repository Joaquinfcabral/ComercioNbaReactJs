import { createContext, useState } from "react";



export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    const addToCart = ( item ) => {
        setCarrito ( [
            ...carrito,
            item        
        ] );
    }


        return ( 
        <CartContext.Provider value = {{carrito, addToCart}}> 

        {children} 
        
        </CartContext.Provider>
        );
    }
                

export default CartContextProvider;