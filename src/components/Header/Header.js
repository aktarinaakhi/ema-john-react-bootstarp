import React from 'react';
import { Nav } from 'react-bootstrap';
import "./Header.css"

import logo from '../../images/logo.png'
import "./Header.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    // const inputField = 
    return (

        <div className="container-fluid">

            <div className="header-img">
                <img src={logo} alt="" />
            </div>

            <nav className="d-flex">
                <Link className="nav-link text-light" to="/shop">Shop</Link>
                <Link className="nav-link text-light" to="/orderReview">Order Review</Link>
                <Link className="nav-link text-light" to="/inventory">Inventory</Link>
            </nav>
            <div className="input-field">
                <input className="input" type="text" placeholder="Search product" />
                <FontAwesomeIcon className="text-light" icon={faShoppingCart}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Header;