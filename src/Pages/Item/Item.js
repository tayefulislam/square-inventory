import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {

    const navigate = useNavigate()


    return (
        <div className='item'>


            <img className='mx-auto' src={item.image} alt="" />
            <h2 className='text-center'>{item?.name}</h2>

            <p>

                <span>Price : {item?.price}</span>  <br />
                <span>Quantity : {item?.quantity ?

                    item?.quantity : item?.quantity === 0 && <span className='text-danger fw-bold'>Stock Out</span>}</span>  <br />
                <span>Supplier : {item?.supplier}</span>  <br />
                <span>Track ID : {item?.trackId}</span>  <br />

                <span>Description : {item?.description}</span> <br />
            </p>

            <button onClick={() => navigate(`/inventory/${item._id}`)} className='btn-manage'>Manage</button>



        </div>
    );
};

export default Item;