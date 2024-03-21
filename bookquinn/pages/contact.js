import React from 'react';
import Header from '../app/components/Header';
import Navbar from '../app/components/Navbar';
import Contact from '../app/components/Contact';
import Footer from '../app/components/Footer';
import '../app/globals.css';

function contactpage() {
    return (
        <>
            <Header />
            <Navbar />
            <Contact />
            <Footer />
        </>)
}

export default contactpage;