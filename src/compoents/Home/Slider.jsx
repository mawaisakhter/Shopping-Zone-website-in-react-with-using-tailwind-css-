import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

const featuredProducts = [
  "https://raw.githubusercontent.com/mawaisakhter/Shopping-Zone-website-in-react-with-using-tailwind-css-/main/public/images/Brand-1.jpg",
  "public/images/Slider-2.jpeg",
  "public/images/Slider-3.jpeg",
  "public/images/Slider-4.jpeg",
  "public/images/Slider-5.jpeg",
  "public/images/Slider-6.jpeg",
  "public/images/Slider-7.jpeg",
  // "/images/Slider-8.jpeg"
];

let count = 0;
let slideInterval;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="w-full md:w-12/12 h-full mt-5 md:top-0 mx-auto md:mx-auto select-none relative">
      <div className="aspect-w-16 aspect-h-9">
        <img src={featuredProducts[currentIndex]} alt="" />
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition" onClick={handleOnPrevClick}>
          <AiOutlineVerticalRight size={30} />
        </button>
        <button className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition" onClick={handleOnNextClick}>
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </div>
  );
}
