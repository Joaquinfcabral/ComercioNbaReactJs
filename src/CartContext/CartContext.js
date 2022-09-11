import { createContext, useState, useContext } from "react";
import Cart from "../componentes/Cart/Cart";

export const useCartContext = () => useContext(CartContext)

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [carrito,setCarrito] = useState([]);

    const addProduct = (item, quantity) => {
        if(isInCart(item.id)) {
            setCarrito(carrito.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }))
        }else {
            setCarrito([...carrito, {...item, quantity}]);
        }
    }

    const totalPrice = () => {
        return carrito.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => carrito.reduce ((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const clearCart = () => setCarrito([]);

    const isInCart = (id) => carrito.find (product => product.id === id) ? true : false;

    const removeProduct = (id) => setCarrito(carrito.filter(product => product.id !== id));


        return ( 
        <CartContext.Provider value = {{ 
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            carrito,
            
            }}> 

        {children} 
        
        </CartContext.Provider>
        );
    }
                

export default CartContextProvider;



{/*
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






*/
}