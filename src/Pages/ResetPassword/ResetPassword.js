import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {



    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);


    const handleResetPassword = async (event) => {
        event.preventDefault()

        const email = event.target.email.value;



        if (email) {
            await sendPasswordResetEmail(email)


            toast(`Reset Email set`)


        }


    }




    // useEffect(() => {

    //     if (!error?.message) {
    //         toast(`email sent`)

    //     }



    //     else if (error?.message) {
    //         toast(`${error?.message}`)

    //     }




    // }, [error])


    return (
        <div className='container mt-4 form'>

            <h1 className='text-center mb-5 mt-4 text-light'>Reset Password</h1>


            <form onSubmit={handleResetPassword}>


                <div className="form-floating mb-3 w-50 mx-auto">
                    <input type="email" className="form-control" name='email' id="floatingInput" placeholder="name@example.com" required />
                    <label for="floatingInput">Email address</label>
                </div>



                <div className="d-grid gap-2 mt-3">

                    {
                        sending ? <Loading></Loading> : ''
                    }


                    <button className="btn btn-outline-dark w-20 mx-auto" type="submit"><span className='text-light click-btn'>Send Reset Link</span></button>



                </div>
            </form>




        </div>
    );
};

export default ResetPassword;