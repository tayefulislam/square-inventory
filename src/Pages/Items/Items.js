import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../Item/Item';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading'
import './Items.css'
import { async } from '@firebase/util';


const Items = () => {




    const [items, setItems] = useState([])
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);


    // loading : set true of false
    const [isLaoding, setIsLoading] = useState()





    const url = `https://glacial-scrubland-13579.herokuapp.com/items`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {

                setItems(data)
                setIsLoading(true)

                console.log(data)

            })
    }, [])


    console.log(isLaoding)






    return (
        <>

            <div className='container mb-5'>

                <h1 className='text-center mt-4 mb-4'>Items List</h1>





                <div className='item-container'>

                    {

                        items.map(item => <Item key={item._id} item={item}></Item>)

                    }



                </div>




                <div className="d-grid gap-2 mt-5">

                    {
                        !isLaoding ? <Loading></Loading> : ''
                    }


                    <button onClick={() => navigate('/manage-inventories')} className="btn btn-outline-primary w-20 mx-auto" type="button">Manage Inventories</button>

                </div>



            </div>

        </>
    );
};

export default Items;