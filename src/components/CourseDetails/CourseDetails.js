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
    console.log(mentor);


    return (
        <div ref={ref} className="p-6 shadow-md dark:bg-gray-900 dark:text-gray-100 md:container mx-auto my-5 rounded-md">
            <div className='flex justify-between mb-5 items-center'>
                <p className='font-bold text-xl md:text-4xl'>{course_name}</p>
                <Pdf targetRef={ref} filename="code-example.pdf" options={options} x={.5} y={.5} scale={0.8}>
                    {({ toPdf }) => <FaDownload className='cursor-pointer text-2xl' onClick={toPdf}>Generate Pdf</FaDownload>}
                </Pdf>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={cover_thumb} alt="" className="block object-cover object-center w-4/4 mx-auto rounded-md dark:bg-gray-500" />
                </div>
                <div>
                    <div>
                        <p className='font-semibold text-xl flex items-center gap-2'><FaHandPointRight className='inline' /> Duration: {time} Minute</p>
                        <p className='font-semibold text-xl flex items-center gap-2'><FaHandPointRight className='inline' /> Fee: ${price}</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="space-y-2">
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                        <div className='md:col-span-2 border-neutral-800 border rounded-md p-2'><p>{about}</p></div>
                        <div className='bg-gray-200 bg-opacity-5 rounded-md flex'>
                            <div>
                                <p>{mentor.name}</p>
                                <p>{mentor.gender}</p>
                                <p>{mentor.primary_language}</p>
                                <p>{mentor.profession}</p>
                            </div>
                            <div>
                                <img className='w-1/5 md:w-2/6 lg:w-1/6 mt-2 mx-auto rounded-full' src={mentor.mentor_img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={`/course/checkout/${id}`}><button className='bg-amber-600 rounded p-2 mt-4 hover:bg-amber-700'>Get premium access</button></Link>
        </div>
    );
};

export default CourseDetails;