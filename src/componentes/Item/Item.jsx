import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import '../Item/Item.css'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {
    const { id, name, imagen, price, description, stock } = producto
    return (
        <div className='card' style={{ width: '18rem', margin: '.5rem' }}>
            <img src={imagen} className='car-img-top' alt={name} />
            <div className='card-body'>
                <p className='card-text'>{name}</p>
                <p className='card-text'>${price}</p>
                <p className='card-text'><Link to={`/item/${id}`}><button class="learn-more">
                    <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Ver detalles</span>
                </button></Link></p>
            </div>
            {<ItemCount stock={stock} />}
        </div>
    )
}

export default Item