import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logo.png';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="px-4 py-8 dark:bg-gray-800 dark:text-gray-400 mt-20">
            <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                    <div className='flex items-center'>
                        <img className='w-14 mr-3' src={Logo} alt="" />
                    </div>
                    <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                        <li>
                            <Link to=''>Terms of Use</Link>
                        </li>
                        <li>
                            <Link to=''>Privacy</Link>
                        </li>
                    </ul>
                </div>
                <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                    <li className='flex flex-col items-center'>
                        <Link className='text-3xl' to=''><FaInstagramSquare/></Link>
                        <Link to=''>Instagram</Link>
                    </li>
                    <li className='flex flex-col items-center'>
                        <Link className='text-3xl' to=''><FaFacebookSquare /></Link>
                        <Link to=''>Facebook</Link>
                    </li>
                    <li className='flex flex-col items-center'>
                        <Link className='text-3xl' to=''><FaTwitterSquare/></Link>
                        <Link to=''>Twitter</Link>
                    </li>
                </ul>
            </div>
            <div className='text-center'>
                <p><small>©All rights received by @Bayezid_Mostafa</small></p>
            </div>
        </footer>
    );
};

export default Footer;