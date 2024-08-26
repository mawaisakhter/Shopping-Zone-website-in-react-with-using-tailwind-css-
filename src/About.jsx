import React from 'react'

const About = () => {
  return (
    <>
      <section class="flex items-center bg-white mt-8 lg:h-screen font-poppins mb-5">
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div class="px-4 mb-10 md:text-center md:mb-20">
            <p class="mb-2 text-lg font-semibold text-blue-500 dark:text-gray-400">
              About Us
            </p>
            <h2 class="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
              Our Vision
            </h2>
            <h5 className='pb-2 text-1xl font-bold text-gray-500 md:text-2xl dark:text-gray-400"' >
              To become the most loved brand of Pakistan
            </h5>
            <div class="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
              <div class="flex-1 h-2 bg-blue-200">
              </div>
              <div class="flex-1 h-2 bg-blue-400">
              </div>
              <div class="flex-1 h-2 bg-blue-300">
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center">
            <div class="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
              <h2 class="mb-4 text-2xl font-bold text-gray-700 dark:text-gray-300">
                Our Mission
              </h2>
              <p class="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                Shopping Store is on a mission to offer the best possible e-commerce marketpalce and ratial experience for both onlineb and offline shoppers of all ages around Pakistan with the widest range of quailty brands and products. We put the customers first as we strive to grow and scale through out top-notch tailored technology.
              </p>
              <ul class="mb-10">
                <li class="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span class="mr-3 text-blue-500 dark:text-blue-400 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                      <path
                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  Biggest Variety
                </li>
                <li class="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span class="mr-3 text-blue-500 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                      <path
                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  Best Prices
                </li>
                <li class="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span class="mr-3 text-blue-500 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                      <path
                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  Fast delivery
                </li>
                <li class="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span class="mr-3 text-blue-500 dark:text-blue-400 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                      <path
                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  100% Protected
                </li>
              </ul>
              <a href="#"
                class="px-4 py-2 text-gray-100 bg-blue-500 rounded-md dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600">
                Learn more
              </a>
            </div>
            <div class=" w-full px-4 mb-10 md:w-1/2 lg:mb-0">
              <img src="https://i.postimg.cc/HsSPvTq8/pexels-fauxels-3184357.jpg" alt=""
                class=" z-40 object-cover w-full rounded-md md:h-96 h-44" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About