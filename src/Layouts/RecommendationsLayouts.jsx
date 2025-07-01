import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';

const RecommendationsLayouts = () => {
    return (
        <div className=' bg-base-200'>
            <Navbar />
            <div className=' '>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default RecommendationsLayouts;