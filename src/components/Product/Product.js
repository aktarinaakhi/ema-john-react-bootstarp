import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import "./Product.css"

const Product = (props) => {
    const { name, img, price, seller, stock, star, key } = props.product;
    // console.log(props);
    return (
        <div className="product-container container">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-detail">
                <h6 className="name mt-3">{name}</h6>
                <div className="d-flex">
                    <div>
                        <p>By : {seller}</p>
                        <p> $ {price}</p>
                        <p>only {stock} left in stock - order soon</p>
                        <button
                            onClick={() => props.handleAddToCart(props.product)}
                            className="button mb-2">
                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                            Add to cart
                        </button>
                    </div>
                    <div className=" ps-5 ms-5 mt-3">
                        <FontAwesomeIcon icon={faStar}> {star}</FontAwesomeIcon>
                        <h5>Features </h5>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Product;