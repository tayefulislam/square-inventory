import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
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






    return (
        <div>

            <CountUp
                start={0}
                end={items?.length}
                duration={4}


            >

            </CountUp>

        </div>
    );
};

export default Count;