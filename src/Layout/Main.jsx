import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Share/Header/Header';
import Footer from '../Share/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;