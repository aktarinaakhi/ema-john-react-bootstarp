import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Register = () => {
    const { handleGoogleSignIn } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/shop'

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_url);
            });

    };

    return (
        <div className="form-container container">
            <h2 className="mt-4">Register</h2>
            <div>
                <input className="mt-4 pe-5 ps-2" placeholder="Enter email" type="email" /> <br />
                <input className="mt-4 pe-5 ps-2" type="password" placeholder="Enter password" /> <br />
                <input className="mt-4 pe-5 ps-2" type="password" placeholder="Re-enter password" /> <br />
                <input className="mt-4 button" type="submit" value="submit" />
                <p className="mt-4">Already have an account ? </p>
                <Link to="/login">Go to login</Link>
                <div> ---------------or---------------</div>
                <div className="btn-div mt-4">
                    <button onClick={googleSignIn} className="bg-danger text-white btn-social-media"><i className="bi bi-google"></i>Google</button>
                    <button className="bg-primary text-light btn-social-media"><i className="bi bi-facebook"></i>Facebook</button>
                    <button className="bg-primary text-light btn-social-media"><i className="bi bi-github"></i>Github</button>
                    <button className="bg-dark text-light btn-social-media"><i className="bi bi-twitter"></i>Twitter</button>
                </div>

                <h5 className="text-success my-3 text-center">Why crete an Account ?</h5>
                <p className="text-xl-center">By creating this account, you agree to our <span className="text-success">Privacy Policy</span> &   <span className="text-success"> Cookie Policy </span> </p>
            </div>


        </div>
    );
};

export default Register;