import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemList.css'

const ItemList = ({ listaProductos }) => {
    return (

        <>
            <h3>Listado de productos</h3>

            <div className='diseñoInicio'>
                {listaProductos.map((producto) => <Item key={producto.id} producto={producto} />)}
            </div>
        </>
    )
}

export default ItemList 