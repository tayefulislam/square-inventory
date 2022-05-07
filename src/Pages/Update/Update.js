
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const Update = () => {

    const { id } = useParams()


    const [item, setItem] = useState([])


    console.log(id)


    useEffect(() => {
        const url = `https://glacial-scrubland-13579.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                console.log(data)
            })

    }, [id])



    const handleUpdate = (event) => {
        event.preventDefault()

        const priceCheck = parseInt(event.target.price.value)
        const quantityCheck = parseInt(event.target.quantity.value)

        const updateItem = {

            name: event.target.name.value,


            price: parseInt(event.target.price.value),
            quantity: parseInt(event.target.quantity.value),

            image: event.target.image.value,

            supplier: event.target.supplier.value,

            shelf: event.target.shelf.value,

            description: event.target.description.value,



        }


        if ((priceCheck <= -1) || (quantityCheck <= -1)) {
            toast('Plase enter a valid number')
            return
        }

        const url = `https://glacial-scrubland-13579.herokuapp.com/update/${id}`
        // const url = `http://localhost:5000/update/${id}`

        axios.post(url, updateItem)
            .then(function (response) {
                console.log(response)

                if (response.data.modifiedCount === 0) {

                    toast(`Please Change Something,
                    Then Click Update Button`)

                }

                if (response.data.modifiedCount > 0) {

                    toast("Data Updated Successfully")

                }
            })




    }


    console.log(item)


    return (
        <>
            <div className='container mt-4  form-add'>

                <h1 className='text-center mb-5 mt-4 text-light'>Update</h1>


                <form onSubmit={handleUpdate} >



                    <div className="form-floating mb-3 mx-auto">
                        <input type="text" className="form-control" name='name' defaultValue={item?.name} id="floatingInputName" placeholder="Your Name" />
                        <label for="floatingInputName">Item Name </label>
                    </div>

                    <div className="form-floating mb-3 mx-auto">
                        <input type="number" className="form-control" name='price' defaultValue={item?.price} id="floatingInputPrice" placeholder="Price" />
                        <label for="floatingInputName">Price</label>
                    </div>

                    <div className="form-floating mb-3  mx-auto">
                        <input type="number" className="form-control" name='quantity' defaultValue={item?.quantity} id="floatingInpuQuantity" placeholder="Quantity" />
                        <label for="floatingInpuQuantity">Quantity</label>
                    </div>




                    <div className="form-floating mb-3 mx-auto">
                        <input type="text" className="form-control" name='image' defaultValue={item?.image} id="floatingInputName" placeholder="Image" />
                        <label for="floatingInputName">Image </label>
                    </div>

                    <div className="form-floating mb-3 mx-auto">
                        <input type="text" className="form-control" name='supplier' defaultValue={item?.supplier} id="floatingInputName" placeholder="Supplier" />
                        <label for="floatingInputName">Supplier</label>
                    </div>

                    <div className="form-floating mb-3 mx-auto">
                        <textarea ut type="text" className="form-control" name='description' defaultValue={item?.description} id="floatingInputName" placeholder="Description" />
                        <label for="floatingInputName">Description</label>
                    </div>

                    <div className="form-floating mb-3 mx-auto">
                        <input type="text" className="form-control" name='shelf' defaultValue={item?.shelf} id="floatingInputName" placeholder="Your Name" />
                        <label for="floatingInputName">Shelf</label>
                    </div>


                    {/* <div className="form-floating mb-3 mx-auto">
        <input type="number" className="form-control" name='trackid' id="floatingInputName" placeholder="Your Name" />
        <label for="floatingInputName">Track ID</label>
    </div> */}



                    <div className="d-grid gap-2 mt-3">


                        <button className="btn btn-outline-dark w-20 mx-auto" type="submit"><span className='text-light click-btn'>Update</span></button>


                    </div>
                </form>







            </div>

        </>
    );
};

export default Update;