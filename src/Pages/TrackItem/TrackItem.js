import React, { useEffect, useState } from 'react';

const TrackItem = () => {

    const [trackItem, setTrackItem] = useState([])

    const [trackIdMain, setTrackIdMain] = useState('')


    const handelTrack = (event) => {

        event.preventDefault()

        const trackId = event.target.trackid.value;
        setTrackIdMain(trackId)


    }

    console.log(trackIdMain)


    useEffect(() => {

        fetch(`http://localhost:5000/item/${trackIdMain}`)
            .then(res => res.json())
            .then(data => {
                setTrackItem(data)
                console.log(data)
            })
    }, [trackIdMain])





    return (
        <>
            <form onSubmit={handelTrack} class="input-group mb-5  mt-5 w-50 mx-auto">
                <input type="number" name='trackid' class="form-control" placeholder="Tack Item by Track Id" aria-describedby="button-addon2" />
                <button class="btn  btn-outline-success" type="submit" id="button-addon2">Track ID</button>
            </form>



            <div>
                <h1>{trackItem.name}</h1>
            </div>













        </>


    );
};

export default TrackItem;