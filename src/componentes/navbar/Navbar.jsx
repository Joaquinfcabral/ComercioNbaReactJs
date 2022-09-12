import React from 'react';
import './navbar.css'
import CartWidget from '../cartwidget/CartWidget'
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
                                <a className="nav-link colorL active" aria-current="page"><Link to='idCategory/3WreMkWx98mbMRxfeScO'> Jersys </Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link colorL active"><Link to='idCategory/bMNOeaRg6b0pIq17cFDX'> Hoodies </Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link colorL active"><Link to='/idCategory/dnh39minEKNcb9tJvJ4u'> Cups </Link></a>
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