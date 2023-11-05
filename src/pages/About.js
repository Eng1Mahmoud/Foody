import React from 'react';
import HeroSection from '../components/HeroSection';
import Best from '../components/Best';
import Features from '../components/Features';
import Firm from '../components/Firm';
import Footer from '../components/Footer'
function About() {
    return (
        <div className="about">
            <HeroSection h1="About Us" p1="Home" p2="Pages" p3="About Us" />
            <Best />
            <Firm />
            <Features />
            <Footer />
        </div >
    );
}

export default About;
