import { useState } from "react";

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="">
            <div className="border rounded shadow-sm ">
                <button
                    type="button"
                    aria-label="Open item"
                    title="Open item"
                    className="flex items-center justify-between w-full p-4 focus:outline-none "
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
                    <div className="p-4 pt-0 ">
                        <p className="text-gray-700">{children}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 my-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="flex flex-col mb-16 sm:text-center">
                    <p className="text-4xl font-bold">Four Important Q&A</p>
                </div>
                <div className="space-y-4">
                    <Item className="" title="what is cors?">
                        CORS stands for Cross Origin Resource Sharing. It is an HTTP-header based mechanism that allows a server to indicate any origins other than its own from which a browser should permit loading resources. For security reasons, browsers restrict cross origin HTTP requests initiated from scripts. For an example, XMLHttpRequest and the Fetch API follow the same origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from. Unless the response from other origins includes the right CORS headers.
                    </Item>
                    <Item className="" title="Why are you using firebase? What other options do you have to implement authentication?">
                        Firebase is very useful for a developer to develop their web applications. I am using firebase to use an authentication system for my website which is an important option for a website/web application. We can trust firebase to store our user data safely. Also, we can deploy/host our web application to the firebase. Some other options to get an authentication system without firebase: 1. Heroku, 2. Back4app, 3. Pubnub, 4. Backendless etc
                    </Item>
                    <Item className="" title="How does the private route work?">
                        The private route component renders the child component. If the user logged in then the child component will be rendered. If the user is not logged in, it will redirect the user to the log-in panel with the return URL passed in the location state property
                    </Item>
                    <Item className="" title="What is Node? How does Node work?">
                        Node.js is an open-source backend javascript runtime environment.
                        It is a used as backend service where javascript works on the server side of the application. This way javascript is used on both the front and backend. Node.js works on the chrome v8 engine which is convert javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </Item>
                </div>
            </div>
        </div>
    );
};

export default Blog;