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
        <div className='w-50 mx-auto text-center'>

            {/* "name": "WEO-J28EDK 5",
        "image": "https://i.ibb.co/LzDMpbc/drive-Safety.png",
        "description": "walton ",
        "price": "233",
        "quantity": "8",
        "supplier": "sabbir" */}



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






        </div>
    );
};

export default AddItem;