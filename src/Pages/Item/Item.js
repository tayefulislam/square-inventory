import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {

    const navigate = useNavigate()

    console.log('imte')



    return (
        <div className='item'>

            <h2 className='text-center'>{item?.name}</h2>
            <img src={item.image} alt="" />

            <p>
                <span>Description : {item?.description}</span> <br />
                <span>Price : {item?.price}</span>  <br />
                <span>Quantity : {item?.quantity ?

                    item?.quantity : item?.quantity === 0 && 'Stock Out'}</span>  <br />
                <span>Supplier : {item?.supplier}</span>  <br />
                <span>Track ID : {item?.trackId}</span>  <br />
            </p>

            <div className="d-grid gap-2 col-6 mx-auto">
                <button onClick={() => navigate(`/inventory/${item._id}`)} className="btn btn-primary" type="button">Manage</button>

            </div>



        </div>
    );
};

export default Item;