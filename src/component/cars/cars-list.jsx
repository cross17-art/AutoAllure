import { useState,useEffect } from 'react'
import '../../assets/css/CarList.scss'
import '../../assets/css/loading.scss'

import CarItem from './car-item';
import CarDatePicker from "../ui/calendar";

import { useParams } from 'react-router-dom';

import Cookies from 'js-cookie';

function cars({url}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {

      console.log("only list")
      fetch("https://auto-allure.com:2053/cars")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            // const targetElement = document.getElementById('allCars'); 
            // if (targetElement) {
            //   targetElement.scrollIntoView({ behavior: 'smooth' });
            // }
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
            // const targetElement = document.getElementById('allCars'); 
            // if (targetElement) {
            //   targetElement.scrollIntoView({ behavior: 'smooth' });
            // }
          }
        )
    },[])
  
    if (error) {
      return <div>Error: {error}</div>;
    } else if (!isLoaded) {
      return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
    } else {
      return (<>
      {/* <CarDatePicker key={'mainCarDatePicker'} locations={items.locations }/> */}
      <div id="allCars">
        <div className='carList__text'>
                  <h1>TOP CARS</h1>
                  <div className='carList__text--line'>
                    <div className='carList__text--line_item1'></div>
                    <div className='carList__text--line_item2'></div>
                  </div>
                  <p>Car rental with driver.</p>
        </div>
        <div className='carList' >
          
          {items.Test.map((element)=>{
            
            //create Full Name of Car
            let brand = element.brand.toLowerCase()
            brand = brand.replace(brand[0],brand[0].toUpperCase())
              
            let mark = element.mark.toLowerCase()
            mark = mark.replace(mark[0],mark[0].toUpperCase())
            element.fullName=brand+" "+mark;

            //search max discount
            let maxDiscount = 0;
            element.periods_price.forEach((item)=>{if(parseFloat(item.discount)<maxDiscount)maxDiscount=parseFloat(item.discount)})
            element.maxDiscount = maxDiscount;
            
            element.monthPrice = (element.price-(element.price*(maxDiscount*-1)/100))*31
            return ( <CarItem key={element.id} carData={element} url={url} type = "page" />)
          })}

        </div>
      </div>

      </>
      );
    }
}

export default cars