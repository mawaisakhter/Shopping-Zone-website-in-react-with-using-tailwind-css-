import React, { useContext } from "react";
import { ShopContext } from '../context/shop-context';
import { PRODUCTS } from '../../products'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Cart = () => {
    const { cartItems, getTotalCartAmount, delFromCart, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const notify = () => toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                {/* <img className="h-10 w-10 rounded-full" src="" alt=""/> */}
              </div>
              <div className="ml-3 flex-1">
                {/* <p className="text-sm font-medium text-gray-900">
                  Emilia Gates
                </p> */}
                <p className="mt-1 text-sm text-gray-500">
                  Your Shopping Cart is emtpy any product add into shopping cart.
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <Link to="/">Home</Link>
            </button>
          </div>
        </div>
      ));
      
    return (
        <section className=" py-0 sm:py-16 lg:pt-16 lg:pb-6">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center">
                    <h1 className="text-2xl font-semibold text-gray-900">Your Shopping Cart</h1>
                </div>
                <div className="mx-auto mt-8 max-w-2xl md:mt-10">
                    <div className="bg-white shadow-2xl ">
                        <div className="px-4 py-6 sm:px-8 sm:py-10">
                            <div className="flow-root">
                                <ul className="-my-8">
                                    {PRODUCTS.map((product) => {
                                        if (cartItems[product.id] !== 0) {
                                            return (
                                                <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                                                    <div className="shrink-0">
                                                        <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={product.ProductImage} alt="" />
                                                    </div>
                                                    <div className="relative flex flex-1 flex-col justify-between">
                                                        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                                            <div className="pr-8 sm:pr-5">
                                                                <p className="text-base font-semibold text-gray-900">{product.ProductName}</p>
                                                                <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">{product.BrandName}</p>
                                                            </div>
                                                            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                                                <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">{product.Price}</p>

                                                                <div className="sm:order-1">
                                                                    <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                                                        <button onClick={() => removeFromCart(product.id)} className="flex items-center justify-center rounded-l-md  bg-white px-4 transition hover:bg-[#FF6666] hover:text-white"><FaMinus /></button>
                                                                        <input className="flex w-full h-8 items-center justify-center px-2 outline-none uppercase transition bg-white text-lg" value={cartItems[product.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)} />
                                                                        <button onClick={() => addToCart(product.id)} className="flex items-center justify-center rounded-r-md bg-white px-4 transition hover:bg-[#FF6666] hover:text-white"><FaPlus /></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                                            <button type="button" onClick={() => delFromCart(product.id)} className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" className=""></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                            );
                                        }
                                    })}
                                </ul>
                            </div>

                            <div className="mt-6 border-t flex pt-5 items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Total Amount</p>
                                <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">USD</span> {totalAmount}</p>
                            </div>

                            <div className="mt-6 mb-3 text-center">

                                {totalAmount > 0 ? (
                                    <Link to="/payment" type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-[#FF6666] px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-[#f76464]">Checkout
                                        <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </Link>
                                ) : (
                                    <Link to="" onClick={notify} type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-[#FF6666] px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-[#f76464]">Checkout
                                        <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                        <Toaster position="top-center" reverseOrder={false} />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Cart