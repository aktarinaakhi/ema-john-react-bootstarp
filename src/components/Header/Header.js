import React from 'react';
import "./Header.css"

import logo from '../../images/logo.png'
import "./Header.css"
import { Link } from 'react-router-dom';


const Header = () => {
    // const inputField = 
    return (

        <div>

            <div className="header-img">
                <img src={logo} alt="" />
            </div>

            <nav className="d-flex">
                <Link className="nav-link text-light" to="/shop">Shop</Link>
                <Link className="nav-link text-light" to="/orderReview">Order Review</Link>
                <Link className="nav-link text-light" to="/inventory">Inventory</Link>
            </nav>

        </div>
    );
};

export default Header;