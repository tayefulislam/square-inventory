import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css'

const Loading = () => {
    return (

        <div className='spinner mt-3 mb-5' >

            <Spinner animation="grow" variant="grey" />


        </div>

    );
};

export default Loading;