import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../home-banner.png'

const Home = () => {
    return (
        <section>
            <div className="bg-white bg-opacity-5">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-white">
                    <h1 style={{ textShadow: "2px 2px 10px black" }} className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-white">Welcome!</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-white">We are really happy to have you! We are here to make your online learning experience exceptional! </p>
                    <div className="flex gap-5 flex-wrap justify-center">
                        <Link to='/courses'><Button ripple={true} variant="gradient" className='bg-white bg-opacity-10 hover:bg-opacity-5 py-4'>Get Started</Button></Link>
                        <Button ripple={true} variant="gradient" className='bg-white bg-opacity-10 hover:bg-opacity-5 py-4'>Learn More</Button>
                    </div>
                </div>
            </div>
            <img style={{ boxShadow: '0px 0px 7px black' }} src={Banner} alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" />
        </section>
    );
};

export default Home;