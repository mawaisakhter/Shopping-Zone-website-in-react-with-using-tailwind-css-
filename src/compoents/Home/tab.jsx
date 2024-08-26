import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../products'

const Tab = () => {

    const [buttonValues] = useState({
        button1: 'P',
    });
    const [filteredData, setFilteredData] = useState([]);

    const filterData = (value) => {
        const filtered = PRODUCTS.filter(item => item.status === value);
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
            <div className="mb-4 flex items-center justify-center mt-2">
                <ul className="flex flex-wrap -mb-px text-xl md:text-2xl font-medium text-center " id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                    <li className="me-2" role="presentation">
                        <button className="inline-block p-4 hover:border-b-2 rounded-t-lg hover:text-gray-600 hover:border-[#FF6666]" type="button" role="tab" onClick={() => handleButtonClick('P')}>POPULAR</button>
                    </li>
                    <li class="me-2" role="presentation">
                        <button className="inline-block p-4 hover:border-b-2 rounded-t-lg hover:text-gray-600 hover:border-[#FF6666]" type="button" role="tab" onClick={() => handleButtonClick('F')}>FEATURED</button>
                    </li>
                    <li class="me-2" role="presentation">
                        <button className="inline-block p-4 hover:border-b-2 rounded-t-lg hover:text-gray-600 hover:border-[#FF6666]" type="button" role="tab" onClick={() => handleButtonClick('L')}>LATEST</button>
                    </li>
                </ul>
            </div>

            <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 md:gap-x-16 mt-10 mb-5">
                {filteredData.map((item, idx) => (
                    <div className="w-60 bg-white shadow-md rounded-xl duration-500 z-0 hover:scale-105 hover:shadow-xl">
                        <Link to={`/ProductPage/${item.id}`}>
                            <img key={idx} src={item.ProductImage} alt="Product" className="h-72 w-60 object-cover rounded-t-xl" />
                            <div className="px-4 py-3 w-60">
                                <span className="text-gray-400 mr-3 uppercase text-xs flex">{item.BrandName}</span>
                                <p className="text-lg font-bold text-black truncate mt-2 capitalize flex">{item.ProductName}</p>
                                <div className="flex items-center">
                                    <p className="text-lg font-semibold text-black cursor-auto my-3">${item.NewPrice}</p>
                                    <del>
                                        <p className="text-sm text-gray-600 cursor-auto ml-2">${item.OldPrice}</p>
                                    </del>
                                    <div className="ml-auto">
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
                        </Link>
                    </div>
                ))
                }
            </section>
        </>
    )
}

export default Tab