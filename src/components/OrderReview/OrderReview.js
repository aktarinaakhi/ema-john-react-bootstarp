import React from 'react';
import useCart from '../Hooks/useCart';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [cart, setCart] = useCart();
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handleShipping = () => {
        history.push('/shipping');
        // setCart([]);
        // clearTheCart();
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
                    <button onClick={handleShipping} className="button mt-4">Procced to shipping</button>
                </Cart>
            </div>

        </div>
    );
};

export default OrderReview;
