import React from 'react';
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import styleBanner from  '../../assets/css/banner.module.scss'
import CarDatePicker from "../../component/ui/calendar";
import CarDiscount from "../../component/information/carDiscount";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Cookies from 'js-cookie';

function BannerBook() {
  const navigate = useNavigate()

  function showAllCars(){
    Cookies.remove('locationGet');
    Cookies.remove('locationReturn');
    Cookies.remove('rentDate');

    navigate('/#allCars')
  }

  function showAboutCompany(){
    Cookies.remove('locationGet');
    Cookies.remove('locationReturn');
    Cookies.remove('rentDate');

    navigate('/#comapny')
  }

  function orderNextMonth(){
    let locationGet = document.querySelector('[name=first] [name=dropdownTextLocationGet]').textContent.trim()
    let locationReturn = document.querySelector('[name=second] [name=dropdownTextLocationReturn]').textContent.trim()
    let timeGet = document.querySelector('[name=first] [name=dropdownTextTimeGet]').textContent
    let timeReturn = document.querySelector('[name=second] [name=dropdownTextTimeReturn]').textContent


    let nextMonth = new Date(); 
    nextMonth.setMonth((nextMonth.getMonth() + 1));
    nextMonth = nextMonth.getFullYear() + "-" + nextMonth.getMonth() + "-" + nextMonth.getDate()


    let currentDate = new Date(); // Получаем текущую дату и время
    currentDate.setDate((currentDate.getDate() + 1));
    currentDate = currentDate.getFullYear() + "-" + currentDate.getMonth() + "-" + currentDate.getDate()

    let dates = currentDate+' '+timeGet + ' - ' + nextMonth +' '+timeReturn
    Cookies.set('locationGet', locationGet, { expires: 7 });
    Cookies.set('locationReturn', locationReturn, { expires: 7 });
    Cookies.set('rentDate', dates, { expires: 7 });

    navigate(`/dates/${dates}`)
  }
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
                            <button type='button' className={styleBanner.btnBanner__white} >
                                <a lng="eng" href='#allCars' onClick={()=>showAllCars()}>Choose a car</a>
                            </button>
                        </div>
                        
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className={styleBanner['banner__infromation--swiper']}>
                          <h1>Chauffeur Service in Moscow </h1>
                          <p>Car rental business, premium and luxury class in Cyprus and the Cyprus region</p>
                          <button type='button' className={styleBanner.btnBanner__white}>
                            <a lng="eng"  onClick={()=>orderNextMonth()}> Order for a month</a>
                          </button>
                      </div>
                      
                      </SwiperSlide>
                
                      <SwiperSlide>
                        <div className={styleBanner['banner__infromation--swiper']}>
                            <h1>Exclusive Service </h1>
                            <p> 
                              Rent luxury cars and minibuses with driver. Chauffeur service since 2022.  
                            </p>
                            <button type='button' className={styleBanner.btnBanner__white}>
                              <a lng="eng" href='#comapny' onClick={()=>showAboutCompany()}>About company</a>
                            </button>
                        </div>
                        
                      </SwiperSlide>
              </Swiper>    
      </div>
    <CarDatePicker key={'CarListDatePicker'} classContainer={"p-open"}/>    
    <CarDiscount />


    </div>

      
  )
}

export default BannerBook
