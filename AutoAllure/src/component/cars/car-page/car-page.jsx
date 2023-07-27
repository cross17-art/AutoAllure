// https://auto-allure.com:2053/cars_id/v2?id=${carId}&group=${type}

import { useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import CarSlider from '../car-sliderPhotose';
import syleCarPage from "../../../assets/css/carPage.module.scss"

import CalendarPage from "../../../component/ui/calendar-page";
import CarPageSpecifications from "./car-page-specifications";
import CarPageTariffs from "./car-page-tariffs";

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
  const [carColor, setCarColor] = useState(true);
  useEffect(()=>{
        if(car.length!=0){
          let color = car.color.code;
          setCarColor(color)
        }
        
    },[car])

  
    if (error) {
      return <div>Error: {error}</div>;
    } else if (!isLoaded) {
      return <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
    } else {
      return (
        
      <>
        <div className='wrapper'>
          <div className={syleCarPage.carPage}>
              <div className={syleCarPage.carPage__pictures}>
                <CarSlider key={"carPageSlider"} photos={car.thumbnails}/>
              </div>
              <div className={syleCarPage.carPage__text}>
                  <div className={`${syleCarPage["carPage__text--hat"]} hat`}>  
                    <span>{car.min_price}€/price</span>

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
                    <p>Color</p>
                    <span className={`${syleCarPage["carPage__text--row-color"]}`} style={{'backgroundColor':carColor}}></span>

                  </div>
                  <div className={syleCarPage["carPage__text--price"]}>
                      <p>You take more you pay less</p>
                  </div>
                  <CalendarPage key={'CarPageDatePicker'} locations={locations} disabledDates={busyDatesCar}/>
                  {/* <CarDatePicker key={'CarPageDatePicker'} classContainer={""}/>   */}

              </div>
          </div>

      </div>
      <CarPageSpecifications carData={car} />
      <CarPageTariffs tariffs={car.periods_price} priceCar={car.price}/>

      </>
      );
    }
}



export default carPage