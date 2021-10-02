import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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

    //get info from db or update cart after reload 
    //local storage e jehetu cart er key gula paici, tai key theke product nite hobe.
    //bahir theke kichu nite hole side effect(useEffect) use korte hoy.

    useEffect(() => {

        //local storage e added key gula dhorteci ei function diye
        //ei key gula k niye check korbo total product er sathe kon gular mil ache, then oi product er sob info nibo
        //key pailam
        // console.log(products);   //products er array oaici
        //akhn kaj holo 
        //product asle tahole ei function call korbe, tahole r undifined asbe na. 
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = []; // info rakhar jnno nijeder banano array 
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                storedCart.push(addedProduct);

            }
            setCart(storedCart);
        }
        // console.log(key,addedProduct); //undifined asbe,karon useEffect aysncronas onujayi kaj kore.uporer useEffect data load korte korte ei useEffect kaj suru kore dibe.

    }, [products])  //products change hole ei function abar call korbe (special cause na thakle dependency deoya jabe na)

    const handleAddToCart = (product) => {
        // console.log(product.name);
        const newCart = [...cart, product]
        setCart(newCart);

        //update local storage
        addToDb(product.key);
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