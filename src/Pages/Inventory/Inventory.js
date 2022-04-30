import React, { useEffect, useState } from 'react';
import './Inventory.css'


import { useParams } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
const Inventory = () => {

    const { id } = useParams()

    console.log(id)

    const [item, setItem] = useState([])
    const [iQuantity, setIQuantity] = useState(0)

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                console.log(data)
            })

    }, [id, iQuantity])

    console.log(item)

    const preQuantity = parseInt(item.quantity);

    const handleUpdate = () => {

        if (preQuantity <= 0) {

            toast('queatity 0')
            return;





        }


        else {
            const newQuantity = preQuantity - 1;


            axios.post(`http://localhost:5000/inventory/${id}`, {
                newQuantity
            })
                .then(function (response) {
                    console.log(response)

                    setIQuantity(newQuantity)

                })


            console.log(newQuantity)
        }





    }

    return (
        <div className='container'>




            <div className='inventory-container mt-5'>

                <img style={{ width: "300px" }} src={item?.image} alt="" />

                <div className='info-container'>
                    <p>
                        <h1>{item?.name}</h1>
                        <span className=''><i>Id : {item?._id}</i></span><br />
                        <span>Description : {item?.description}</span> <br />
                        <span>Price : {item?.price}</span>  <br />
                        <span>Quantity : {item?.quantity ? item?.quantity : iQuantity}</span>  <br />
                        <span>Supplier : {item?.supplier}</span>  <br />
                    </p>

                    <div class="d-grid gap-2">
                        <button onClick={handleUpdate} class="btn btn-primary w-50 mx-auto" type="button">Delivered</button>

                    </div>


                </div>


            </div>












        </div>
    );
};

export default Inventory;