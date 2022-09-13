import React from 'react'
import Item from '../Item/Item'
import 'animate.css';
import '../ItemList/ItemList.css'

const ItemList = ({ listaProductos }) => {
    return (

        <>
            <div className='diseñoInicio'>
                {listaProductos.map((producto) => <Item key={producto.id} producto={producto} />)}
            </div>
        </>
    )
}

export default ItemList 