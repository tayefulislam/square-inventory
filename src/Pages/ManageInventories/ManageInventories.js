import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const ManageInventories = () => {



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


    const handleDelete = (id) => {


        const procced = window.confirm('sure')

        if (procced) {
            const url = `https://glacial-scrubland-13579.herokuapp.com/detele/${id}`

            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    if (data.deletedCount > 0) {


                        const remaning = items.filter(item => item._id !== id)

                        setItems(remaning)




                    }
                })
        }





    }



    return (

        <div className='container'>

            <h1 className='text-center mt-5 mb-4'>Manage Inventories</h1>

            <div className="d-grid gap-2">
                <button onClick={() => navigate('/addnewitem')} className="btn btn-outline-primary w-20 mx-auto" type="button">Add New Item</button>

            </div>


            <div className='myitems mt-5'>

                {
                    items.map(item => <div className='myitem' key={item._id}>

                        <h4><span >Name : </span>{item?.name}</h4>


                        <p className='fw-bold'><span >Quantity :</span> {item?.quantity ?

                            item?.quantity : item?.quantity === 0 && <span className='fw-bold text-danger'>Stock Out</span>}</p>
                        <p ><span className='fw-bold'>Sold :</span> {item?.sold}</p>

                        <p><span className='fw-bold'>Price : </span>{item?.price}</p>


                        <p><span className='fw-bold'>Supplier : </span><span >{item?.supplier}</span></p>

                        <p><span className='fw-bold'>Track Id : </span>

                            <span className='text-danger' >{item?.trackId}</span></p>

                        <p className='fw-bold'><span>Shelf :</span> {item?.shelf}</p>
                        <p><span className='fw-bold'>Email : </span>{item?.email}</p>


                        <div className='text-center'>
                            <p><span className='fw-bold'>Description :</span> <br></br> {item?.description}</p>


                        </div>

                        <div className='text-center btn-all pt-2'>


                            <div className='' >
                                <button onClick={() => handleDelete(item?._id)} className='btn btn-danger g-3'>Delete</button>
                                <button onClick={() => navigate(`/update/${item?._id}`)} className='btn btn-success m-1 '>Update</button>
                            </div>


                            <button onClick={() => navigate(`/inventory/${item._id}`)} className='manage-btn  m-1 '>Manage</button>
                        </div>


                    </div>)
                }
            </div>




        </div>
    );
};

export default ManageInventories;