import React, { useState } from "react";
import { useCartContext } from '../../CartContext/CartContext';
import db from '../../Data/apiFirebase';
import { collection, addDoc, Timestamp, doc, updateDoc, getDoc, } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import '../Checkout/checkout.css'
import Swal from "sweetalert2";

const Checkout = () => {
    const nav = useNavigate();
    const {
        handleSubmit,
    } = useForm();

    const { carrito, totalPrice, removeProduct } = useCartContext();
    const [orderId, setOrderId] = useState(null);
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        adress: "",
        zipCode: "",
    });
    const handleBack = () => {
        nav(-1);
        console.log(values);
    };

    const handleInputChange = (e) => {
        setValues({
            //se usa spreed para sacar todo
            ...values,
            //se reemplaza lo que modificas
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = () => {
        if (
            !values.name ||
            !values.email ||
            !values.phone ||
            !values.adress ||
            !values.zipCode
        ) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor completa todos los campos",
            });
            return;
        } else {
            Swal.fire({
                icon: "success",
                title: "Gracias por tu compra",
                text: "En breve te contactaremos",
                confirmButtonText: "Aceptar",
            });
        }
        const order = {
            item: carrito,
            total: totalPrice(),
            buyer: { ...values },
            time: Timestamp.fromDate(new Date()),
        };
        
        const refreshPage = () => {
            window.location.reload(setTimeout(2000));
        }

        const orderRef = collection(db, "orders");
        carrito.forEach((element) => {
            const docRef = doc(db, "Productos", element.id);

            getDoc(docRef).then((doc) => {
                if (doc.data().stock >= element.quantity) {
                }
                updateDoc(docRef, {
                    stock: doc.data().stock - element.quantity,
                });
            });
        });
        addDoc(orderRef, order).then((doc) => {
            console.log(doc.id);
            setOrderId(doc.id);
            refreshPage();
        });
    };
    if (orderId) {
        return (
            <div className="orderDiv">
                <div className="orderBackground" >
                    <h1>Gracias por su compra</h1>
                    <p>Su pedido esta en preparacion</p>
                    <p>
                        Su numero de orden es: <span className="orderIdSpan">{orderId}</span>{" "}
                    </p>
                </div>
                
            </div>
            
        );
        
    }
    if (carrito.length === 0) {
        return <Navigate to={"/"} />;
    }
    return (
        <div className="checkout">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div>
                    <input
                        className="myInput name"
                        type="text"
                        placeholder={"Nombre y apellido"}
                        value={values.name}
                        name="name"
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                    <input
                        className="myInput phone"
                        type="number"
                        placeholder={"Numero de telefono"}
                        value={values.phone}
                        name="phone"
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                </div>
                <input
                    className="myInput email"
                    type="email"
                    placeholder={"Tuemail@ejemplo.com"}
                    value={values.email}
                    name="email"
                    onChange={handleInputChange}
                    autoComplete="off"
                />
                <div>
                    <input
                        className="myInput adress"
                        type={"text"}
                        placeholder={"Direccion"}
                        value={values.adress}
                        name="adress"
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                    <input
                        className="myInput zipCode"
                        type="text"
                        placeholder={"Codigo postal"}
                        value={values.zipCode}
                        name="zipCode"
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                </div>
                <button>{"Confirmar"} </button>
                <button onClick={handleBack}> {"Volver"} </button>
            </form>
        </div>
    );
};

export default Checkout;