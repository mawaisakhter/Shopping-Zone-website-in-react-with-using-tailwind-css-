import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import ButtonNavbar from "./ButtonNavbar";
import Headnav from "./headnav";

const Navbar = () => {
  const [state, setState] = useState();

  const navigation = [
    { title: "Home", path: "/" },
    { title: "ProductFilter", path: "/ProductFilter" },
    { title: "Technology", path: "/Technology" },
    { title: "Fashion", path: "/Fashion" },
    { title: "Grocery", path: "/Grocery" },
    { title: "Contact", path: "/contact" },
    { title: "About", path: "/about" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, [])

  return (
    <>
    <Headnav />
    <nav className="bg-[#FF6666] md:text-sm z-10 sticky mb-0 top-[120px] left-0 right-0">
        <div className="gap-x-14 items-center max-w-screen-2xl mx-auto md:py-3 px-4 md:flex md:px-8 ">
            <div className="flex items-center justify-between py-5">
                <Link to="/" className='font-normal text-2xl hover:scale-110 duration-300'>
                   {/* Shopping Store */}
                </Link>
                <div className="md:hidden">
                    <button className="menu-btn text-gray-500 hover:text-gray-800 hover:scale-125 duration-300"
                        onClick={() => setState(!state)}
                    >
                        {
                            state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white border hover:border-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )
                        }
                    </button>
                </div>
            </div>
            <div className={`flex-1 items-center mt-3 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                <ul className="justify-center items-center space-y-6 mb-6 md:ms-10 pb-7 md:pb-0 md:mb-0 md:flex md:space-x-6 md:space-y-0">
                    {
                        navigation.map((item, idx) => {
                            return (
                                <li key={idx} className="text-white font-normal text-lg px-10 md:px-0 hover:text-black">
                                    <Link to={item.path} className="block hover:scale-125 duration-300 text-center">{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* <ButtonNavbar /> */}
            </div>
        </div>
    </nav>
    </>
  );
};

export default Navbar;
