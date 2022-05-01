import React from 'react';

import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Register.css'

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    return (
        <div className='container mt-4 form'>

            <h1 className='text-center mb-5 mt-4 text-light'>Registration</h1>


            <form >

                <div class="form-floating mb-3 w-50 mx-auto">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Your Name" />
                    <label for="floatingInput">Your Name</label>
                </div>
                <div class="form-floating mb-3 w-50 mx-auto">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>

                <div class="form-floating w-50 mx-auto">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                <div class="d-grid gap-2 mt-3">
                    <button class="btn btn-outline-dark w-20 mx-auto" type="button"><span className='text-light register-btn'>SignUp</span></button>



                </div>
            </form>







        </div>
    );
};

export default Register;