import React from 'react';
import Carousel from '../Carousel/Carousel';
import About from '../About/About';
import Service from '../Service/Service';


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Home;