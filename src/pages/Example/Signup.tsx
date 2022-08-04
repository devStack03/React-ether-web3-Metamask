import React, { useState, useRef } from 'react'
import { Navigate, Link } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/solid'
import userService from '../../services/user.service';

const Signup = () => {

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });   

    const handleSubmit = ((event: any) => {
        event.preventDefault();

        if (inputs.confirmPassword === inputs.password) {
            userService.create(inputs).then((data:any) => {
                console.log(data);
                if (data.success === 1) {
                    <Navigate to="/login" replace={true} />
                }
            });
        } else {

        }
    });

    const handleChange = (event: any) => {
        const value = event.target.value;
        const name = event.target.name;

        setInputs(values => ({...values, [name]: value}));
    };

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create Account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email-address" className="text-sm m-1">
                                Email
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                value={inputs.email || ''}
                                onChange={handleChange}
                            />

                        </div>
                        <div className="mt-4">
                            <label htmlFor="password" className="text-sm m-1">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none relative block w-full
                                 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder=""
                                value={inputs.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="confirm-password" className="text-sm m-1">
                                Confirm Password
                            </label>
                            <input
                                id="confirm-password"
                                name="confirmPassword"
                                type="password"
                                required
                                className="appearance-none relative block w-full
                                 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder=""
                                value={inputs.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-end">
                        <div className="text-sm">
                            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Sign In to your account?</Link>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;