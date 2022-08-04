import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import {customFetch} from '../mocks/apiNba'

const ItemListContainer = () => {

    const [listaProductos, setListaProductos] = useState([]);
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        setCargando(true)
        customFetch 
            .then(res => setListaProductos(res))
            .catch(err => console.log(err))
            .finally(() => setCargando(false))
    }, []);

    return (
        <>
            <h2> Bienvenidos a la mejor tienda digital </h2>

            {cargando ? <p>Loading...</p> : <ItemList listaProductos={listaProductos}/>}

            <ItemCount stock={5} initial={1} onAdd={1}/>
        </>
    )

}

export default ItemListContainer