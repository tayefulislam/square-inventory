import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {


    const [items, setItems] = useState([])
    const navigate = useNavigate()





    const url = `https://glacial-scrubland-13579.herokuapp.com/items`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data)
                console.log(data)
            })
    }, [])






    return (
        <div className='container mb-5'>

            <h1 className='text-center mt-4 mb-4'>Items List</h1>

            <div className='item-container'>
                {

                    items.slice(0, 6).map(item => <Item key={item._id} item={item}></Item>)

                }
            </div>


            <div className="d-grid gap-2 mt-5">
                <button onClick={() => navigate('/manage-inventories')} className="btn btn-outline-primary w-20 mx-auto" type="button">Manage Inventories</button>

            </div>



        </div>
    );
};

export default Items;