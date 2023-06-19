import { useState,useEffect } from 'react'
import '../../assets/css/CarList.scss'

import CarItem from './car-item';
import CarDatePicker from "./car-calendar";

import { useParams } from 'react-router-dom';

import Cookies from 'js-cookie';

function cars() {
    const {dates} = useParams(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      if(dates!=null){
        console.log("only dates")
        // let str = Cookies.get('dateStart')+" "+Cookies.get('dateEnd')+" "+Cookies.get('locationGet')+" "+Cookies.get('locationReturn')

        let locationGet=Cookies.get('locationGet') === undefined ? '':Cookies.get('locationGet')
        let locationReturn=Cookies.get('locationReturn') === undefined ? '':Cookies.get('locationReturn')

        let url = `https://auto-allure.com:2053/cars`
        fetch(`https://auto-allure.com:2053/cars_dates/V2?dates=${dates}&locationGet=${locationGet}&locationReturn=${locationReturn}`)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
              Cookies.remove('dateStart');
              Cookies.remove('dateEnd');
  
              Cookies.remove('locationGet');
              Cookies.remove('locationReturn');
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
              Cookies.remove('dateStart');
              Cookies.remove('dateEnd');
          
              Cookies.remove('locationGet');
              Cookies.remove('locationReturn');
            }
          )
      }
    }, [dates])


  
    if (error) {
      return <div>Error: {error}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (<>
      <CarDatePicker key={'CarListDatePicker'} locations={items.locations }/>
      <div className='carList'>

         {items.cars.map((element)=>{
           
           //create Full Name of Car
           let brand = element.brand.toLowerCase()
           brand = brand.replace(brand[0],brand[0].toUpperCase())
            
           let mark = element.mark.toLowerCase()
           mark = mark.replace(mark[0],mark[0].toUpperCase())
           element.fullName=brand+" "+mark;

           return ( <CarItem key={element.id} carData={element} />)
         })}

      </div>
      </>
      );
    }
}

export default cars
