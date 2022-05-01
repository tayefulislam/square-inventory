import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const naviagte = useNavigate()




    const handeLogin = (event) => {
        event.preventDefault()

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name)


    }




    return (


        <div className='container mt-4 form'>

            <h1 className='text-center mb-5 mt-4 text-light'>Login</h1>


            <form onSubmit={handeLogin}>


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
                    <button className="btn btn-outline-dark w-20 mx-auto" type="submit"><span className='text-light click-btn'>Login</span></button>



                </div>
            </form>




            <button onClick={() => signInWithGoogle()} >Google</button>
            <button onClick={() => naviagte('/signup')} >Signup</button>


        </div>









    );
};

export default Login;