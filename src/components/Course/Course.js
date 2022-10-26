import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ singleCourse }) => {
    console.log(singleCourse);
    const { course_name, id, img, classes, duration } = singleCourse;
    return (
        <div className='border bg-stone-200 rounded-md'>
            <img style={{borderRadius: '5px 5px 0 0'}} className='' src={img} alt="" />
            <div className='py-5 px-5'>
                <p className='text-3xl'>{course_name}</p>
                <div className='flex justify-between'>
                    <p>Class: {classes}</p>
                    <p>Duration: {duration} Min</p>
                </div>
            </div>
            <div className='text-center'>
                <Link to={`/courses/${id}`}><button className='bg-gray-800 hover:bg-gray-700 duration-100 text-white w-[93%] my-3 py-2 rounded font-bold text-xl'>Get Info</button></Link>
            </div>
        </div>
    );
};

export default Course;