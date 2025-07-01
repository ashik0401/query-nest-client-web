import React from 'react';
import AddQueries from './AddQueries';
import Navbar from '../../Shared/Navbar';
import Footer from '../../Shared/Footer';
import { Outlet } from 'react-router';
import ScrollToTop from '../../Shared/ScrollToTop';

const Queries = () => {
    return (
        <div className='bg-base-200 '>
            <ScrollToTop />
            <Navbar />
           <div >
             <div className=''>
                <Outlet />
            </div>
           </div>
            <Footer />
        </div>
    );
};

export default Queries;