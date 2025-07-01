import React from 'react';
import Slider from './Slider';
import LatestQuery from './LatestQuery';
import WhyChooseUs from './WhyChooseUs';
import TrendingDiscussions from './TrendingDiscussions';
import TopContributors from './TopContributors';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Slider />
            <LatestQuery />
            <TrendingDiscussions />
            <TopContributors />
            <WhyChooseUs />
        </div>
    );
};

export default Home;