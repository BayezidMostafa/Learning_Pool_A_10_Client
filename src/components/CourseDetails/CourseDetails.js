import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [14, 10]
};

const CourseDetails = () => {
    const data = useLoaderData()
    const { about, course_name, cover_thumb, duration, price, id } = data;


    return (
        <div ref={ref} className="p-6 shadow-md dark:bg-gray-900 dark:text-gray-100 md:container mx-auto my-5 rounded-md">
            <div className='flex justify-between mb-5 items-center'>
                <p className='font-bold text-xl md:text-4xl'>{course_name}</p>
                <Pdf targetRef={ref} filename="code-example.pdf" options={options} x={.5} y={.5} scale={0.8}>
                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={cover_thumb} alt="" className="block object-cover object-center w-4/4 mx-auto rounded-md dark:bg-gray-500" />
                </div>
                <div>
                    <p>Duration: {duration} Minute</p>
                    <p>Fee: ${price}</p>
                </div>
                <div className="space-y-2">
                    <p>{about}</p>
                    <p></p>
                </div>
            </div>
            <Link to={`/course/checkout/${id}`}><button className='bg-amber-600 rounded p-2 hover:bg-amber-700'>Get premium access</button></Link>
        </div>
    );
};

export default CourseDetails;