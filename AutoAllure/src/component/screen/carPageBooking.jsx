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
  const [locations,setLocations] = useState(null)

  useEffect( () => {
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

              if(result.order.code===0){
                setError(true);
              }else{
                setItems(result.order);
                setBusyDatesCar( result.rent_time.split(" - "))
                setLocations({"get":locationGet,"return":locationReturn})

              }
              setIsLoaded(true);

            },
            (error) => {
              setIsLoaded(false);
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
        
        <CarBook key={"carInformation"} url={url} error={error} isLoaded={isLoaded} car={items} locations={locations} orderDate={busyDatesCar}/>
        
        <div className="wrapper">
            <Outlet />
        </div>

    </>
  );
}

export default carPageBooking;
