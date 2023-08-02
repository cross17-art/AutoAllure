import { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";
import CarHat from "../information/car/carHat";
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';
import CarBook from "../cars/car-book/car-book";



function carPageBooking({url}) {
  
  const {id} = useParams(null);

  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [busyDatesCar,setBusyDatesCar] = useState(null)

  useEffect(() => {
    let company = Cookies.get("company") === '' ? undefined : Cookies.get("company")
    let carId = Cookies.get("carId") === '' ? undefined : Cookies.get("carId")
    let locationGet=Cookies.get('locationGet') === undefined ? '':Cookies.get('locationGet')
    let locationReturn=Cookies.get('locationReturn') === undefined ? '':Cookies.get('locationReturn')
    let rentDate = Cookies.get('rentDate') === undefined ? '':Cookies.get('rentDate')

    console.log("carId "+carId+" company:"+company)
    let body = {
      "car_id":carId,
      "group_car":company,
      "locationGet":locationGet,
      "locationReturn":locationReturn,
      "rentalDates":rentDate
    }
    if(id!=null && id!='' && company!=undefined){
        fetch(`https://auto-allure.com:2053/booking-car/v2`,{
          method: "POST",
          body:JSON.stringify(body),
          headers:{'Content-Type': 'application/json'}
        })
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result.order);
              setBusyDatesCar(result.rent_time)
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


  return (
    <>
        <CarHat key={"carInformationHatBooking"} carName={items.brand+" "+items.mark}/>
        
        <CarBook key={"carInformation"} url={url} error={error} isLoaded={isLoaded} car={items} orderDate={busyDatesCar}/>
        
        <div className="wrapper">
            <Outlet />
        </div>

    </>
  );
}

export default carPageBooking;
