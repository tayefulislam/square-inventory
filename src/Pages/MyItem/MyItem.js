import React from 'react';

const MyItem = ({ item }) => {


    return (
        <div>


            <h4>Name : {item.name}</h4>
            <p>Quantity : {item.quantity}</p>
            <p>Price : {item.price}</p>
            <p>Supplier : {item?.supplier}</p>






        </div>
    );
};

export default MyItem;