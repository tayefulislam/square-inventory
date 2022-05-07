import React, { useEffect, useState } from 'react';
import './Inventory.css'


import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
const Inventory = () => {

    const { id } = useParams()

    console.log(id)

    // const [item, setItem] = useState([]);
    const [iQuantity, setIQuantity] = useState();
    let [count, setCount] = useState(0)
    const navigate = useNavigate()


    const [item, setItem] = useState([]);
    useEffect(() => {

        const url = `https://glacial-scrubland-13579.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItem(data)

            })

    }, [id, iQuantity, count])

    console.log(item)

    const preQuantity = parseInt(item.quantity);

    // presold
    const preSold = parseInt(item.sold);

    let newSold;
    console.log(preSold)


    const handleQuantityUpdate = (event) => {

        event.preventDefault()

        const newQuantity = parseInt(event.target.newquantity.value);

        if (!newQuantity) {
            toast('Plase enter a  number')
            return;
        }

        else if (newQuantity <= 0) {

            toast('plase enter a valid number')

        }

        else {

            const updateStock = parseInt(preQuantity + newQuantity)

            console.log(updateStock)



            axios.post(`https://glacial-scrubland-13579.herokuapp.com/inventory/${id}`, {
                newQuantity: updateStock,

                newSold: preSold
            })
                .then(function (response) {
                    console.log(response)

                    setIQuantity(updateStock)

                    event.target.reset()

                })


            console.log(newQuantity)

        }







    }





    const handleUpdate = () => {

        if (preQuantity <= 0) {

            toast('Stock Out')
            return;

        }


        else {

            const newQuantity = preQuantity - 1;
            newSold = preSold + 1

            // check update
            setCount(newQuantity)




            axios.post(`https://glacial-scrubland-13579.herokuapp.com/inventory/${id}`, {
                newQuantity, newSold
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

                <img src={item?.image} alt="" />

                <div className='info-container'>
                    <p>
                        <h1>{item?.name}</h1>
                        <span className=''><i>Id : {item?._id}</i></span><br />
                        <span>Description : {item?.description}</span> <br />
                        <span>Price : {item?.price}</span>  <br />

                        <span>Quantity : {item?.quantity ?

                            item?.quantity : item?.quantity < 1 && 'Stock Out'}</span>  <br />

                        <span>Sold : {item?.sold}</span>  <br />

                        <span>Supplier : {item?.supplier}</span>  <br />
                    </p>

                    <div className="d-grid gap-2">
                        <button onClick={handleUpdate} className="btn btn-primary w-50 mx-auto" type="button">Delivered</button>

                    </div>





                </div>




            </div>





            <form onSubmit={handleQuantityUpdate} className="input-group mb-3  mt-5 w-50 mx-auto">
                <input type="number" name='newquantity' className="form-control" placeholder="Add Quantity" aria-describedby="button-addon2" />
                <button className="btn  btn-outline-success" type="submit" id="button-addon2">Re Stock</button>






            </form>





            <div className="d-grid gap-2 mt-5 mb-5">


                <button onClick={() => navigate('/manage-inventories')} className="btn btn-outline-primary w-20 mx-auto" type="button">Manage Inventories</button>

            </div>

        </div >
    );
};

export default Inventory;