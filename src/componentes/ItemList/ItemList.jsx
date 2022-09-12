import React from 'react'
import Item from '../Item/Item'
import 'animate.css';
import '../ItemList/ItemList.css'

const ItemList = ({ listaProductos }) => {
    return (

        <>
            <h3 className='h3Home animate__animated animate__wobble' >SENTI LA NBA</h3>
            <div className='divImg' >
                <img className='imagenHome animate__animated animate__backInUp' src="https://wallpaper.dog/large/20384597.jpg" alt="Imagen Nba" />
            </div>
            <div className='diseñoInicio'>
                {listaProductos.map((producto) => <Item key={producto.idItem} producto={producto} />)}
            </div>
        </>
    )
}

export default ItemList 