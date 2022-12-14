import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthSource';
import Logo from '../../logo.png';
import { Button, Switch, Tooltip } from "@material-tailwind/react";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="bg-white bg-opacity-5">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 back">
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center">
                        <Link
                            to=""
                            aria-label="Learning Pool"
                            title="Learning Pool"
                            className="inline-flex items-center mr-8"
                        >
                            {/* Website Logo Here */}
                            <img className='w-9 mr-1' src={Logo} alt="" />
                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                                Learning Pool
                            </span>
                        </Link>
                        {/* flex removed from here which was added by default */}
                        <ul className="items-center hidden space-x-8 lg:flex">
                            <li>
                                <Link
                                    to="/courses"
                                    aria-label="Our Courses"
                                    title="Our Courses"
                                    className="font-medium hover:text-gray-400 tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/faq"
                                    aria-label="FAQ"
                                    title="FAQ"
                                    className="font-medium hover:text-gray-400 tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog"
                                    aria-label="Blog"
                                    title="Blog"
                                    className="font-medium hover:text-gray-400 tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* flex removed from here which was added by default */}
                    <ul className="items-center hidden space-x-8 lg:flex">

                        {/* Conditional rendering for expanded navbar */}
                        {
                            user?.uid ?
                                <>

                                    <>
                                        {
                                            user?.photoURL ?
                                                <>
                                                    {/* User's Logo Over Here */}
                                                    <Tooltip content={user?.displayName}>
                                                        <img src={user?.photoURL} className="w-12 h-12 rounded-full" alt="" />
                                                    </Tooltip>
                                                </>
                                                :
                                                <>
                                                    {/* Default Logo Here */}
                                                    <Tooltip content={user?.displayName}>
                                                        <div className='bg-white w-12 h-12 rounded-full flex justify-center items-center'><p>User</p></div>
                                                    </Tooltip>
                                                </>

                                        }
                                    </>

                                    <li>
                                        <Link
                                            onClick={handleSignOut}
                                            to="/"
                                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200"
                                            aria-label="Sign out"
                                            title="Sign out"
                                        >
                                            <Button variant="gradient" className='bg-white bg-opacity-10 hover:bg-opacity-5'>Sign out</Button>
                                        </Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <Link
                                            to="/login"
                                            aria-label="Sign in"
                                            title="Sign in"
                                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                        >
                                            <Button variant="gradient" className='bg-white bg-opacity-10 hover:bg-opacity-5'>Sign in</Button>
                                        </Link>
                                    </li>
                                </>
                        }
                        <div>
                            <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-gray-100">
                                <span>Light</span>
                                <span className="relative">
                                    <input id="Toggle1" type="checkbox" className="hidden peer" />
                                    <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-gray-900 border"></div>
                                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                                </span>
                                <span>Dark</span>
                            </label>
                        </div>
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-white" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white bg-opacity-95  border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                to=""
                                                aria-label="Learning Pool"
                                                title="Learning Pool"
                                                className="inline-flex items-center"
                                            >
                                                <img className='w-8' src={Logo} alt="" />
                                                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                    Learning Pool
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <Link
                                                    to="/courses"
                                                    aria-label="Our Courses"
                                                    title="Our Courses"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Courses
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="faq"
                                                    aria-label="FAQ"
                                                    title="FAQ"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    FAQ
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/blog"
                                                    aria-label="Product Blog"
                                                    title="Product Blog"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Blog
                                                </Link>
                                            </li>
                                            <Switch className='bg-gray-300 checked:bg-black' id="auto-update" />
                                            {/* Conditional rendering for Toggle Navbar */}
                                            {
                                                user?.uid ?
                                                    <>
                                                        <>

                                                            <>
                                                                {
                                                                    user?.photoURL ?
                                                                        <>
                                                                            <Tooltip content={user?.displayName}>
                                                                                <img src={user?.photoURL} className="w-12 h-12 rounded-full" alt="" />
                                                                            </Tooltip>
                                                                        </>
                                                                        :
                                                                        <>
                                                                            <Tooltip content={user?.displayName}>
                                                                                <div className='bg-white w-12 h-12 rounded-full flex justify-center items-center'><p>User</p></div>
                                                                            </Tooltip>
                                                                        </>

                                                                }
                                                            </>

                                                            <li>
                                                                <Link
                                                                    onClick={handleSignOut}
                                                                    to="/"
                                                                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200"
                                                                    aria-label="Sign out"
                                                                    title="Sign out"
                                                                >
                                                                    <Button variant="gradient" className='bg-black bg-opacity-20 hover:bg-opacity-5'>Sign out</Button>
                                                                </Link>
                                                            </li>
                                                        </>
                                                    </>
                                                    :
                                                    <>
                                                        <li>
                                                            <Link
                                                                to="/login"
                                                                aria-label="Sign in"
                                                                title="Sign in"
                                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                            >
                                                                Sign in
                                                            </Link>
                                                        </li>
                                                    </>
                                            }

                                        </ul>

                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;