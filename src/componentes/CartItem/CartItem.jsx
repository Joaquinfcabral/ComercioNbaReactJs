import React from "react";
import { useCartContext } from "../../CartContext/CartContext";
import './cartItem.css';



const CartItem = ( {product} ) => {
const { removeProduct } = useCartContext();

    return (

        <>
            <div className="itemCart">
                <img className="img" src={product.imagen} alt="Nombre de la imagen" />
                <div>
                    <p>Titulo: {product.title} </p>
                    <p>Cantidad: {product.quantity} </p>
                    <p>Precio unitario: ${product.price} </p>
                    <p>Subtotal: ${product.quantity * product.price} </p>
                    <button onClick={() => removeProduct(product.id)}>Eliminar</button>
                </div>

            </div>
        </>


    )
}

export default CartItem 
