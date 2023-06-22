import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const carSlider = ({photos}) => {

  return (
    <>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper modal_information-side">
        {photos.map((item, index)=>{
          return (
            <SwiperSlide>
                <img src={item} alt={"asd"} key={index} />
            </SwiperSlide>
        )
      })}
      </Swiper>
    </>
    
  );
};

export default carSlider;