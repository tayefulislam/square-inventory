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



    return (
        <div className='container'>

            <h1 className='text-center mt-5 mb-4'>Manage Inventories</h1>


            <table className="table">
                <thead>
                    <tr>

                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Supplier</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action </th>
                    </tr>
                </thead>
                <tbody>


                    {
                        items.map(item => <tr>

                            <td>{item?.name}</td>
                            <td>{item?.price}</td>
                            <td>{item?.quantity}</td>
                            <td>{item?.supplier}</td>
                            <td>{item?.description}</td>


                            <td><button className='btn btn-danger g-3'>Delete</button>
                                <button className='btn btn-success'>update</button></td>


                        </tr>)
                    }




                </tbody>
            </table>



        </div>
    );
};

export default ManageInventories;