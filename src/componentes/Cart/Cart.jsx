import React from 'react';
import { useCartContext } from '../../CartContext/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Cart = () => {

    const { carrito, totalPrice } = useCartContext();

    if (carrito.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to={'/'}> Seguir comprando</Link>
            </>
        );
    }
    return (
        <div>
            {
                carrito.map(product => <CartItem key={product.id} product={product} /> )
            }
            <p>
                total: {totalPrice()}
            </p>

        </div>
    )
}

export default Cart