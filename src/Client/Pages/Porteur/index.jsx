import React from 'react';
import Navigation from '../../Component/Header'
import RowCategory from "../../Component/RowCategory";
import Porteur from "../../Component/Porteur";
import SearchFilter from "../../Component/SearchFilter";
import Footer from "../../Component/Footer";


const HomePage = () => {
    return (
        <>
            <Navigation />
            <RowCategory />
            <SearchFilter />
            <Porteur />
            <Footer />

        </>
    );
};

export default HomePage;