
import axios from 'axios';
import React, { useEffect } from 'react';
import { Toast } from 'react-bootstrap';
import { useSendEmailVerification, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import './Login.css'

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





    const handeLogin = async (event) => {
        event.preventDefault()

        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password);

        const url = `https://glacial-scrubland-13579.herokuapp.com/login`;

        // const url = `http://localhost:5000/login`

        const { data } = await axios.post(url, { email })
        // console.log(data)
        localStorage.setItem('accessToken', data.acceseToken)
        navigate(from, { replace: true })


    }

    console.log(error?.message)


    useEffect(() => {

        // if (error?.message === 'Firebase: Error (auth/wrong-password).') {
        //     return toast('Wrong Password')


        // }

        // if (error?.message === 'Firebase: Error (auth/user-not-found).') {
        //     return toast('User Not Found')


        // }


        if (error?.message) {
            toast(`${error?.message}`)
        }


    }, [error])




    if (user) {
        // navigate(from, { replace: true })
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
                        {
                            loading ? <Loading></Loading> : ''
                        }
                        <button className="btn btn-outline-dark w-20 mx-auto" type="submit"><span className='text-light click-btn'>Login</span></button>


                        <p className='text-center text-light fw-bold '>Forget Password ? <span onClick={() => navigate('/reset-password')} type="button" className='reset-title'>Reset Now</span></p>

                        <p className='text-center text-light fw-bold '>Don't Have Account ?<span onClick={() => navigate('/signup')} type="button" className='reset-title'>Register</span></p>



                    </div>
                </form>





            </div>


            <SocialLogin></SocialLogin>

        </>









    );
};

export default Login;