import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);






    return (
        <div>

            <h2>Login</h2>


            <div>
                <form >

                    <input type="email" placeholder='Email Address' />
                    <input type="password" placeholder='Password' />


                </form>

                <button onClick={() => signInWithGoogle()} >Google</button>
            </div>


        </div>
    );
};

export default Login;