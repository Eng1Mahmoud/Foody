import React from 'react';
import HeroSection from '../components/HeroSection';
import Product from '../components/Product';
import Firm from '../components/Firm';
import Swipers from '../components/Swiper';
import Footer from '../components/Footer'
function ProductsPage() {
    return (
        <div>
            <HeroSection h1="Products" p1="Home" p2="Pages" p3="Products" />
            <Product />
            <Firm />
            <Swipers />
            <Footer />

        </div>
    );
}

export default ProductsPage;
