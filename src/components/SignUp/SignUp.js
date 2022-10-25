import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthSource';

const SignUp = () => {
    const { createUser, updateTheUser } = useContext(AuthContext);
    const [error, setError] = useState('')

    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;
        console.log(name, photoURL, email, password, confirm_password);
        if (password !== confirm_password) {
            return;
        }
        createUser(email, password)
        .then(result => {
            const user = result.user
            setError('');
            updateUserInfo(name, photoURL);
            console.log(user);
            form.reset();
        })
        .catch(error => setError(error.message))
    }
    const updateUserInfo = (name, photoURL) => {
        const profile = {
            displayName: name, 
            photoURL: photoURL
        }
        updateTheUser(profile)
        .then(() => {})
        .catch(error => setError(error.message));
    }

    return (
        <div className="w-full max-w-md p-4  shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100 mx-auto sm:rounded-md sm:mt-5 md:mt-10">
            <h2 className="mb-3 text-3xl font-semibold text-center">Create an account</h2>
            <p className="text-sm text-center dark:text-gray-400">Already have an account? <Link to='/login' rel="noopener noreferrer" className="focus:underline hover:underline">Log in</Link>
            </p>
            <form onSubmit={handleForm} action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm">Your name</label>
                        <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="photoURL" className="block text-sm">Photo URL</label>
                        <input type="text" name="photoURL" id="PhotoURL" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="example@mail.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="confirm_password" className="text-sm">Confirm Password</label>
                        <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        <div className="flex justify-between">
                            <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</Link>
                        </div>
                    </div>

                </div>
                <label htmlFor="">{error}</label>
                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Create Account</button>
            </form>
        </div>
    );
};

export default SignUp;