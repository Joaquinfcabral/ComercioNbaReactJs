import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import '../ItemListContainer/ItemListContainer.css'
import { firestoreFetch } from '../../Data/apiNba'




const ItemListContainer = () =>{

    const [listaProductos, setListaProductos] = useState([]);
    const [cargando, setCargando] = useState(false); 
    const {idCategory} = useParams();
    
    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setListaProductos(result))
            .catch(err => console.log(err));
    }, [idCategory]);

    useEffect(() => {
        return (() => {
            setListaProductos([]);
        })
    }, []);

    return (
        <>
         {cargando ? <p>Cargando... </p> : <ItemList listaProductos={listaProductos} />}
       
        </>
    )
}

export default ItemListContainer