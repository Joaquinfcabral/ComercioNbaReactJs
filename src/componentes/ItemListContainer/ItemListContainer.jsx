import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = () =>{

    return(
        <>
        <h1>El único comercio de NBA en la Argentina</h1>

        <ItemCount stock={5} />
        </>
    )

}

export default ItemListContainer