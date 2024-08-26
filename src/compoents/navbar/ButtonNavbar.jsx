import React from "react";
import { Link } from "react-router-dom";

const ButtonNavbar = () => {
    return (
        <div className="flex-1 gap-x-3 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0 mb-8 md:mb-0">
            <Link to="/Login"
                className="flex items-center justify-center gap-x-1 mx-10 md:mx-0 py-2 px-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded hover:scale-110 duration-300">
                Log in
            </Link>
            <Link to="/RegAccount"
                className="flex items-center justify-center gap-x-1 mx-10 md:mx-0 py-2 px-5 bg-blue-500 hover:bg-blue-600 text-white font-semibol border-blue-700  hover:text-white border rounded hover:scale-110 duration-300">
                Sign Up
            </Link>
        </div>
    );
};

export default ButtonNavbar;
