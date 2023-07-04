import React from 'react';
import { useEffect, useRef } from "react";
import '../../assets/css/Header.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import Logo from '../ui/logo'
import '../../assets/css/popup.scss'
function Header() {

  return (
    <>
    <div className='header'>

        <div className='header_links'>
          <Logo />
          <a lng="eng" href="https://auto-allure.com/" >Home</a>
          <a lng="eng" href="https://auto-allure.com/directory/privacy-policy.php" >Privacy Policy</a>
          <a lng="eng" href="#our_tariffs" >Tariffs</a>
          <a lng="eng" href="#help" >Contacts</a>
        </div>

    
    {/* перетащить блок в другое место либо убрать */}

        {/* <div className='header_hat'>

            <div className='header_hat-banner'>
             
              <div className='header_hat-banner-text'>
                <p>Drive your dream</p>
                <span>find your car</span>
              </div>
              <div className='header_hat-banner-selector'>
                <button className="btn btn-orange">Rent next month</button>
                <button className="btn btn-black">Rent Now</button>
              </div>
              
            </div>
            <div className='header_hat-picture'>
              <svg className='header_hat-picture-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" >
                <circle cx="100" cy="100" r="80" fill="orange" />
              </svg>
          
              <Swiper 
                    navigation={false}
                    centeredSlides={true}
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false,
                    }}
                      modules={[Autoplay]}
                      className="mySwiper ">
                    <SwiperSlide>
                      <img src='/renault-arkana-2021-red.png'></img>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/renault-arkana-techno-1341763939.png'></img>
                    </SwiperSlide>
              
                    <SwiperSlide>
                      <img src='/renault-arkana-s-edition-175902568.png'></img>
                    </SwiperSlide>
             </Swiper>
            </div>
        </div> */}
       
      
    </div>
 
    </>
  )
}

export default Header
