import React from 'react';
import Navigation from '../../Component/Header'
import Footer from "../../Component/Footer";
import CreateAnnonce from "../../../app/annonce/CreateAnnonce";

const DeposerAnnonce = () => {
    return (
        <>
            <Navigation />
            <CreateAnnonce />
            <Footer />
        </>
    );
};

export default DeposerAnnonce;