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

            <form onSubmit={handelTrack} className="track-form mb-5 mt-5">





                <div className="w-50 mb-3 mx-auto">
                    <input type="text" className="form-control fs-3   text-center" name='trackid' placeholder="Tack Item by Track Id" />

                    <button className='form-control  fw-bold fs-4 w-50 mx-auto mt-1 track-btn' type="submit"> <i class="fa-solid fa-magnifying-glass"></i></button>
                </div>







            </form>



            <div>

                <h1 className='text-center text-light'>{trackItem?.name}</h1>
                <h2 className='text-center text-light'>


                    {trackItem.shelf ? 'Shelf : ' + trackItem?.shelf : ''}

                </h2>





            </div>













        </div>


    );
};

export default TrackItem;