import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyItems = () => {

    const [items, setItems] = useState([])
    const navigate = useNavigate()

    const [user, loading, error] = useAuthState(auth);


    const url = `https://glacial-scrubland-13579.herokuapp.com/items?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data)
                console.log(data)
            })
    }, [user])


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



            <h1 className='text-center mt-5 mb-4'>My Items</h1>

            <div className="d-grid gap-2">
                <button onClick={() => navigate('/addnewitem')} className="btn btn-outline-primary w-20 mx-auto" type="button">Add New Item</button>

            </div>


            <table className="table">




                <tbody>

                    <tr>

                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Supplier</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action </th>
                    </tr>






                    {
                        items.map(item => <tr key={item?._id}>

                            <td>{item?.name}</td>
                            <td>{item?.price}</td>
                            <td>{item?.quantity}</td>
                            <td>{item?.supplier}</td>
                            <td>{item?.description}</td>


                            <td><button onClick={() => handleDelete(item?._id)} className='btn btn-danger g-3'>Delete</button>
                                <button className='btn btn-success'>update</button></td>


                        </tr>)
                    }




                </tbody>

            </table>




        </div>
    );
};

export default MyItems;