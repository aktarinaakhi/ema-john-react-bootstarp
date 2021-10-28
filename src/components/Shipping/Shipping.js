import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { clearTheCart } from "../../utilities/fakedb";
import useAuth from "../Hooks/useAuth";
import useCart from "../Hooks/useCart";
import "./Shipping.css"

const Shipping = () => {

    const { user } = useAuth();
    const [cart, setCart] = useCart();


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const history = useHistory();



    const handlePlaceOrder = () => {
        history.push('/placeorder');
        // setCart([]);
        clearTheCart();
    }

    return (
        <div>
            <h2>this is shipping</h2>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} /> <br />
                <input placeholder="email" defaultValue={user.email} {...register("email", { required: true })} /> <br />
                {errors.email && <span className="error">This field is required</span>} <br />
                <input placeholder="Address" defaultValue="" {...register("Address")} /> <br />
                <input placeholder="phone number" defaultValue="" {...register("Phone")} /> <br />

                <button onClick={handlePlaceOrder} className="button mt-4" >Place Order</button>
            </form>
        </div>
    );
};

export default Shipping;