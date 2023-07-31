import { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";
import CarPage from "../cars/car-page/car-page";
import CarHat from "../information/car/carHat";


import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';
// import DatePickerPage from "../../ui/calendar-page";
import carPageSpecifications from "../cars/car-page/car-page-specifications";

function carPageBooking({url}) {
  
  const {id} = useParams(null);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [locations,setLocations] = useState(null)
  const [busyDatesCar,setBusyDatesCar] = useState(null)

  useEffect(() => {
    let company = Cookies.get("company") === '' ? undefined : Cookies.get("company")
    let carId = Cookies.get("carId") === '' ? undefined : Cookies.get("carId")
    let locationGet=Cookies.get('locationGet') === undefined ? '':Cookies.get('locationGet')
    let locationReturn=Cookies.get('locationReturn') === undefined ? '':Cookies.get('locationReturn')
    let rentDate = Cookies.get('rentDate') === undefined ? '':Cookies.get('rentDate')

    console.log("carId "+carId+" company:"+company)
    if(id!=null && id!='' && company!=undefined){
        fetch(`https://auto-allure.com:2053/booking-car/v2?car_id=${carId}&group_car=${company}&locationGet=${locationGet}&locationReturn=${locationReturn}&rentalDates=${rentDate}`)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
              setLocations(result.end.locations[0])
            //   setBusyDatesCar(result.busyDatesCar)
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


  return (
    <>
        <CarHat key={"carInformationHatBooking"} carName={items.brand+" "+items.mark}/>
        
        {/* <CarPage key={"carInformation"} url={url} error={error} isLoaded={isLoaded} car={items} locations={locations} busyDatesCar={busyDatesCar}/> */}

        <div className="wrapper">
            <Outlet />
        </div>

    </>
  );
}

export default carPageBooking;
