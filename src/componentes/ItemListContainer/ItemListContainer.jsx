import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import '../ItemListContainer/ItemListContainer.css'
import { firestoreFetch } from '../../Data/apiNba'




const ItemListContainer = () =>{

    const [listaProductos, setListaProductos] = useState([]);
    const [cargando, setCargando] = useState(false); 
    const {idCategory} = useParams();
    
    //componentDidUpdate
    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setListaProductos(result))
            .catch(err => console.log(err));
    }, [idCategory]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setListaProductos([]);
        })
    }, []);

    return (
        <>
         {cargando ? <p>Cargando... </p> : <ItemList className='diseñoInicio' listaProductos={listaProductos} />}
       
        </>
    )
}

export default ItemListContainer