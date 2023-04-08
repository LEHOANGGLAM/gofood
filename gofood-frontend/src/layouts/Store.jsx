import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import React, { useEffect } from "react";

const Store = ({}) => {
 
    return (
        <div >
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Store;