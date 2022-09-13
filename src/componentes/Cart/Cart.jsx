import React from 'react';
import {addDoc, collection, increment, serverTimestamp, doc, updateDoc} from 'firebase/firestore' ;
import db from '../../Data/apiFirebase';
import { useCartContext } from '../../CartContext/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import '../Cart/cart.css'

const Cart = () => {
    const { carrito, totalPrice, clearCart } = useCartContext();

    const order = {
        buyer:{
            name: 'Joaquin',
            email: 'joaquinfcabral@gmail.com',
            cel:'3413664488',
            addres:'Siempre viva 1234'
        },
        fecha:serverTimestamp(),
        items: carrito.map (product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
    }

    const createOrder = () => {
        const ordersCollection = collection(db, 'orders');
        addDoc (ordersCollection, order)
        .then(({id}) => alert('Su orden es' + (id)))
        .catch(err => console.log(err))
        
        carrito.forEach(async (product) => {
            const productRef = doc(db, 'Productos', product.id);
            await updateDoc (productRef, {
                stock: increment(-product.quantity)
            })
        })

        clearCart();
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
        <div className='diseñoCarrito'>
            <div className='cartItemDiseño' >
            {
                carrito.map(product => <CartItem key={product.id} product={product} /> )
            }
            </div>
            <p className='totalDiseño'>
                Total: ${totalPrice()}
            </p>
            <div className='posicionBtn'>
            <button className='btnEliminarCarrito' onClick={clearCart} >Eliminar Carrito</button>
            <button className='btnFinalizarCompra' onClick={createOrder} > Finalizar Compra</button>
            </div>

        </div>
    )
}

export default Cart