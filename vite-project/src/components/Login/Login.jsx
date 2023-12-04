import "./login.css"

import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";
import * as authService from "../../services/authService"


export default function Login () {

    let navigate = useNavigate();
    const { login } = useAuthContext();
    const [errors, setErrors] = useState({message: null})
    

    const submitHandler = (e) => {
        e.preventDefault();

        
        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');
 

        authService.login(email, password)
            .then((userData) => {
                login(userData);

                navigate('/');
            })
            .catch(err => {
                setErrors(state =>({
                    ...state,
                    message: "Invalid username or password"
                }))
            });
    }


    return(
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container ">
            <div className="booking p-5 loginBooking">
                <div className="row g-5 align-items-center">
                    <div className="col-md-6 reg animated slideInDown">
                        <h1 className="text-white mb-4 " >Login</h1>
                        <form  role="form" id="login-form" onSubmit={submitHandler}>
                            <div className="row g-3">
                                <div className="col-md-6 reg">
                                    <div className="form-floating regf">
                                        <input type="email" className="form-control bg-transparent" name="email" id="email" placeholder="Email" />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="col-md-6 reg">
                                    <div className="form-floating regf date" id="date3" data-target-input="nearest">
                                        <input type="password" className="form-control bg-transparent datetimepicker-input" name="password" id="password" placeholder="password" data-target="password" data-toggle="password" />
                                        <label htmlFor="password">Password</label>
                                        {errors.message ? <p className="wrongLogin">Wrong username or password!</p> : null}
                                    </div>
                                </div>
                                <div className="col-12 regButton">
                                    <button className="btn btn-outline-light w-100 py-3" type="submit">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}