import { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";
import CarPage from "../cars/car-page/car-page";
import CarHat from "../information/car/carHat";


import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';
// import DatePickerPage from "../../ui/calendar-page";
import carPageSpecifications from "../cars/car-page/car-page-specifications";

function carPageMain() {
  
  const {id} = useParams(null);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [locations,setLocations] = useState(null)
  const [busyDatesCar,setBusyDatesCar] = useState(null)

  useEffect(() => {
    let company = Cookies.get("company") === '' ? undefined : Cookies.get("company")
    let carId = Cookies.get("carId") === '' ? undefined : Cookies.get("carId")
    console.log("carId "+carId+" company:"+company)
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


  return (
    <>
        <CarHat key={"carInformationHat"} carName={items.brand+" "+items.mark}/>
        
        <CarPage key={"carInformation"} error={error} isLoaded={isLoaded} car={items} locations={locations} busyDatesCar={busyDatesCar}/>

        <div className="wrapper">
            <Outlet />
        </div>

    </>
  );
}

export default carPageMain;
