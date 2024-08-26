import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shop-context';
import { PRODUCTS } from '../../products'
import { Toaster } from 'react-hot-toast';

const ProductPage = () => {
    const { addToCart } = useContext(ShopContext);
    // const notify = () => toast('Here is your toast.');
    const [images, setImages] = useState(PRODUCTS)
    // const [amount, setAmount] = useState(1);
    let { pid } = useParams()
    console.log(PRODUCTS);
    // console.log(pid)
    return (
        <div className='flex flex-col justify-between lg:flex-row gap-10 md:gap-16 lg:items-center px-6 md:px-0 my-16'>
            <div className='flex flex-col lg:w-1/12'></div>
            {images.filter(awais => {
                // console.log(pid)
                return awais.id == pid;
            }).map(item => {
                // console.log(item)
                const [activeImg, setActiveImage] = useState(item.img1)
                return (
                    <>
                        <div className='flex flex-col gap-8 lg:w-5/12'>
                            <img src={activeImg} alt="" className='w-64 md:w-80 h-64 md:h-80 mx-auto aspect-square object-cover rounded-xl' />
                            <div className='flex flex-row justify-between gap-x-4 h-24'>
                                <img src={item.img1} alt="" className='w-16 md:w-24 h-16 md:h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(item.img1)} />
                                <img src={item.img2} alt="" className='w-16 md:w-24 h-16 md:h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(item.img2)} />
                                <img src={item.img3} alt="" className='w-16 md:w-24 h-16 md:h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(item.img3)} />
                                <img src={item.img4} alt="" className='w-16 md:w-24 h-16 md:h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(item.img4)} />
                            </div>
                        </div>
                        {/* ABOUT */}
                        <div className='flex flex-col gap-4 lg:w-5/12'>
                            <div>
                                <div className=' text-violet-600 font-semibold uppercase'></div>
                                <span className=' text-violet-600 font-semibold uppercase'>{item.BrandName}</span>
                                <h1 className='text-3xl font-bold'>{item.ProductName}</h1>
                            </div>
                            <p className='text-gray-700 text-justify'>
                            {item.Description}
                            </p>
                            <h6 className='text-2xl font-semibold'>${item.Price}</h6>
                            <del>
                                <h6 className='text-xl font-semibold'>${item.OldPrice}</h6>
                            </del>
                            <div className='flex flex-row items-center gap-12'>
                                <button onClick={() => addToCart(item.id)}  className='bg-[#FF6666] hover:bg-[#e45f5f] text-white font-semibold py-3 px-6 md:px-16 rounded-xl h-full'>Add to Cart</button>
                                <Toaster  position="bottom-right" reverseOrder={false} />
                            </div>
                        </div>
                        
                    </>
                );
                
            })}
            <div className='flex flex-col lg:w-1/12'></div>
        </div>
    )
    
}

export default ProductPage