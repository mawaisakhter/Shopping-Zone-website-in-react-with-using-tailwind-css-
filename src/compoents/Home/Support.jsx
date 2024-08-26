import React from 'react';
import { FaTruck, FaClock, FaPhone } from "react-icons/fa6";

const Support = () => {
    return (
        <section className="bg-[#333333] mt-16">
            <div className="grid gap-6 mt-6 md:gap-12 md:grid-cols-3 py-24 md:px-20 text-center">
                <div className="p-6">
                    <FaTruck className='text-[39px] mx-auto mb-2 text-red-500'/>
                    <h4 className="font-semibold text-xl tracking-tight text-white">FREE SHIPPING</h4>
                    <p className="mt-3 text-gray-200 text-lg">
                        Free Home Delivery in 3 working days on minimum spend of Rs. 35000
                    </p>
                </div>
                <div className="p-6">
                    <FaClock className='text-[39px] mx-auto mb-2 text-red-500'/>
                    <h4 className="font-semibold text-xl tracking-tight text-white">07 DAYS MONEY BACK</h4>
                    <p className="mt-3 text-gray-200 text-lg">
                        If you are not satisfied with the product or service, you can get your money back..
                    </p>
                </div>
                <div className="p-6">
                    <FaPhone className='text-[39px] mx-auto mb-2 text-red-500'/>
                    <h4 className="font-semibold text-xl tracking-tight text-white">SUPPORT 24/7</h4>
                    <p className="mt-3 text-gray-200 text-lg">
                        We are always available to assist you. Please contact us for any query.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Support