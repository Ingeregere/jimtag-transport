import React from 'react';
import Navigation from '../../Component/Header'
import RowCategory from "../../Component/RowCategory";
import Product from "../../Component/Product";
import SearchFilter from "../../Component/SearchFilter";
import {Carousel} from "react-bootstrap";
import CarrouselAds from "../../Component/Carrousel";
import Footer from "../../Component/Footer";


const HomePage = () => {
    return (
        <>
            <Navigation />
            <RowCategory />
            <SearchFilter />
            <Product />
            <Footer />

        </>
    );
};

export default HomePage;