import axios from 'axios';
import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
// import auth from '../../firebase.init';
import './LocialLogin.css';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);



    const location = useLocation();
    const navigate = useNavigate()


    const from = location.state?.from?.pathname || "/";





    if (user) {


        console.log(user)

        const { email } = user.user;
        console.log(email)


        // navigate(from, { replace: true })

        const url = `https://glacial-scrubland-13579.herokuapp.com/login`;

        axios.post(url, { email })
            .then(function (response) {

                console.log(response.data.acceseToken);

                localStorage.setItem('accessToken', response.data.acceseToken)
                navigate(from, { replace: true })

            })


    }


    useEffect(() => {
        if (error) {
            toast(error.message)
        }
    }, [error])


    return (

        <div container>







            <div className="d-grid gap-2 mt-3">
                <button onClick={() => signInWithGoogle()} className="btn social-btn w-20 mx-auto" type="submit"><span className='click-btn'>Google</span></button>



            </div>


        </div>
    );
};

export default SocialLogin;