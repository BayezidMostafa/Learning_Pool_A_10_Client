import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className=''>
            <NavBar className="" />
            <Outlet />
        </div>
    );
};

export default Main;