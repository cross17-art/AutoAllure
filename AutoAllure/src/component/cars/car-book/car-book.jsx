// https://auto-allure.com:2053/cars_id/v2?id=${carId}&group=${type}

import { useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import CarSlider from '../car-sliderPhotose';
import syleCarPage from "../../../assets/css/carPage.module.scss"
import styleCarBook from "../../../assets/css/carBook.module.scss"
import styleOrder from '../../../assets/css/orderSteps.module.scss'

import CalendarPage from "../../../component/ui/calendar-page";
import CarPageSpecifications from "../car-page/car-page-specifications";
import CarPageTariffs from "../car-page/car-page-tariffs";
import CarPersonalDetailes from "../../../component/cars/car-book/car-book-personalDetailes";
import CarPayment from "../../../component/cars/car-book/car-book-payment";
import CarWhyWe from '../../information/car/car-whyWe';
function carBook({url,error,isLoaded,car,locations,orderDate}) {

  

  
    if (error) {
      return <div>
            We apologize, someone is already renting a car.  Try again in a couple of minutes
        </div>;
    } else if (!isLoaded) {
      return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
    } else {
      return (
        
      <>
      <div className='wrapper'>
          <div className={styleCarBook['book']}>
              <div className={styleCarBook['book__info']}>
                  <h1>Заголовок основной информации</h1>
                  <p>Здесь размещается основная информация о продукте или услуге.</p>
                  <p>Дополнительные детали и описание.</p>
                  <CarPayment />
                  <CarPersonalDetailes />
              </div>
              <div className={styleCarBook['book__payment']}>
                <div className={styleCarBook['book__payment--sticky']}>
                    <h2>Calculation Info</h2>
                    <div className={syleCarPage["carPage__text--row"]}>
                        <p> Start Date </p>             
                        <span>{orderDate[0]}</span>
                    </div>
                    <div className={syleCarPage["carPage__text--row"]}>
                        <p> End Date </p>             
                        <span>{orderDate[1]}</span>
                    </div>
                    <div className={syleCarPage["carPage__text--row"]}>
                        <p> Car Price </p>             
                        <span>{car.total_price}</span>
                    </div>
                    <div className={syleCarPage["carPage__text--row"]}>
                        <p> Service Fee </p>             
                        <span>{car.taxes.taxesTotal}</span>
                    </div>
                    <div className={syleCarPage["carPage__text--row"]}>
                        <p>  Pick-up Location  </p>             
                        <span>{locations.get}</span>
                    </div>
                    <div className={syleCarPage["carPage__text--row"]}>
                        <p> Drop-off Location</p>             
                        <span>{locations.return}</span>
                    </div>

                </div>
                  
              </div>
        </div>    
      </div>
      <CarWhyWe />
      </>
      );
    }
}



export default carBook