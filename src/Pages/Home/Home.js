import React from 'react';
import Count from '../Count/Count';
import Items from '../Items/Items';
import Banner from '../Shared/Banner/Banner';
import TrackItem from '../TrackItem/TrackItem';


const Home = () => {



    return (
        <div>
            {/* track Item and count is extra section */}
            <Banner></Banner>
            <TrackItem></TrackItem>
            <Items></Items>
            <Count></Count>




        </div>
    );
};

export default Home;