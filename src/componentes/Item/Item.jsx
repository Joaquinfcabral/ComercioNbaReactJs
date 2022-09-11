import React from 'react'
import '../Item/Item.css'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {
    const { id, title, imagen, price, description, stock } = producto
    return (
        <div className='card estructuraCard' style={{ width: '20rem', height:'40rem', margin: '20px' }}>
            <img src={imagen} className='car-img-top diseñoImg' alt={title} />
            <div>
                <h4 className='posicionH3' > {title} </h4>
            </div>
            <div className='card-body diseñoInfo'>
                <p className='card-text size'>${price}</p>
                <p className='card-text'><Link to={`/item/${id}`}><button class="learn-more">
                    <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Ver detalles</span>
                </button></Link></p>
            </div>
            
        </div>
    )
}

export default Item