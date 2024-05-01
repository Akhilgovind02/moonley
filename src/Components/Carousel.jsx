import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import C1 from '../assets/C1.jpg';
import C2 from '../assets/C2.jpg';
import C3 from '../assets/C3.jpg';
import './carousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <ul className="m-0 p-0 list-none text-center">{dots}</ul>
      </div>
    )
  };

  return (
    <div className="relative">
    <Slider {...settings} style={{ maxHeight: "35rem"}}>
      <div className="h-full">
        <img src={C1} alt="Image 1" className="w-full h-full object-cover" style={{ maxHeight: "39rem" }} />
      </div>
      <div className="h-full">
        <img src={C2} alt="Image 2" className="w-full h-full object-cover" style={{ maxHeight: "39rem" }} />
      </div>
      <div className="h-full">
        <img src={C3} alt="Image 3" className="w-full h-full object-cover" style={{ maxHeight: "39rem" }} />
      </div>
    </Slider>
    <div className="absolute top-0 left-0 w-full h-full mx-24 flex items-center">
        <h2 style={{fontSize:'60px',width:'680px'}} className="text-grey font-bold animate-text">Elegant Wall Painting Solution For Your Home</h2>
      </div>
      <div style={{marginTop:'30px', width:'680px'}} className="absolute top-20 left-0 w-full h-full mx-24 flex  items-center animate-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officiis modi sapiente iusto quaerat dolorem nisi nostrum voluptatem totam? </p>
      </div>
      <div style={{marginTop:'90px', width:'680px'}} className="absolute top-20 left-0 w-full h-full mx-24 flex  items-center animate-text">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Contact Us</button>
      </div>
    </div>
  );
};

export default Carousel;

