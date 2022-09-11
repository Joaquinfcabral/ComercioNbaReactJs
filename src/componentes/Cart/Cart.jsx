import React from 'react';
import {addDoc, collection, getFirestore} from 'firebase/firestore' 
import { useCartContext } from '../../CartContext/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    const { carrito, totalPrice } = useCartContext();

    const order = {
        buyer:{
            name: 'Joaquin',
            email: 'joaquinfcabral@gmail.com',
            cel:'3413664488',
            addres:'Siempre viva 1234'
        },
        items: carrito.map (product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc (ordersCollection, order)
        .then(({id}) => console.log(id))


    }
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
                Total: {totalPrice()}
            </p>
            <button onClick={handleClick} > Finalizar Compra</button>

        </div>
    )
}

export default Cart