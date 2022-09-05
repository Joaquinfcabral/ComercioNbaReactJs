import React from 'react';
import { useState } from "react";
import { BsFillBagPlusFill } from "react-icons/bs";
import { BsFillBagXFill } from "react-icons/bs";
import '../ItemCount/ItemCount.css'
import Button from '@mui/material/Button';


const ItemCount = ({ stock, onAdd }) => {
    const [numero, setNumero] = useState(0);


    const incrementar = () => {
        if (numero < stock) {
            setNumero(numero + 1);
        }

    };


    const decrementar = () => {
        if (numero === 0) return;
        setNumero(numero - 1);
    };
    


    return (
        <div className='posicion'>
            <div className='posicion'>
                <button onClick= {incrementar} className="estiloBtn"> <BsFillBagPlusFill className='diseñoBtn'></BsFillBagPlusFill> </button>
                <span className='diseñoNum' >{numero}</span>
                <button onClick= {decrementar} className="estiloBtn"> <BsFillBagXFill className='diseñoBtn' ></BsFillBagXFill> </button>
            </div>
            {
                stock && numero
                ? <Button class="btn" variant="contained" onClick={() => onAdd(numero)}>Agregar al carrito</Button>
                : <Button variant="contained" disabled>Agregar al carrito</Button>
            }
        </div>
    );
};


export default ItemCount;