import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import SideBar from '../SideBar/SideBar';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='flex'>
            <div className='h-20 w-[20%]'>
                {
                    courses.map(singleCourseData => <SideBar key={singleCourseData.id} singleCourseData={singleCourseData} />)
                }
            </div>
            <div className='w-[100%] grid ml-4 md:grid-cols-2 lg:grid-cols-3 gap-7 md:px-10 md:mt-10'>
                {
                    courses.map(singleCourse => <Course key={singleCourse.id} singleCourse={singleCourse} />)
                }
            </div>
        </div>
    );
};

export default Courses;