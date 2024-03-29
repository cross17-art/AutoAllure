// https://auto-allure.com:2053/cars_id/v2?id=${carId}&group=${type}

import { useState,useEffect} from 'react'
import { useAsyncError, useParams } from 'react-router-dom';
import CarSlider from '../car-sliderPhotose';
import syleCarPage from "../../../assets/css/carPage.module.scss"

import CalendarPage from "../../../component/ui/calendar-page";
// import CarPageSpecifications from "./car-page-specifications";
import CarPageTariffs from "./car-page-tariffs";
import CarWhyWe from '../../information/car/car-whyWe';
import CarPageOptions from "../../../component/cars/car-page/car-page-options";
import StepsForm from "../../ui/stepsForm";

function carPage({url,error,isLoaded,car,locations,busyDatesCar}) {
  {/* 

  https://premiercars.ru/auto/lamborghini-aventador/

  photo - block 
  text - block
  specifications block
  price -blocks

  contact information
  Условия аренды автомобиля
  9 причин выбрать auto allure
  другие похожие автомобили

  */}  



  const [carColor, setCarColor] = useState({});
  const [carOptions,setCarOptions] = useState({});
  const [carFuel,setCarFuel] = useState();

  const [formData, setFormData] = useState({
    calendarDate:''
  });
  const [errors, setErrors] = useState({ ..."" });



  useEffect(()=>{
          if(isLoaded){
            setCarOptions(car.options[0])
          }        
  },[car])

  
    if (error) {
      return <div>Error: {error}</div>;
    } else if (!isLoaded) {
      return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
    } else {
      return (
        
      <>
        <div className='wrapper'>
          <StepsForm carDataId={car.id}/>

          <div className={syleCarPage.carPage}>
              <div className={syleCarPage.carPage__pictures}>
                <CarSlider key={"carPageSlider"} photos={car.photos}/>
                <CarPageOptions key={"carPageOptions"} url={url} carOptions={car.options[0]} fuel = {car.fuel} transmission ={car.transmission} number_seats={car.number_seats} id_block={"carPage"}/>
              </div>
              <div className={syleCarPage.carPage__text}>
                  <div className={`${syleCarPage["carPage__text--hat"]} hat`}>  
                    <span>{car.price}€/day</span>
                  </div>
                  <div className={syleCarPage["carPage__text--row"]}>
                    <p>Fuel</p>             
                    <span>{car.fuel}</span>
                  </div>
                  <div className={syleCarPage["carPage__text--row"]}>
                    <p>Year</p>
                    <span>{car.year}</span>
                  </div>
                  <div className={syleCarPage["carPage__text--row"]}>
                    <p>Transmission</p>
                    <span>{car.transmission.split(" ")[0]}</span>
                  </div>
                  <div className={syleCarPage["carPage__text--row"]}>
                    <p>Body type</p>
                    <span>{car.body_type}</span>
                  </div>
                  <div className={syleCarPage["carPage__text--row"]}>
                    <p>Volume engine</p>
                    <span>{car.volume_engine}</span>
                  </div>
                  <div className={syleCarPage["carPage__text--row"]}>
                    <p>Color</p>
                    <span className={`${syleCarPage["carPage__text--row-color"]}`} style={{'backgroundColor':car.color.code}}></span>
                  </div>
                  <div className={syleCarPage["carPage__text--row"]}>
                    <p>Volume Tank</p>
                    <span>{car.volume_tank}</span>
                  </div>
                  <div className={syleCarPage["carPage__text--info"]}>
                    <p>Please select the desired date and time</p>
                
                  </div>
                  <CalendarPage key={'CarPageDatePicker'} locations={locations} disabledDates={busyDatesCar} id = {car.id}/>
                  <div className={syleCarPage["carPage__text--icon"]}>
                      <span className="_footerContact__item--link_s23m4_26" href="tel: +35799667777">+357&nbsp;996&nbsp;7777</span>
                      <a href="https://t.me/+35799667777">
                          <img src={url+'/icons/telegram_icon.png'} />
                      </a>
                      <a href="https://wa.me/+35799667777">
                          <img src={url+'/icons/whatsapp_icon.png'} />
                      </a>
                  </div>
              </div>
          </div>

      </div>
      <CarPageTariffs tariffs={car.periods_price} priceCar={car.price}/>
      <CarWhyWe />
      </>
      );
    }
}



export default carPage