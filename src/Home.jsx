import React from 'react'
import Hero from "./compoents/Home/Hero";
import Products from './compoents/Home/Products';
import Tab from '../src/compoents/Home/tab'
import Slider from './compoents/Home/Slider';
import Support from './compoents/Home/Support';
import BrandSlider from './compoents/Home/BrandSlider';

const Home = () => {
  return (
    <>
      <Slider />
      <Products />
      <Hero />
      <Tab />
      <Support />
      <BrandSlider />
    </>
  )
}

export default Home