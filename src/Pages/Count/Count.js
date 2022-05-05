import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import './Count.css'
const Count = () => {


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

    let quantity = 0;
    let sold = 0;



    for (const item of items) {

        sold = sold + item.sold
        quantity = quantity + item.quantity;




    }

    console.log(sold)






    return (
        <div className='container count mt-5'>

            <div>
                <h2>Total Item</h2>
                <CountUp className='text-dark fs-1'
                    start={0}
                    end={items.length}
                    duration={3}> </CountUp>
            </div>
            <div>
                <h2>In Stock</h2>
                <CountUp className='text-dark fs-1'
                    start={0}
                    end={quantity}
                    duration={3}> </CountUp>
            </div>

            <div>
                <h2>Total Delivered</h2>
                <CountUp className='text-dark fs-1'
                    start={0}
                    end={sold}
                    duration={3}> </CountUp>
            </div>



        </div>
    );
};

export default Count;