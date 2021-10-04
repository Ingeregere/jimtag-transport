import React from 'react';
import Navigation from '../../Component/Header'
import Footer from "../../Component/Footer";
import Login from "../../../app/user-pages/Login";


const HomePage = () => {
    return (
        <>
            <Navigation />
            <Login />
            <Footer />

        </>
    );
};

export default HomePage;