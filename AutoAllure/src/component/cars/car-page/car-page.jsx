// https://auto-allure.com:2053/cars_id/v2?id=${carId}&group=${type}

import { useState,useEffect} from 'react'
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';
import DatePickerPage from "../../ui/calendar-page";
import CarPageSpecifications from './car-page-specifications';

function carPage({url}) {
    const {id} = useParams(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const [locations,setLocations] = useState(null)
    const [busyDatesCar,setBusyDatesCar] = useState(null)
  
    useEffect(() => {
      let company = Cookies.get("company") === '' ? undefined : Cookies.get("company")
      let carId = Cookies.get("carId") === '' ? undefined : Cookies.get("carId")
      if(id!=null && id!='' && company!=undefined){
          fetch(`https://auto-allure.com:2053/cars_id/v2?id=${carId}&group=${company}`)
            .then(res => res.json())
            .then(
              (result) => {
                setIsLoaded(true);
                setItems(result.end);
                setLocations(result.end.locations[0])
                setBusyDatesCar(result.busyDatesCar)
                // result.end.locations[0] 
                // result.busyDatesCar.dates
              },
              (error) => {
                setIsLoaded(true);
                setError(error);
              }
          )
      }else{
        console.log("await cookies data")
      }
        
    }, [id])

    


  
    if (error) {
      return <div>Error: {error}</div>;
    } else if (!isLoaded) {
      return <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
    } else {
      return (<>
      {/* <CarDatePicker key={'CarListDatePicker'} locations={items.locations }/> */}
      <DatePickerPage key="" locations={locations} disabledDates={busyDatesCar}/>
      <div className='orderInformation'>


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
<CarPageSpecifications carData={items}/>

        order information 
        {/* {items.busyDatesCar.status} */}
        
         {/* {items.cars.map((element)=>{
           
           //create Full Name of Car
           let brand = element.brand.toLowerCase()
           brand = brand.replace(brand[0],brand[0].toUpperCase())
            
           let mark = element.mark.toLowerCase()
           mark = mark.replace(mark[0],mark[0].toUpperCase())
           element.fullName=brand+" "+mark;

           return ( <CarItem key={element.id} carData={element} url={url} />)
         })} */}

      </div>
      </>
      );
    }
}



export default carPage