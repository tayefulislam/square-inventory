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

        const newItem = {
            name: event.target.name.value,
            email: user.email,

            price: parseInt(event.target.price.value),
            quantity: parseInt(event.target.quantity.value),

            image: event.target.image.value,

            supplier: event.target.supplier.value,
            trackId: event.target.trackid.value,
            shelf: event.target.shelf.value,

            description: event.target.description.value,

            sold: 0,

        }

        console.log(newItem)

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
            {/* <div className='w-50 mx-auto text-center'>

                <h1>Add New Item</h1>

                <form className='form-container' onSubmit={handleAddItem}>

                    <div>
                        <label>Name</label> <br />
                        <input type="text" name='name' required />
                    </div>
                    <div>
                        <label>Price</label> <br />
                        <input type="number" name='price' required />
                    </div>
                    <div>
                        <label>Quantity</label> <br />
                        <input type="number" name='quantity' required />
                    </div>
                    <div>
                        <label>Image Link</label> <br />
                        <input type="text" name='image' />
                    </div>
                    <div>
                        <label>Supplier</label> <br />
                        <input type="text" name='supplier' />
                    </div>
                    <div>
                        <label>Description</label> <br />
                        <input type="text" name='description' />
                    </div>

                    <button>Add New Item</button>
                </form>



            </div> */}

            <div className='container mt-4  form-add'>

                <h1 className='text-center mb-5 mt-4 text-light'>Add  New Item</h1>


                <form onSubmit={handleAddItem}>



                    <div className="form-floating mb-3 mx-auto">
                        <input type="text" className="form-control" name='name' id="floatingInputName" placeholder="Your Name" />
                        <label for="floatingInputName">Item Name </label>
                    </div>

                    <div className="form-floating mb-3 mx-auto">
                        <input type="number" className="form-control" name='price' id="floatingInputPrice" placeholder="Price" />
                        <label for="floatingInputName">Price</label>
                    </div>

                    <div className="form-floating mb-3  mx-auto">
                        <input type="number" className="form-control" name='quantity' id="floatingInpuQuantity" placeholder="Quantity" />
                        <label for="floatingInpuQuantity">Quantity</label>
                    </div>




                    <div className="form-floating mb-3 mx-auto">
                        <input type="text" className="form-control" name='image' id="floatingInputName" placeholder="Image" />
                        <label for="floatingInputName">Image </label>
                    </div>

                    <div className="form-floating mb-3 mx-auto">
                        <input type="text" className="form-control" name='supplier' id="floatingInputName" placeholder="Supplier" />
                        <label for="floatingInputName">Supplier</label>
                    </div>

                    <div className="form-floating mb-3 mx-auto">
                        <input type="text" className="form-control" name='description' id="floatingInputName" placeholder="Description" />
                        <label for="floatingInputName">Description</label>
                    </div>

                    <div className="form-floating mb-3 mx-auto">
                        <input type="text" className="form-control" name='shelf' id="floatingInputName" placeholder="Your Name" />
                        <label for="floatingInputName">Shelf</label>
                    </div>


                    <div className="form-floating mb-3 mx-auto">
                        <input type="number" className="form-control" name='trackid' id="floatingInputName" placeholder="Your Name" />
                        <label for="floatingInputName">Track ID</label>
                    </div>



                    <div className="d-grid gap-2 mt-3">


                        <button className="btn btn-outline-dark w-20 mx-auto" type="submit"><span className='text-light click-btn'>Add Item</span></button>


                    </div>
                </form>







            </div>


        </>
    );
};

export default AddItem;