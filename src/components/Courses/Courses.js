import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import SideBar from '../SideBar/SideBar';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 container mx-auto gap-8 my-10'>
            <div className='md:col-span-1'>
                {
                    courses.map(course => <SideBar key={course.id} course={course}/>)
                }
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:col-span-3'>
                {
                    courses.map(singleCourse => <Course key={singleCourse.id} singleCourse={singleCourse} />)
                }
            </div>
        </div>
    );
};

export default Courses;