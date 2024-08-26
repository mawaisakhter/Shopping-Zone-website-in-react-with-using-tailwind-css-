import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'

function BrandSlider() {
    const data = [
        {
            id:"1",
            img: `/images/Brand-1.jpg`,
            href: "/login",
            
        },
        {
            id:"2",
            img: `/images/Brand-2.jpg`
        },
        {
            id:"3",
            img: `/images/Brand-3.jpg`
        },
        {
            id:"4",
            img: `/images/Brand-4.jpg`
        },
        {
            id:"5",
            img: `/images/Brand-5.jpg`
        },
        {
            id:"6",
            img: `/images/Brand-6.png`
        },
        {
            id:"7",
            img: `/images/Brand-7.png`
        },
        {
            id:"8",
            img: `/images/Brand-8.png`
        },
        {
          id:"8",
          img: `/images/Brand-9.jpg`
      },
      ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    
  };
  return (
    <div className='w-12/12 md:w-10/12 px-2 md:px-0 m-auto mb-16'>
      <div className="">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="bg-white h-80 px-2 md:px-0 text-black rounded-xl">
            <div className='h-96 flex justify-center items-center'>
              <img to={item.href} src={item.img} alt="" className="h-[120px] md:h-52 w-[150px] md:w-52 rounded-xl"/>
            </div>
          </div>
        ))}
      </Slider>
      </div> 
    </div>
  );
}



export default BrandSlider;