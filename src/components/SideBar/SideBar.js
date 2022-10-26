import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ singleCourseData }) => {
    const {course_name, id} = singleCourseData
    return (
        <div className="flex flex-col h-full p-5 w-56 dark:bg-gray-900 dark:text-gray-100">
            <Link to={`/courses/${id}`} className='bg-gray-800 py-2 hover:bg-gray-700 text-center rounded'>{course_name}</Link>
        </div>
    );
};

export default SideBar;