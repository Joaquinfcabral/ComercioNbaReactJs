import { createContext, useState } from "react";



export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    const addToCart = ( item ) => {
        const itemInCart = carrito.find((itemInCart)=>itemInCart.id === item.id);
        if(itemInCart){
            const nuevoCarrito = carrito.map((itemInCart) => {
                if(itemInCart.id === item.id){
                    return{...item, count: itemInCart.count + item.count, };
                }else {
                    return itemInCart
                    
                }
            });
            setCarrito(nuevoCarrito)
        }else {
            setCarrito({...carrito, item})
        }
        setCarrito ( [
            ...carrito,
            item        
        ] );
    }

    const removeFromCart = (id) => {
        setCarrito( carrito.filter((item)=>item.id !== id))

        
    }

    const removeAll = () => {
        setCarrito({})
    }

        return ( 
        <CartContext.Provider value = {{carrito, addToCart, removeFromCart, removeAll}}> 

        {children} 
        
        </CartContext.Provider>
        );
    }
                

export default CartContextProvider;