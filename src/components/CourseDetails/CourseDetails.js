import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const data = useLoaderData()
    const { about, course_name, mentor, cover_thumb, duration, price } = data;
    console.log(data);
    return (
        <div className="p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 md:container mx-auto">
            <p className='text-4xl'>{course_name}</p>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={cover_thumb} alt="" className="block object-cover object-center w-3/4 mx-auto rounded-md dark:bg-gray-500" />
                    <div className="flex items-center text-xs">
                        <span>6 min ago</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <Link rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-xl font-semibold dark:text-violet-400">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                    </Link>
                    <p className="leading-snug dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;