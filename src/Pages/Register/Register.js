import React from 'react';

import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './Register.css'

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);




    const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);


    const navigate = useNavigate()



    const handeSubmit = async (event) => {
        event.preventDefault()

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        await createUserWithEmailAndPassword(email, password)

        await updateProfile({ displayName: name });




        if (error) {

            console.log(error.message)


        }

        if (user) {
            toast('Sign Up complete')
            navigate('/home')
        }





        console.log(name)
    }

    return (
        <div className='container mt-4 form'>

            <h1 className='text-center mb-5 mt-4 text-light'>Registration</h1>


            <form onSubmit={handeSubmit}>

                <div className="form-floating mb-3 w-50 mx-auto">
                    <input type="text" className="form-control" name='name' id="floatingInput" placeholder="Your Name" />
                    <label for="floatingInput">Your Name </label>
                </div>
                <div className="form-floating mb-3 w-50 mx-auto">
                    <input type="email" className="form-control" name='email' id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>

                <div className="form-floating w-50 mx-auto">
                    <input type="password" className="form-control"
                        name='password' id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                <div className="d-grid gap-2 mt-3">
                    <button className="btn btn-outline-dark w-20 mx-auto" type="submit"><span className='text-light click-btn'>SignUp</span></button>



                </div>
            </form>







        </div>
    );
};

export default Register;