import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import '../ItemListContainer/ItemListContainer.css'
import 'animate.css';
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
        <div className='animate__animated animate__fadeInRight' >
            <h1 className='diseñoH1' >
                Gracias por Visitarnos
            </h1>
            <p className='diseñoBrand animate__animated animate__fadeInLeft' >
                Somos un Ecommerce dedicado para los fanaticos de la NBA, comparti nuestra pasión por la mejor liga del mundo.
            </p>
        </div>

         <ItemList listaProductos={listaProductos} />
        </>
    )
}

export default ItemListContainer