import React from 'react';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
        // console.log(key);
    }

    const handlePlaceOrder = () => {
        history.push('/placeorder');
        setCart([]);
        clearTheCart();
    }

    return (
        <div className="shop-container">
            <div>
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    >
                    </ReviewItem>

                    )
                }
            </div>
            <div className="cart-container mt-3">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="button mt-4">Place order</button>
                </Cart>
            </div>

        </div>
    );
};

export default OrderReview;
