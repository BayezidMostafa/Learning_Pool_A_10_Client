import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretSquareRight } from "react-icons/fa";

const SideBar = ({ courses }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className=''>
            <div style={{borderRadius: '0 0 5px 5px '}} className={`bg-purple-700 h-screen duration-500 p-5 pt-5 ${open ? "w-64" : "w-20"} `}>
                <FaCaretSquareRight className={`absolute -right-4 md:-right-8 text-purple-700 top-9 cursor-pointer text-xl md:text-4xl ${open && "rotate-180 duration-700 ease-in-out"}` } onClick={() => setOpen(!open)} />
                <div className='mt-16'>
                    {
                        courses.map(course => <div key={course.id}>
                            <div className='mb-7 bg-white rounded p-1'>
                                <Link className='mr-3' to={`/courses/${course.id}`}><img className='inline border-gray-600 border-2 rounded p-1' src={course.logo} alt="" /></Link>
                                {
                                    open ? <Link to={`/courses/${course.id}`}><p className='inline'>{course.course_name}</p></Link> : ''
                                }
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default SideBar;