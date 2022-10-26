import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BiDownload } from "react-icons/bi";

const CourseDetails = () => {
    const data = useLoaderData()
    const { about, course_name, mentor, cover_thumb, duration, price } = data;
    console.log(data);

    const downloadHandler = () => {
        console.log('clicked');
    }

    return (
        <div className="p-6 shadow-md dark:bg-gray-900 dark:text-gray-100 md:container mx-auto my-5 rounded-md">
            <div className='flex justify-between mb-5 items-center'>
                <p className='font-bold text-xl md:text-4xl'>{course_name}</p>
                <BiDownload onClick={downloadHandler} className='text-3xl cursor-pointer' />
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={cover_thumb} alt="" className="block object-cover object-center w-4/4 mx-auto rounded-md dark:bg-gray-500" />
                </div>
                <div>
                    <p>Duration: {duration} Minute</p>
                    <p>Fee: ${price}</p>
                </div>
                <div className="space-y-2">
                    <p>{about}</p>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;