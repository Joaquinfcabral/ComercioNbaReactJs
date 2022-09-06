import React from "react";
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import Swal from 'sweetalert2'
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';



const ItemDetail = ({ item }) => {




    const [itemCount, setItemCount] = useState(0)
    const {addToCart} = useContext(CartContext)

    const onAdd = (qty) => {
        Swal.fire({
            icon: 'success',
            title: 'Gracias!',
            text: 'Su producto ha sido seleccionado',
        })
        setItemCount(qty);
        addToCart(item);
    }

    

    return (
        <>
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.imagen} className="img-fluid rounded-start" alt={item.title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className='card-text'>${item.price}</p>
                        </div>
                        <div>
                            {

                                itemCount === 0
                                    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                                    : <Link to='/cart' style={{ textDecoration: "none" }}><Button variant="contained" color="secondary">CheckOut</Button></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemDetail

