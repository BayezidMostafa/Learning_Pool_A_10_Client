import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logo.png';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="px-4 py-8 bg-black text-white bg-opacity-60">
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
                    <li className=''>
                        <a className='flex flex-col items-center' target='_blank' href="https://www.instagram.com/bayezid951.321/" rel='noreferrer'>
                            <p className='text-3xl'><FaInstagramSquare /></p>
                            <p>Instagram</p>
                        </a>
                    </li>
                    <li className=''>
                        <a className='flex flex-col items-center' target='_blank' href="https://www.facebook.com/dev.bayezid" rel='noreferrer'>
                            <p className='text-3xl'><FaFacebookSquare /></p>
                            <p to=''>Facebook</p>
                        </a>
                    </li>
                    <li className=''>
                        <a className='flex flex-col items-center' href="https://twitter.com/BayezidMostafa" rel='noreferrer'>
                            <p className='text-3xl'><FaTwitterSquare /></p>
                            <p>Twitter</p>
                        </a>
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