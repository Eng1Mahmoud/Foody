import React from 'react';
import HeroSection from '../components/HeroSection';
import Swipers from '../components/Swiper';
import Footer from '../components/Footer'
function Testimonialpage() {
    return (
        <div>
            <HeroSection h1="Testimonial" p1="Home" p2="Pages" p3="Testimonial" />
            <Swipers />
            <Footer />
        </div >
    );
}

export default Testimonialpage;
