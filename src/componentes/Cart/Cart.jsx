import React from "react";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";



const Cart = ({ item }) => {
    const prueba = useContext(CartContext);


    return (
        <>
        <div>
            <div>
                <img src= {item.imagen} alt= {item.title} />
                <p> {item.title} </p>
            </div>
        </div>
            {
                prueba.listaCarrito.length === 0 ? <p>El carrito esta vacio</p>
                    : prueba.listaCarrito.map((producto) => <p> {producto.name} </p>)
            }


        </>
    );
};

export default Cart;