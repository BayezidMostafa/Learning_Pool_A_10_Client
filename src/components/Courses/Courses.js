import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import SideBar from '../SideBar/SideBar';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='flex'>
            <div className='w-[10%]'>
                <SideBar courses={courses} />
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:px-10 md:mt-10 container mx-auto'>
                {
                    courses.map(singleCourse => <Course key={singleCourse.id} singleCourse={singleCourse} />)
                }
            </div>
        </div>
    );
};

export default Courses;