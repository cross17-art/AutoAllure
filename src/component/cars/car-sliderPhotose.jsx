import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination,Scrollbar } from "swiper";
import styleReviews from '../../assets/css/reviews.module.scss'

const carSlider = ({photos}) => {

  return (
    <>
    {/* mySwiper modal_information-side */}
    <Swiper   navigation={true}
              centeredSlides={true}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              modules={[Navigation, Pagination, Scrollbar]}
              className={styleReviews['reviews__clients--custom'] } 
    > 

        {
          
          photos.map((item, index)=>{
            return (
              <SwiperSlide key={`carpageSwiper_Element_${index}`}>
                  <div className={styleReviews['reviews--swiper']}>
                        <img src={item} alt={"asd"} key={index} />
                  </div>
              </SwiperSlide>
              
          )
          })
        }
      </Swiper>
    </>
    
  );
};

export default carSlider;