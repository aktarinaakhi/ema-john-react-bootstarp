import React from 'react';
// import Product from '../Product/Product';
import "./Cart.css"
const Cart = (props) => {
    const { cart } = props;
    // console.log(cart.length);
    let total = 0;
    let shipping = 0;
    let totalBeforeTax = 0;
    let estimitedTax = 0;
    let taxTotal = 0;

    for (const product of cart) {
        total = total + product.price;
        shipping = total * 0.1;
        totalBeforeTax = total + shipping;
        estimitedTax = totalBeforeTax * 0.1;
        taxTotal = totalBeforeTax + estimitedTax;
    }




    return (
        <div>
            <h5> Order summary</h5>
            <p>Items Ordered : {cart.length}</p>
            <div className="order-tax">
                <p><small>Items : ${total.toFixed(2)}</small></p>
                <p><small>Shipping & Handling : $ {shipping.toFixed(2)}</small></p>
                <p><small>Total before tax  : $ {totalBeforeTax.toFixed(2)}</small></p>
                <p><small>Estimited tax : $ {estimitedTax.toFixed(2)}</small></p>
                <h4> Total order : $ {taxTotal.toFixed(2)}</h4>
            </div>
            <button className="button mt-3">Review your order</button>
        </div>
    );
};

export default Cart;