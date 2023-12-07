import "./register.css"

import { useNavigate } from 'react-router';
import { useState } from 'react';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/authContext';


export default function Register() {

    const navigate = useNavigate();
    const { login } = useAuthContext();
	const [passCheck, setPassCheck] = useState({passMessage: null})
	const [errors, setErrors] = useState({errorsMessage: null})


	const onChangeHandler = () =>{
		setPassCheck(state => ({
			...state,
			passMessage: null
		}))
	}

	


	const onSubmitToHome = (e) => {
		e.preventDefault();
	
		let formData = new FormData(e.currentTarget);

		let username = formData.get('username');
        let email = formData.get('email');
        let password = formData.get('password');
        let confirmPassword = formData.get('confirmPassword');

		if(username === ""
			|| email ===""
			|| password ===""
			|| confirmPassword ===""	){
				return setErrors(state => ({
                    ...state,
                    errorsMessage: "All fields are reqired!"
                }))
		}

		if(password !== confirmPassword){
			return setPassCheck(state => ({
				...state,
				passMessage: "Passwords do not match!"
			}))
		}
		
		
		if(passCheck.passMessage === null){
			authService.register(username, email, password)   
			.then(userData => {
				login(userData);
				
					navigate('/');
				}
            )
            .catch(err => {
                console.log(err);
                alert('Oops! Something went wrong on our end. Please try again later.');
                navigate("/");
            })
		}

	}


    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="registerBooking booking p-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-6 reg animated slideInDown">
                            <h1 className="text-white mb-4">Register</h1>
                            <form role="form" id="register-form" onSubmit={onSubmitToHome}>
                                <div className="row g-3">
                                    <div className="col-md-6 reg">
                                        <div className="form-floating regf">
                                            <input type="text" className="form-control bg-transparent" name="username" id="username" placeholder="Username" />
                                            <label htmlFor="Username">Username</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 reg">
                                        <div className="form-floating regf">
                                            <input type="email" className="form-control bg-transparent" name="email" id="email" placeholder="Email" />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 reg">
                                        <div className="form-floating regf date" id="date3" data-target-input="nearest">
                                            <input type="password" className="form-control bg-transparent datetimepicker-input" name="password" id="password" placeholder="password" data-target="password" data-toggle="password" onChange={onChangeHandler}/>
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 reg">
                                        <div className="form-floating regf date" id="date3" data-target-input="nearest">
                                            <input type="password" className="form-control bg-transparent datetimepicker-input" name="confirmPassword" id="confirmPassword" placeholder="confirmPassword" data-target="confirmPassword" data-toggle="confirmPassword" onChange={onChangeHandler}/>
                                            <label htmlFor="confirmPassword">Confirm your Password</label>
                                        </div>
                                        {errors.errorsMessage ? <p className="registerError">{errors.errorsMessage}</p> : null}
                                        {passCheck.passMessage ? <p className="registerError">{passCheck.passMessage}</p> : null}   
                                    </div>
                                    <div className="col-12 regButton">
                                        <button className="btn btn-outline-light w-100 py-3" type="submit">Register</button>
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