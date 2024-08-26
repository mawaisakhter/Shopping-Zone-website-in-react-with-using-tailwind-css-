import React from 'react'
import { Link } from 'react-router-dom'

const RegAccount = () => {
    return (
        <>
            <form className='max-w-full '>
                <div
                    className="mx-auto mt-10 mb-20 w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
                    <div className="w-full">
                        <div className="text-center mb-5">
                            <h1 className="text-3xl font-semibold text-gray-900">Create an Account!</h1>
                        </div>
                        <div className="mt-5">
                            <form action="">
                                <div className='flex gap-6 grid-cols-2'>
                                    <div className="relative mt-3">
                                        <input type="email" name="fname" id="fname" placeholder="First Name" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                        <label for="text" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">First Name</label>
                                    </div>
                                    <div className="relative mt-3">
                                        <input type="text" name="lname" id="lname" placeholder="Last Name" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                        <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Last Name</label>
                                    </div>
                                </div>
                                <div className="relative mt-5">
                                    <input type="email" name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                    <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                                </div>
                                <div className="relative mt-5">
                                    <input type="password" name="pswd" id="pswd" placeholder="Enter Password" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                    <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Enter Password</label>
                                </div>
                                <div className="relative mt-5">
                                    <input type="password" name="confirmed_pswd" id="confirmed_pswd" placeholder="Confirmed Password" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                    <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Confirmed Password</label>
                                </div>
                                <div className="my-5 pt-3 px-2 md:px-0">
                                    <button type="submit" className="w-full rounded-md bg-blue-700 py-3 text-white hover:scale-105 duration-300 focus:outline-none">Register Account</button>
                                </div>
                                <p className="text-center text-sm text-gray-500 hover:scale-110 duration-300">Don&#x27;t have an account yet?
                                    <Link to="/Login"
                                        className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none ">Log in
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

export default RegAccount