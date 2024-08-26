import React, { useEffect, useState } from 'react'
import { PRODUCTS } from '../../products'
import { Link } from 'react-router-dom'

const Technology = () => {

  const [filteredData, setFilteredData] = useState([]);

    const filterData = (value) => {
        const filtered = PRODUCTS.filter((item) => item.category === value);
        setFilteredData(filtered);
    };

    useEffect(() => {
        filterData('Technology');
    }, []);

  const [checkedValues, setCheckedValues] = useState([]);

  const handleCheckboxChange = (value) => {
    if (checkedValues.includes(value)) {
      setCheckedValues(checkedValues.filter((item) => item !== value));
    } else {
      setCheckedValues([...checkedValues, value]);
    }
  };

  const filteredItems = filteredData.filter((item) => {
    if (checkedValues.length === 0) {
      return true;
    }
    return checkedValues.includes(item.subcategory);
  });

  return (
    <div className="bg-white mt-7 w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row">
      <aside className="w-[350px] md:w-3/12 lg:w-1/4 py-4 mr-10 md:block mt-6">
        <div className='ms-2 mb-3'>
          <h1>FILTER BY </h1>
          <h1>FILTER OPTIONS</h1>
          <h1>Categories</h1>
        </div>

        <div className="sticky top-[100px] flex flex-col gap-2 p-2 border rounded-xl">
          <div role='button'
            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <label htmlFor="vertical-list-react" className="flex items-center w-full px-3 py-2 cursor-pointer">
              <div className="grid mr-3 place-items-center">
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor="vertical-list-react">
                    <input id="vertical-list-react" type="checkbox" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-white checked:bg-[#FF6666] checked:before:bg-white hover:before:opacity-0" value="Android" checked={checkedValues.includes('Android')} onChange={() => handleCheckboxChange('Android')} />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">Android Mobile</p>
            </label>
          </div>
          <div role="button"
            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <label htmlFor="vertical-list-react" className="flex items-center w-full px-3 py-2 cursor-pointer">
              <div className="grid mr-3 place-items-center">
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor="vertical-list-react">
                    <input id="vertical-list-react" type="checkbox" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-white checked:bg-[#FF6666] checked:before:bg-white hover:before:opacity-0" value="Iphone" checked={checkedValues.includes('Iphone')} onChange={() => handleCheckboxChange('Iphone')} />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">Iphone</p>
            </label>
          </div>
          <div role="button"
            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <label htmlFor="vertical-list-react" className="flex items-center w-full px-3 py-2 cursor-pointer">
              <div className="grid mr-3 place-items-center">
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor="vertical-list-react">
                    <input id="vertical-list-react" type="checkbox" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-white checked:bg-[#FF6666] checked:before:bg-white hover:before:opacity-0" value="Laptop" checked={checkedValues.includes('Laptop')} onChange={() => handleCheckboxChange('Laptop')} />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">Laptops</p>
            </label>
          </div>
          <div role="button"
            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <label htmlFor="vertical-list-react" className="flex items-center w-full px-3 py-2 cursor-pointer">
              <div className="grid mr-3 place-items-center">
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor="vertical-list-react">
                    <input id="vertical-list-react" type="checkbox" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-white checked:bg-[#FF6666] checked:before:bg-white hover:before:opacity-0" value="Computer" checked={checkedValues.includes('Computer')} onChange={() => handleCheckboxChange('Computer')} />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">Computer</p>
            </label>
          </div>
          <div role="button"
            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <label htmlFor="vertical-list-react" className="flex items-center w-full px-3 py-2 cursor-pointer">
              <div className="grid mr-3 place-items-center">
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor="vertical-list-react">
                    <input id="vertical-list-react" type="checkbox" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-white checked:bg-[#FF6666] checked:before:bg-white hover:before:opacity-0" value="Accessory" checked={checkedValues.includes('Accessory')} onChange={() => handleCheckboxChange('Accessory')} />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">Accessories</p>
            </label>
          </div>
        </div>
      </aside>
      {/* <div className="md:w-1/12"></div> */}
      <main className="md:w-9/12 lg:w-3/4 w-full py-1 min-h-screen">
        <div className="p-2 md:p-4">
          <h1 className="text-xl md:text-2xl my-4">PRODUCTS FILTER</h1>
          <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 md:gap-x-24 mt-10 mb-5">
            {filteredItems.map((item, idx) => (
              <div key={idx} className="w-72 bg-white shadow-md rounded-xl duration-500 z-0 hover:scale-105 hover:shadow-xl">
                <Link to={`/ProductPage/${item.id}`}>
                  <img src={item.ProductImage} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                  <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs flex">{item.BrandName}</span>
                    <p className="text-lg font-bold text-black truncate mt-2 capitalize flex">{item.ProductName}</p>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black cursor-auto my-3">${item.Price}</p>
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
        </div>
      </main>
    </div>
  )
}

export default Technology