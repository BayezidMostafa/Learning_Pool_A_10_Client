import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import bg_image from '../all-bg.jpg'

const Main = () => {
    return (
        <div style={{backgroundImage: `url(${bg_image})`, backgroundSize:"cover" }}>
            {/* Common NavBar */}
            <NavBar />
            {/* All other Child Components */}
            <Outlet />
            {/* Common footers */}
            <Footer/>

        </div>
    );
};

export default Main;