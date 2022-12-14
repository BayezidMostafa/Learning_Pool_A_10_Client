import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { RotateLoader } from 'react-spinners';
import Course from '../Course/Course';
import SideBar from '../SideBar/SideBar';

const Courses = () => {
    const [loading, setLoading] = useState(false)
    const [courses, setCourses] = useState([])
    
    useEffect(() => {
        setLoading(true)
        fetch('https://learning-pool-server-site.vercel.app/courses')
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            setCourses(data)
        })
        .catch(err => {
            console.error(err)
        })
    }, [])

    if (loading) {
        return (
            <div className='min-h-[80vh] flex justify-center items-center'>
                <RotateLoader color="#ffffff" />
            </div>
        )
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-4 container mx-auto gap-8 my-10'>
            <div className='md:col-span-1'>
                {
                    courses.map(course => <SideBar key={course.id} course={course} />)
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