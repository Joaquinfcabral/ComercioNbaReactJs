import React from 'react';
import '../NavBar/navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bgNav">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand colorL" > Panda's </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" ulPosicion collapse navbar-collapse" id="navbarNav">
                        <ul className="ul navbar-nav">
                            <li className=" nav-item">
                                <a className="nav-link colorL active" aria-current="page"><Link to='/category/1'> T-shirts </Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link colorL active"><Link to='/category/2'> Hoodies </Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link colorL active"><Link to='/category/3'> Cups </Link></a>
                            </li>
                        </ul>
                    </div>
                    <Link to='/cart'> <CartWidget /> </Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar