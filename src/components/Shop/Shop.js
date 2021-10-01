import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    // console.log(products);

    const handleAddToCart = (product) => {
        // console.log(product.name);
        const newCart = [...cart, product]
        setCart(newCart);
    }


    return (
        <div className="shop-container">
            <div>
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >
                    </Product>)
                }
            </div>
            <div className="cart-container mt-3">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;