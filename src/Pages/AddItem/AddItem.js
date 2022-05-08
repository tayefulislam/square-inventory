import React from 'react';
import './AddItem.css'

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
const AddItem = () => {

    const [user, loading, error] = useAuthState(auth);



    const handleAddItem = (event) => {
        event.preventDefault()

        const trackId = Math.floor(100000 * Math.random())

        const priceCheck = parseInt(event.target.price.value)
        const quantityCheck = parseInt(event.target.quantity.value)


        const newItem = {
            name: event.target.name.value,
            email: user.email,

            price: parseInt(event.target.price.value),
            quantity: parseInt(event.target.quantity.value),

            image: event.target.image.value,

            supplier: event.target.supplier.value,
            // trackId: event.target.trackid.value,
            trackId: trackId + '',
            shelf: event.target.shelf.value,

            description: event.target.description.value,

            sold: 0,

        }

        console.log(newItem)



        // check nagative value

        if ((priceCheck <= -1) || (quantityCheck <= -1)) {
            toast('Please enter a valid number')
            return
        }


        axios.post('https://glacial-scrubland-13579.herokuapp.com/addnewitem', newItem)
            .then(function (response) {
                console.log(response)

                if (response.data.insertedId) {

                    toast('New Item Added in Inventory')
                    event.target.reset()

                }
            })











    }



    return (
        <>

            <div className='container mt-4  form-add'>

                <h1 className='text-center mb-5 mt-4 text-light'>Add  New Item</h1>


                <form onSubmit={handleAddItem}>



                    <div className="form-floating mb-3 mx-auto">
                        <input type="text" className="form-control" name='name' required id="floatingInputName" placeholder="Your Name" />
                        <label for="floatingInputName">Item Name </label>
                    </div>

                    <div className="form-floating mb-3 mx-auto">
                        <input type="number" className="form-control" name='price' required id="floatingInputPrice" placeholder="Price" />
                        <label for="floatingInputName">Price</label>
                    </div>

                    <div className="form-floating mb-3  mx-auto">
                        <input type="number" className="form-control" name='quantity' required id="floatingInpuQuantity" placeholder="Quantity" />
                        <label for="floatingInpuQuantity">Quantity</label>
                    </div>




                    <div className="form-floating mb-3 mx-auto">
                        <input type="text" className="form-control" name='image' required id="floatingInputName" placeholder="Image" />
                        <label for="floatingInputName">Image </label>
                    </div>

                    <div className="form-floating mb-3 mx-auto">
                        <input type="text" className="form-control" name='supplier' required id="floatingInputName" placeholder="Supplier" />
                        <label for="floatingInputName">Supplier</label>
                    </div>

                    <div className="form-floating mb-3 mx-auto">
                        <input type="text" className="form-control" name='description' required id="floatingInputName" placeholder="Description" />
                        <label for="floatingInputName">Description</label>
                    </div>

                    <div className="form-floating mb-3 mx-auto">
                        <input type="text" className="form-control" name='shelf' required id="floatingInputName" placeholder="Your Name" />
                        <label for="floatingInputName">Shelf</label>
                    </div>


                    {/* <div className="form-floating mb-3 mx-auto">
                        <input type="number" className="form-control" name='trackid' id="floatingInputName" placeholder="Your Name" />
                        <label for="floatingInputName">Track ID</label>
                    </div> */}



                    <div className="d-grid gap-2 mt-3">


                        <button className="btn btn-outline-dark w-20 mx-auto" type="submit"><span className='text-light click-btn'>Add Item</span></button>


                    </div>
                </form>







            </div>


        </>
    );
};

export default AddItem;