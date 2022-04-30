import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageInventories = () => {



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


    const handleDelete = (id) => {


        const procced = window.confirm('sure')

        if (procced) {
            const url = `http://localhost:5000/detele/${id}`

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
                        items.map(item => <tr>

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

            {
                items.lenth < 1 || <h1 className='text-center text-danger'>any item not found</h1>
            }



        </div>
    );
};

export default ManageInventories;