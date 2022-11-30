import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from '../../image/image1.jpg'
import image2 from '../../image/image2.jpg'
import image3 from '../../image/image3.jpg'
import image4 from '../../image/image4.jpg'
import image5 from '../../image/image5.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Carouser.css";

// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide ><img  src={image1} alt=""></img></SwiperSlide>
        <SwiperSlide><img src={image2} alt=""></img></SwiperSlide>
        <SwiperSlide><img src={image3} alt=""></img></SwiperSlide>
        <SwiperSlide><img src={image4} alt=""></img></SwiperSlide>
        <SwiperSlide><img src={image5} alt=""></img></SwiperSlide>

      </Swiper>
    </>
  );
}
