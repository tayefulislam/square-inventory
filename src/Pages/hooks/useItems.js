import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const useItems = () => {


    const [items, setItems] = useState([])


    const [user, loading, error] = useAuthState(auth);


    // loading : set true of false
    const [isLaoding, setIsLoading] = useState()





    const url = `https://glacial-scrubland-13579.herokuapp.com/items`;

    // const url = `http://localhost:5000/items`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {

                setItems(data)
                setIsLoading(true)

                console.log(data)

            })
    }, [])

    return [items, isLaoding, setItems];
};

export default useItems;