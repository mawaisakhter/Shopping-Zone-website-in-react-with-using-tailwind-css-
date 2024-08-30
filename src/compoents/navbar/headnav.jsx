import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaCartPlus  } from "react-icons/fa6";

const Headnav = () => {
    return (
        <>
            <nav className="bg-white text-black border z-20 fixed top-0 left-0 right-0 px-0 md:px-4 flex items-center justify-between"><FaEnvelope className='md:ms-20 hidden md:visible'/>
                <Link to="/" className="px-2 border-r-2 hidden md:block">support@shoppingstore.com</Link>
                <FaPhone className='ml-2'/>
                <h1 className='mr-auto border-r-2 px-2'>+923001262260</h1>
                <div className="flex items-center">
                    <Link to="/Login" className="text-base border-x-2 px-2">Login</Link>
                    <Link to="/RegAccount" className="text-base border-r-2 px-2 ">Signup</Link>
                </div>
            </nav>
            <nav className="bg-white text-black z-20 py-1 px-4 border flex items-center justify-between sticky top-6">
            <Link to="/" className='font-normal py-1 md:ms-20 text-xl hover:scale-110 duration-300'>
                   <img className='h-[80px] w-[190px] ' src='/images/logo2.png' />
                   {/* <p className='text-base'>Your Shopping Partner</p> */}
                </Link>
                <div className="flex items-center ml-9 hover:scale-105 duration-300">
                    <Link to="/cart" className="text-sm px-4 py-2"> Shopping Cart</Link>
                    <FaCartPlus/>
                </div>
            </nav>
        </>
    )
}

export default Headnav
