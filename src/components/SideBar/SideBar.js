import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({course}) => {
    console.log(course);
    return (
        <div className='mb-4 bg-white bg-opacity-10 hover:bg-opacity-5 duration-200 font-semibold text-white cursor-pointer text-center py-4 rounded'>
            <Link to={`/courses/${course.id}`}>{course.course_name}</Link>
        </div>
    );
};

export default SideBar;