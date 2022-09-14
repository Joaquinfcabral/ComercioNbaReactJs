import React from 'react';
import { useCartContext } from '../../CartContext/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import '../Cart/cart.css'

{// Creación del carrito
}

const Cart = () => {
    const { carrito, totalPrice, clearCart } = useCartContext();

{
    //Armando rendering para visualizar las dos instancias del componente carrito
}

    if (carrito.length === 0) {


        return (
            <div className='diseñoCartVacio' >
                <p className='diseñoP'>No hay elementos en el carrito</p>
                
             <button className='diseñoLink' >   <Link className='nav-link ' to={'/'}> Seguir comprando</Link> </button>
            </div>
        );
    }
    return (
        <div className='diseñoCarrito'>
            <div className='cartItemDiseño' >
                {
                    carrito.map(product => <CartItem key={product.id} product={product} />)
                }
            </div>
            <p className='totalDiseño'>
                Total: ${totalPrice()}
            </p>
            <div className='posicionBtn'>
                <button className='btnEliminarCarrito' onClick={clearCart} >Eliminar Carrito</button>
                <div >
                    <button className='btnFinalizarCompra' > <Link className='nav-link' to='/checkout'> Finalizar compra </Link> </button> 
                </div>
            </div>

        </div>
    )
}

export default Cart