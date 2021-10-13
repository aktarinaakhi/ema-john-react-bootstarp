import React from 'react';
import "./Header.css"
import logo from '../../images/logo.png'
import "./Header.css"
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (

        <div>
            <div className="header-img">
                <img src={logo} alt="" />
            </div>

            <nav className="d-flex">
                <NavLink className="nav-link text-light" to="/shop">Shop </NavLink>
                <NavLink className="nav-link text-light" to="/orderReview">Order Review</NavLink>
                <NavLink className="nav-link text-light" to="/inventory">Inventory</NavLink>
                <NavLink className="nav-link text-light" to="/register">Register</NavLink>

                {
                    user.email ?
                        <button onClick={logOut}>Log Out</button>
                        :
                        <NavLink className="nav-link text-light" to="/login">Login</NavLink>

                }
                <p className="text-light">{user.displayName}</p>
            </nav>

        </div>
    );
};

export default Header;