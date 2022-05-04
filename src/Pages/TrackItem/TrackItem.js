import React, { useEffect, useState } from 'react';

const TrackItem = () => {

    const [trackItem, setTrackItem] = useState([])

    const [trackIdMain, setTrackIdMain] = useState('')



    const handelTrack = (event) => {



        event.preventDefault()

        const trackId = event.target.trackid.value;
        setTrackIdMain(trackId)


    }

    console.log(trackItem)


    useEffect(() => {

        // fetch(`https://glacial-scrubland-13579.herokuapp.com/item/${trackIdMain}`)

        fetch(`http://localhost:5000/item/${trackIdMain}`)

            .then(res => res.json())
            .then(data => {
                setTrackItem(data)
                console.log(data)
            })
    }, [trackIdMain])

    console.log(trackItem.length === 0)



    return (
        <>
            <form onSubmit={handelTrack} class="input-group mb-5  mt-5 w-50 mx-auto">
                <input type="number" name='trackid' class="form-control" placeholder="Tack Item by Track Id" aria-describedby="button-addon2" />
                <button class="btn  btn-outline-success" type="submit" id="button-addon2">Track ID</button>
            </form>



            <div>

                {
                    trackItem.length === 0 ? <h1>imtem not found</h1> : <> <h1>{trackItem.name}</h1> </>
                }



            </div>













        </>


    );
};

export default TrackItem;