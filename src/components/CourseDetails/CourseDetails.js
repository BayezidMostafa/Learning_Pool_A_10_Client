import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { FaDownload, FaHandPointRight } from "react-icons/fa";


const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [14, 10]
};

const CourseDetails = () => {
    const data = useLoaderData()
    const { about, course_name, cover_thumb, duration: time, mentor, price, id } = data;


    return (
        <div ref={ref} className="p-6 shadow-md bg-white bg-opacity-10 text-gray-100 md:container mx-auto my-5 rounded-md">
            <div className='flex justify-between mb-5 items-center'>
                <p className='font-bold text-xl md:text-4xl'>{course_name}</p>
                <Pdf targetRef={ref} filename="code-example.pdf" options={options} x={.5} y={.5} scale={0.8}>
                    {({ toPdf }) => <FaDownload className='cursor-pointer text-2xl' onClick={toPdf}>Generate Pdf</FaDownload>}
                </Pdf>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={cover_thumb} alt="" className="block object-cover object-center w-4/4 mx-auto rounded-md bg-gray-500" />
                </div>
                <div>
                    <div>
                        <p className='font-semibold text-xl flex items-center gap-2'><FaHandPointRight className='inline text-orange-500' /> Duration: {time} Minute</p>
                        <p className='font-semibold text-xl flex items-center gap-2'><FaHandPointRight className='inline text-orange-500' /> Fee: ${price}</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="space-y-2 flex items-center">
                    <p className='font-semibold text-xl items-center gap-2'><FaHandPointRight className='text-xl inline text-orange-500' /> Course Information: {about}</p>
                </div>
            </div>
            <div className='flex justify-between items-center mt-5'>
                <Link to={`/course/checkout/${id}`}><button className='bg-amber-600 rounded p-2 mt-4 block hover:bg-amber-700'>Get premium access</button></Link>
                <div className='flex items-center'>
                    <img className='w-14 rounded-full mr-2' src={mentor.mentor_img} alt="" />
                    <div>
                        <p className='font-semibold'>Mentor: {mentor?.name}</p>
                        <p className='font-semibold'>{mentor?.profession}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;