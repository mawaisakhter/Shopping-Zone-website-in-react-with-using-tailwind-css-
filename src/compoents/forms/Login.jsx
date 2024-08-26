import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <form className='max-w-full '>
                <div
                    className="mx-auto mt-10 mb-20 w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
                    <div className="w-full">
                        <div className="text-center mb-5">
                            <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
                            <p className="mt-5 text-gray-500">Sign in below to access your account</p>
                        </div>
                        <div className="mt-5">
                            <form action="">
                                <div className="relative mt-6">
                                    <input type="email" name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                    <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                                </div>
                                <div className="relative mt-6">
                                    <input type="pswd" name="pswd" id="pswd" placeholder="Password" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                    <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                                </div>

                                <div className="my-6 px-2 md:px-0">
                                    <button type="submit" className="w-full rounded-md bg-blue-700 py-3 text-white hover:scale-105 duration-300 focus:outline-none">Sign in</button>
                                </div>
                                <div className="text-center text-md text-gray-500 mb-5 hover:scale-110 duration-300">
                                    <Link to="/Forgotpswd"className="font-semibold text-gray-600 hover:underline">Forgot your password?
                                    </Link>.
                                </div>
                                <p className="text-center text-sm text-gray-500 hover:scale-110 duration-300">Don&#x27;t have an account yet?
                                    <Link to="/RegAccount"
                                        className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign up
                                    </Link>.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login