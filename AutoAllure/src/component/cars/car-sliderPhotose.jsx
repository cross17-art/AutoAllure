import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const carSlider = ({photos}) => {

  return (
    <>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper modal_information-side">
        {photos.map((item)=>{
          return (
            <SwiperSlide>
                <img src={item} alt={"asd"} />
            </SwiperSlide>
        )
      })}
      </Swiper>
    </>
    
  );
};

export default carSlider;