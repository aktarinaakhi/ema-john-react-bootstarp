import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from 'react-rating';
import "./Product.css"

const Product = (props) => {
    const { name, img, price, seller, stock, star } = props.product;
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
                    <div className=" ps-5 ms-5 mt-5 pt-5">
                        {/* <FontAwesomeIcon icon={faStar}> {star}</FontAwesomeIcon> */}

                        <Rating initialRating={star}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star">
                        </Rating>
                        <h5>Features </h5>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Product;