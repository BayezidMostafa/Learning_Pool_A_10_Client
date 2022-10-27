import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthSource';

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const checkoutData = useLoaderData();
    const {course_name} = checkoutData;
    return (
        <section className="p-6 dark:text-gray-50">
            <form action="" className="container flex flex-col mx-auto space-y-12">
                <p className='text-black text-4xl text-center font-bold'>Checkout Information</p>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <div className="grid grid-cols-6 gap-4 col-span-full">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="name" className="text-base">User's Name</label>
                            <input id="name" type="text" placeholder={user?.displayName} readOnly className="w-full font-semibold py-2 pl-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 mt-1" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="" className="text-base">User's ID</label>
                            <input id="" type="text" placeholder={user?.uid} readOnly className="w-full py-2 pl-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 mt-1" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-base">Email</label>
                            <input id="email" type="email" placeholder={user?.email} readOnly className="w-full py-2 pl-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 mt-1" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="courseName" className="text-base">Selected Course</label>
                            <input id="courseName" type="text" placeholder={course_name} readOnly className="w-full py-2 pl-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 mt-1" />
                        </div>
                        <Link to=''><button type='submit' className='text-white bg-black hover:bg-gray-600 px-7 py-2 font-bold rounded-md'>Confirm</button></Link>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default CheckOut;