import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from '../../products'
import { ShopContext } from '../context/shop-context'
const Products = () => {
    const { addToCart } = useContext(ShopContext);
    const [buttonValues] = useState({
        button1: "Technology",
    });
    const [filteredData, setFilteredData] = useState([]);

    const filterData = (value) => {
        const filtered = PRODUCTS.filter((item) => item.value === value);
        setFilteredData(filtered);
    };

    useEffect(() => {
        filterData(buttonValues.button1);
    }, [buttonValues]);

    const handleButtonClick = (value) => {
        filterData(value);
    };

    return (
        <>
        <div class="mb-4 flex items-center justify-center mt-10">
            <ul class="flex flex-wrap -mb-px text-xl md:text-2xl font-medium text-center " id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li class="me-2" role="presentation">
                    <button class="inline-block p-4  hover:border-b-2 rounded-t-lg hover:text-gray-600 hover:border-[#FF6666] " type="button" role="tab" onClick={() => handleButtonClick('Technology')}>Technology</button>
                </li>
                <li class="me-2" role="presentation">
                    <button class="inline-block p-4 hover:border-b-2 rounded-t-lg hover:text-gray-600 hover:border-[#FF6666] " type="button" role="tab" onClick={() => handleButtonClick('Fashion')} >Fashion</button>
                </li>
                <li class="me-2" role="presentation">
                    <button class="inline-block p-4 hover:border-b-2 rounded-t-lg hover:text-gray-600 hover:border-[#FF6666] " type="button" role="tab" onClick={() => handleButtonClick('Grocery')}>Grocery</button>
                </li>
            </ul>
        </div>

        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 md:gap-x-20 mt-10 mb-5">
            {filteredData.map((item, idx) => (
                <div className="w-60 bg-white shadow-md rounded-xl duration-500 z-0 hover:scale-105 hover:shadow-xl">
                    <Link to={`/ProductPage/${item.id}`}>
                        <img key={idx} src={item.ProductImage} alt="Product" className="h-72 w-60 object-cover rounded-t-xl" />
                    </Link>
                        <div className="px-4 py-3 ">
                            <span className="text-gray-400 mr-3 uppercase text-xs flex">{item.BrandName}</span>
                            <p className="text-lg font-bold text-black truncate mt-2 capitalize flex">{item.ProductName}</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">${item.Price}</p>
                                <del>
                                    <p className="text-sm text-gray-600 cursor-auto ml-2">${item.OldPrice}</p>
                                </del>
                                <div className="ml-auto hover:scale-105 duration-200" onClick={() => addToCart(item.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                        fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                        <path
                                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>                    
                </div>
            ))
            }
        </section>
    </>
    );
};

export default Products;
