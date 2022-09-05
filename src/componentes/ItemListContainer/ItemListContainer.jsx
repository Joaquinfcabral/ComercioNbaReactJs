import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import '../ItemListContainer/ItemListContainer.css'
import { customFetch } from '../../Data/apiNba'




const ItemListContainer = () =>{

    const [listaProductos, setListaProductos] = useState([]);
    const [cargando, setCargando] = useState(false); 
    const {id} = useParams();
    
    useEffect(() => {
        setCargando(true)
        customFetch
        .then((res) => setListaProductos(res.filter(item => {
            if (id === undefined) return item;
            return item.category === parseInt(id)
        })))
        .catch((error) => console.log(error))
        .finally(() => setCargando(false))
        
    }, [id]);
    

    return (
        <>
         {cargando ? <p>Cargando... </p> : <ItemList className='diseñoInicio' listaProductos={listaProductos} />}
       
        </>
    )
}

export default ItemListContainer