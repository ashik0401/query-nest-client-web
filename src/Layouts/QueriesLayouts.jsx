import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';

const QueriesLayouts = () => {
    return (
        <div className='bg-base-200'>
            <Navbar/>
            <div className=''>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default QueriesLayouts;