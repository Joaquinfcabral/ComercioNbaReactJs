import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemList.css'

const ItemList = ({ listaProductos }) => {
    return (

        
            <div className='diseñoInicio'>

                {
                listaProductos.length > 0
                ? listaProductos.map((producto) => <Item key={producto.id} producto={producto} />)
                : <div class="wobbling-3"></div>
                }
            </div>
        
    )
}

export default ItemList 