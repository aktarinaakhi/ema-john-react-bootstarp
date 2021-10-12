import React from 'react';
import image from "../../images/giphy.gif"

const PlaceOrder = () => {
    return (
        <div>
            <h3 className="mt-5"> Your Order Done </h3>
            <img src={image} alt="" />
        </div>
    );
};

export default PlaceOrder;