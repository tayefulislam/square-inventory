import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../Item/Item';

import Loading from '../Shared/Loading/Loading';
import './Items.css';
import useItems from '../hooks/useItems';


const Items = () => {

    const navigate = useNavigate()

    const [items, isLaoding] = useItems()

    console.log(items, isLaoding)



    // const [items, setItems] = useState([])





    // // loading : set true of false
    // const [isLaoding, setIsLoading] = useState()

    // const url = `https://glacial-scrubland-13579.herokuapp.com/items`;

    // // const url = `http://localhost:5000/items`;

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {

    //             setItems(data)
    //             setIsLoading(true)

    //             // console.log(data)

    //         })
    // }, [])


    // // console.log(isLaoding)






    return (
        <>

            <div className='container mb-5'>

                <h1 className='text-center mt-4 mb-4'>Items List</h1>



                <div className='item-container'>

                    {

                        items.slice(0, 6).map(item => <Item key={item._id} item={item}></Item>)

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