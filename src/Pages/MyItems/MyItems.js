import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import MyItem from '../MyItem/MyItem';
import './MyItems.css'


const MyItems = () => {

    const [items, setItems] = useState([])
    console.log(items)
    const navigate = useNavigate()

    const [user, loading, error] = useAuthState(auth);


    const url = `https://glacial-scrubland-13579.herokuapp.com/itemlist?email=${user?.email}`;

    // const url = `http://localhost:5000/itemlist?email=${user?.email}`;

    useEffect(() => {


        const getItems = async () => {


            try {

                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }

                });

                setItems(data)

            }
            catch (error) {

                if (error.response.status === 401 || error.response.status === 403) {

                    signOut(auth)

                    navigate('/login')

                }

            }
        }

        getItems();



    }, [user])


    const handleDelete = (id) => {


        const procced = window.confirm('Plase Comfirm Delte Item ?')

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



            <h1 className='text-center mt-5 mb-4'>My Items</h1>

            <div className="d-grid gap-2">
                <button onClick={() => navigate('/addnewitem')} className="btn btn-outline-primary w-20 mx-auto" type="button">Add New Item</button>

            </div>


            <div className='myitems mt-5'>

                {
                    items.map(item => <div className='myitem' key={item._id}>

                        <h4><span >Name : </span>{item?.name}</h4>

                        <p className='fw-bold'><span >Quantity :</span> {item?.quantity}</p>

                        <p><span className='fw-bold'>Price : </span>{item?.price}</p>

                        <p><span className='fw-bold'>Supplier : </span><span >{item?.supplier}</span></p>

                        <p><span className='fw-bold'>Track Id : </span>

                            <span className='text-danger' >{item?.trackId}</span></p>

                        <p className='fw-bold'><span>Shelf :</span> {item?.shelf}</p>


                        <div className='text-center'>
                            <p><span className='fw-bold'>Description :</span> <br></br> {item?.description}</p>

                            <div>
                                <button onClick={() => handleDelete(item?._id)} className='btn btn-danger g-3'>Delete</button>
                                <button onClick={() => navigate(`/update/${item?._id}`)} className='btn btn-success m-1 '>Update</button>
                            </div>

                            <button onClick={() => navigate(`/inventory/${item._id}`)} className='manage-btn m-1 '>Manage</button>
                        </div>


                    </div>)
                }
            </div>







        </div>
    );
};

export default MyItems;