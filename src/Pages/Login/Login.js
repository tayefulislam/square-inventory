import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {

    // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";




    const handeLogin = (event) => {
        event.preventDefault()

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password)




    }






    if (user) {
        navigate(from, { replace: true })
    }




    return (


        <>
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


                <button onClick={() => navigate('/signup')} >Signup</button>





            </div>


            <SocialLogin></SocialLogin>

        </>









    );
};

export default Login;