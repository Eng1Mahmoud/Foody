import React from 'react';
import Slider from '../components/Slider';
import Best from '../components/Best';
import Features from '../components/Features';
import Product from '../components/Product';
import Firm from '../components/Firm';
import Swipers from '../components/Swiper';
import Blog from '../components/Blog'
import Footer from '../components/Footer'

import BlogsData from '../components/objectsData'// import data for blogs 

let BlogData = BlogsData.slice(0, 3) // import data you need only
function Home() {
    return (
        <div className="home">
            <Slider />
            <Best />
            <Features />
            <Product />
            <Firm />
            <Swipers />
            <Blog Blogs={BlogData} />
            < Footer />
        </div>
    );
}

export default Home;
