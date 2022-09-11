import React from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import '../Navbar/navbar.css'
import { useCartContext } from '../../CartContext/CartContext';

const CartWidget = () => {
    const {totalProducts} = useCartContext();
    return (
        <div>
            <MdAddShoppingCart className='tamañoCarrito'></MdAddShoppingCart>
            <span>{totalProducts() || ''}</span>
        </div>
    )
}

export default CartWidget