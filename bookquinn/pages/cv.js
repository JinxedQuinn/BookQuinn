import React from 'react';
import Header from '../app/components/Header';
import Navbar from '../app/components/Navbar';
import Cvcomponent from '../app/components/Cvcomponent';
import Footer from '../app/components/Footer';
import '../app/globals.css';

function cv() {
    return (
        <>
            <Header />
            <Navbar />
            <Cvcomponent />
            <Footer />
        </>)
}

export default cv;