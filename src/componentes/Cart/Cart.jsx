import React from "react";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";



const Cart = ({ item }) => {
    const prueba = useContext(CartContext);


    return (
        <>
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <img src={item.imagen} className="img-fluid rounded-start" alt={item.name} />
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className='card-text'>${item.price}</p>
                        </div>
                    </div>
                </div>
            </div>


            {
                prueba.listaCarrito.length === 0 ? <p>El carrito esta vacio</p>
                    : prueba.listaCarrito.map((producto) => <p> {producto.name} </p>)
            }


        </>
    );
};

export default Cart;