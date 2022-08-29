import React from 'react';
import { useState } from "react";
import { BsFillBagPlusFill } from "react-icons/bs";
import { BsFillBagXFill } from "react-icons/bs";
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
        <div>
            <div>
                <button onClick= {incrementar} className=""> <BsFillBagPlusFill></BsFillBagPlusFill> </button>
                <span>{numero}</span>
                <button onClick= {decrementar} className=""> <BsFillBagXFill></BsFillBagXFill> </button>
            </div>
            {
                stock && numero
                ? <Button variant="contained" color="primary" onClick={() => onAdd(numero)}>Agregar al carrito</Button>
                : <Button variant="contained" disabled>Agregar al carrito</Button>
            }
        </div>
    );
};


export default ItemCount;