import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import '../ItemListContainer/ItemListContainer.css'
import { firestoreFetch } from '../../Data/apiNba'




const ItemListContainer = () =>{

    const [listaProductos, setListaProductos] = useState([]);
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
         <ItemList listaProductos={listaProductos} />
        </>
    )
}

export default ItemListContainer