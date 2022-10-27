import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ singleCourse }) => {
    const { course_name, id, img, classes, duration } = singleCourse;
    return (
        <div className='bg-white bg-opacity-10 rounded-md text-white'>
            <img style={{borderRadius: '5px 5px 0 0'}} className='' src={img} alt="" />
            <div className='py-5 px-5'>
                <p className='font-bold md:text-2xl'>{course_name}</p>
                <div className='flex justify-between mt-5'>
                    <p>Class: {classes}</p>
                    <p>Duration: {duration} Min</p>
                </div>
            </div>
            <div className='text-center '>
                <Link to={`/courses/${id}`}><Button variant='text' type="form" className="px-10 py-3 font-semibold  rounded-md bg-white bg-opacity-20 text-white mb-5">Course Details</Button></Link>
            </div>
        </div>
    );
};

export default Course;