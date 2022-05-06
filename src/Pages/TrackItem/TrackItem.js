import React, { useEffect, useState } from 'react';
import './TrackItem.css'

const TrackItem = () => {

    const [trackItem, setTrackItem] = useState([])

    const [trackIdMain, setTrackIdMain] = useState('0000')



    const handelTrack = (event) => {



        event.preventDefault()

        const trackId = event.target.trackid.value;
        setTrackIdMain(trackId)


    }

    console.log(trackItem)


    useEffect(() => {

        fetch(`https://glacial-scrubland-13579.herokuapp.com/item/${trackIdMain}`)

            // fetch(`http://localhost:5000/item/${trackIdMain}`)

            .then(res => res.json())
            .then(data => {
                setTrackItem(data)
                console.log(data)
            })
    }, [trackIdMain])

    console.log(trackItem.length === 0)



    return (
        < div className='container track-item'>
            <h1 className='text-center text-light'>Track Item</h1>

            <form onSubmit={handelTrack} className="input-group mb-5 w-50 sm:w-100 mt-5 mx-auto">
                <input type="text" name='trackid' className="form-control" placeholder="Tack Item by Track Id" aria-describedby="button-addon2" />
                <button className="btn track-btn" type="submit" id="button-addon2">Track ID</button>
            </form>



            <div>

                <h1 className='text-center text-light'>{trackItem?.name}</h1>
                <h2 className='text-center text-light'>{trackItem?.shelf}</h2>





            </div>













        </div>


    );
};

export default TrackItem;