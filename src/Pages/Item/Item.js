import React from 'react';
import './Item.css'

const Item = ({ item }) => {

    console.log('imte')



    return (
        <div className='item'>

            <h2 className='text-center'>{item?.name}</h2>
            <img src={item.image} alt="" />

            <p>
                <span>Description : {item?.description}</span> <br />
                <span>Price : {item?.price}</span>  <br />
                <span>Quantity : {item?.quantity}</span>  <br />
                <span>Supplier : {item?.supplier}</span>  <br />
            </p>

            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="button">Manage</button>

            </div>



        </div>
    );
};

export default Item;