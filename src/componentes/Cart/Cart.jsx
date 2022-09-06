import React from "react";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";



const Cart = () => {
    const {carrito} = useContext(CartContext);

    


    return (
        <>
        <div className="container mx-auto mt-10">
            <div className="flex shadow-md my-10">
                <div className=" w-3/4 bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl"> Carrito de compras</h1>
                        <h2 className="font-semibold text-2xl"> {carrito.length} Productos </h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                            Detalle del producto
                        </h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                            Cantidad
                        </h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                            Precio
                        </h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                            Total
                        </h3>
                    </div>
                </div>
            </div>

        </div>







        </>
    );
};

export default Cart;