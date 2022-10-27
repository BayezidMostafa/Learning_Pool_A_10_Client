import { useState } from "react";

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded shadow-sm">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                    <svg
                        viewBox="0 0 24 24"
                        className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                            }`}
                    >
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            points="2,7 12,17 22,7"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="flex flex-col mb-16 sm:text-center">
                    <span style={{textShadow: "2px 2px 10px black"}} className="text-4xl text-white font-bold">Some Common Question & Answer</span>
                </div>
                <div className="space-y-4 text-white">
                    <Item title="Why you should choose us?">
                        <span className="text-white">Selection of the right institute usually leads to the best career opportunity. As a notable fact, professional programming is much important, that's why we should choose the right one.</span>
                    </Item>
                    <Item title="How much we care about our students?">
                        <span className="text-white">Great teachers care about their students. They want them to succeed and are committed to helping them achieve their goals. Moreover, teachers care about their student's happiness, well-being and life beyond the classroom. This much we care about them!</span>
                    </Item>
                    <Item title="Do we have physical classroom?">
                        <span className="text-white">Yes We have. But, It's under development. We will be able to start from there after few months.</span>
                    </Item>
                    <Item title="Do we have refund policy?">
                        <span className="text-white">Yes. We have refund policy on some terms and conditions.</span>
                    </Item>
                    <Item title="Who can Enroll our courses?">
                        <span className="text-white">Every one can Enroll our courses. But, A curious mind and also a hard worker person will get the best output from this course. So Dedication is way more important!</span>
                    </Item>
                    <Item title="How much time we take to complete these course?">
                        <span className="text-white">It depends on the course topic. Usually We took 6-8 month. (It's an overview from all type of course in our website)</span>
                    </Item>
                    <Item title="Will we get job after completing any course from your Institute?">
                        <span className="text-white">We can't guarantee it. It completely depends on your dedication. We will try to help you the most we can provide from our side.</span>
                    </Item>
                    <Item title="How much You will learn about programming from our course?">
                        <span className="text-white">You can learn from the beginning to advanced. But It's not possible to teach all the lesson of the programming in this much time.</span>
                    </Item>
                </div>
            </div>
        </div>
    );
};

export default FAQ;