import React, { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { firestoreFetchOne } from '../../Data/apiNba'



const ItemDetailContainer = () => {

    const [unProducto, setUnProducto] = useState([])
    const {idItem} = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setUnProducto(result))
            .catch(err => console.log(err))
    }, []);


    return (
        <>
            <ItemDetail item={unProducto} />
        </>
    )


}

export default ItemDetailContainer
