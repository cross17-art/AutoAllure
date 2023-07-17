import React from 'react';
import { useEffect, useRef } from "react";
import styleBanner from  '../../assets/css/banner.module.scss'
// import Logo from "../ui/logo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
function BannerBook() {

  return (
    <div className={styleBanner.banner}>
      <div className={styleBanner.banner__infromation}>
      <Swiper 
            navigation={false}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
           >
                      <SwiperSlide>
                        <div className={styleBanner['banner__infromation--swiper']}>
                            <h1>Premium transportation services </h1>
                            <p>Invest in comfort and convenience and enjoy the ultimate limousine travel experience with a professional chauffeur in Cyprus </p>
                            <button type='button' className={styleBanner.btnBanner__white}>
                                Choose a car
                            </button>
                        </div>
                        
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className={styleBanner['banner__infromation--swiper']}>
                          <h1>Chauffeur Service in Moscow </h1>
                          <p>Car rental business, premium and luxury class in Moscow and the Moscow region</p>
                          <button type='button' className={styleBanner.btnBanner__white}>
                            Order now
                          </button>
                      </div>
                      
                      </SwiperSlide>
                
                      <SwiperSlide>
                        <div className={styleBanner['banner__infromation--swiper']}>
                            <h1>Exclusive Service </h1>
                            <p> 
                              Rent luxury cars and minibuses with driver. Chauffeur service since 1998.  
                            </p>
                            <button type='button' className={styleBanner.btnBanner__white}>
                              About company
                            </button>
                        </div>
                        
                      </SwiperSlide>
              </Swiper>    
      </div>

      
    </div>

      
  )
}

export default BannerBook
