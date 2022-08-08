import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { customFetch } from '../mocks/apiNba'



const ItemDetailContainer = () => {

    const [unProducto, setUnProducto] = useState([])

    useEffect(() => {
        customFetch
            .then((res) => setUnProducto(res[3]))
            .catch((error) => console.log(error))

    }, [])



   return (
        <>
            <ItemDetail item={unProducto} />
        </>
    )


}

export default ItemDetailContainer
