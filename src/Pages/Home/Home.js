import React from 'react';
import AppoinmentBanner from './AppoinmentBanner/AppoinmentBanner';
import BannerHome from './BannerHome/BannerHome';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <BannerHome></BannerHome>
            <Services></Services>
            <AppoinmentBanner></AppoinmentBanner>

        </div>
    );
};

export default Home;