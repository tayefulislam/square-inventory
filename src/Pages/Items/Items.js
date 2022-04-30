import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {


    const [items, setItems] = useState([])

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
        <div className='container'>

            <h1 className='text-center mt-4 mb-4'>Items List</h1>

            <div className='item-container'>
                {

                    items.map(item => <Item key={item._id} item={item}></Item>)

                }
            </div>



        </div>
    );
};

export default Items;