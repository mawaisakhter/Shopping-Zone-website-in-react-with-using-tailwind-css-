import React from 'react'
import { Link } from 'react-router-dom';
import LinkFooter from './LinkFooter';
import { FaPhone, FaEnvelope, FaSquareXTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
const Footer = () => {


  return (
    <footer className="text-white bg-[#333333] px-2 py-1 mt-20 max-w-screen-2xl mx-auto md:px-0">
      <div className="gap-1 justify-between my-10 md:ms-24 md:flex">
        <LinkFooter />
        <div className="flex-1">
          <div className="max-w-xs mx-auto mt-2 md:mt-0">
            <ul className="space-y-1 text-center mt-8 md:text-left">
              <h4 className="text-white text-xl font-medium hover:scale-105 duration-300">Contact Us</h4>
              <li className='hover:scale-105 duration-300'>
                <Link to="" className="text-gray-400 text-base hover:text-white">9 abc Plaza, abcabc Road abc Colony, Okara</Link>
              </li>

              <li className='hover:scale-105 duration-300'>
                <p to="" className="text-gray-400 text-base hover:text-white">
                  <div className='flex'>
                    <FaPhone className='mt-1 mr-1'/> +923001262260
                  </div>
                  </p>
              </li>
              <li className='hover:scale-105 duration-300'>
                <p to="" className="text-gray-400 text-base hover:text-white">
                  <div className='flex'>
                  <FaEnvelope className='mt-1 mr-2' />support@mawaisakhter0@gmail.com
                  </div>
                </p>
              </li>
            </ul>
            <div className="mt-6 sm:mt-0 ">
              <ul className="flex items-center space-x-4 mt-6">
                <li className="w-8 h-8 flex items-center justify-center hover:border-white border-2 border-neutral-500 bg-neutral-700">
                  <Link to="#">
                  <FaSquareXTwitter className='text-xl hover:text-white text-neutral-400' />
                  </Link>
                </li>
                <li className="w-8 h-8 flex items-center justify-center hover:border-white border-2 border-neutral-500 bg-neutral-700">
                  <Link to="#">
                  <FaFacebookF className='text-xl hover:text-white text-neutral-400' />
                  </Link>
                </li>
                <li className="w-8 h-8 flex items-center justify-center hover:border-white border-2 border-neutral-500 bg-neutral-700">
                  <Link to="#">
                  <FaLinkedinIn className='text-xl hover:text-white text-neutral-400' />
                  </Link>
                </li>
                <li className="w-8 h-8 flex items-center justify-center hover:border-white border-2 border-neutral-500 bg-neutral-700">
                  <Link to="#">
                  <FaYoutube className='text-xl hover:text-white text-neutral-400' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-500 items-center justify-between sm:flex">
        <div className="pt-2 md:ms-20 text-lg text-gray-400">
          Copyright &copy; 2023 Shopping Zone All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer


