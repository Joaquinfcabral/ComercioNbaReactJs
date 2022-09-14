
import React from 'react';
import './navbar.css'
import CartWidget from '../cartwidget/CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand colorL" > Panda's </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" ulPosicion collapse navbar-collapse" id="navbarNav">
                        <ul className="ul Dark navbar-nav">
                            <li className=" nav-item">
                                <button className="nav-link active" aria-current="page"> <Link className='nav-link colorL' to='/category/Camisetas'> Jersys </Link> </button>
                            </li>
                            <li className="nav-item">
                            <button className="nav-link active"><Link className='nav-link colorL' to='/category/Buzos'> Hoodies </Link> </button>
                            </li>
                            <li className="nav-item">
                            <button className="nav-link  active"><Link className='nav-link colorL' to='/category/Gorras'> Cups </Link> </button>
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