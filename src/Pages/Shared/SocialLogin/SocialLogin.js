import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
// import auth from '../../firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);



    const location = useLocation();
    const navigate = useNavigate()


    const from = location.state?.from?.pathname || "/";



    if (user) {
        navigate(from, { replace: true })
    }


    return (

        <div>





            <div className="d-grid gap-2 mt-3">
                <button onClick={() => signInWithGoogle()} className="btn btn-outline-danger w-20 mx-auto" type="submit"><span className='text-dark click-btn'>Google</span></button>



            </div>


        </div>
    );
};

export default SocialLogin;