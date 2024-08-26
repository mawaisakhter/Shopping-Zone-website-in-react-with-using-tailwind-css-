import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/shop-context';
// import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

const Payment = () => {
    const { getTotalCartAmount } = useContext(ShopContext);
    let totalAmount = getTotalCartAmount();
    const notify = () => toast.success('Here is your toast.');
    // const notifyfill = () => toast('Here is your okat.');
    return (
        <>
            <div className="w-full max-w-2xl mx-auto p-8 mt-10">
                <div className="bg-white rounded-lg p-6 shadow-xl ring-1 ring-gray-900/5">
                    <form>
                        <h2 className="text-2xl text-center font-medium mt-3 ">Shipping Information</h2>
                        <div className="grid grid-cols-2 gap-6">
                            <div class="col-span-2 sm:col-span-1 relative mt-6">
                                <input required type="text" name="Address" id="Address" placeholder="Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Address</label>
                            </div>
                            <div class="col-span-2 sm:col-span-1 relative mt-6">
                                <input required type="text" name="City" id="City" placeholder="City" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">City</label>
                            </div>
                            <div class="col-span-2 sm:col-span-1 relative mt-6">
                                <input required type="text" name="state" id="state" placeholder="State" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                <label for="text" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">State</label>
                            </div>
                            <div class="col-span-2 sm:col-span-1 relative mt-6">
                                <input required type="text" name="ZIPCode" id="ZIPCode" placeholder="ZIP Code" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">ZIP Code</label>
                            </div>
                            <div class="col-span-2 sm:col-span-1 relative mt-6">
                                <input required type="text" name="ContactNo" id="ContactNo" placeholder="Contact No" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Contact No</label>
                            </div>
                            <div class="col-span-2 sm:col-span-1 relative mt-6">
                                <input required type="text" name="PhoneNo" id="PhoneNo" placeholder="Phone No" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Phone No</label>
                            </div>
                        </div>
                        <h2 className="text-2xl text-center font-medium mt-10 ">Payment Information</h2>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="col-span-2 sm:col-span-1 relative mt-6">
                                <input required type="text" name="cardHolderName" id="cardHolderName" placeholder="cardHolderName" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">CardHolder Name</label>
                            </div>
                            <div className="col-span-2 sm:col-span-1 relative mt-6">
                                <input required type="text" name="CarNumber" id="CarNumber" placeholder="CarNumber" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Card Number</label>
                            </div>
                            <div className="col-span-2 sm:col-span-1 relative mt-6">
                                <input required type="date" name="expiry" id="expiry" placeholder="Expiry" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                <label for="text" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Expiry</label>
                            </div>
                            <div className="col-span-2 sm:col-span-1 relative mt-6">
                                <input required type="text" name="cvv" id="cvv" placeholder="CVV" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA"/>
                                <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">CVV</label>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <p className="mt-5 text-gray-600 text-lg">Pyament Amount: ${totalAmount}</p>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                {totalAmount >= 20000 ? (
                                    <p className="mt-5 text-gray-600 text text-lg">Free Shipping!</p>
                                ) : (
                                    <p className="mt-5 text-gray-600 text text-lg">Shipping Charge: $1000</p>
                                    
                                ) }
                            </div>
                            
                        </div>

                        <div className="mt-10 mb-5 px-5">
                            <button onClick={notify} type="submit" className="w-full rounded-md font-bold text-xl bg-[#FF6666] hover:bg-[#FF6653]  py-3 text-white hover:scale-105 duration-300 focus:outline-none">Pay
                            </button>                                
                            <Toaster  position="bottom-right" reverseOrder={false} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Payment