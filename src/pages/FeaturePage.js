import React from 'react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Footer from '../components/Footer'
function FeaturePage() {
    return (
        <div>
            <HeroSection h1="Features" p1="Home" p2="Pages" p3="Features" />
            <Features />
            <Footer />
        </div>
    );
}

export default FeaturePage;
