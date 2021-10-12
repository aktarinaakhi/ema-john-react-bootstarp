import React from 'react';

const ReviewItem = (props) => {

    const { name, price, quantity, key } = props.product;
    const { handleRemove } = props;

    return (
        <div className="product-container container">
            <div className="product-detail">
                <h6 className="name mt-3">{name}</h6>
                <div className="d-flex">
                    <div>
                        <p> Price : $ {price}</p>
                        <p> Quantity : {quantity}</p>
                        <button
                            onClick={() => handleRemove(key)}
                            className="button mb-2">
                            Remove
                        </button>
                    </div>
                    <div className=" ps-5 ms-5 mt-5">
                        <h5>Shipping </h5>
                    </div>
                </div>
            </div >
            <div>
                {props.children}
            </div>
        </div >
    );
};

export default ReviewItem;