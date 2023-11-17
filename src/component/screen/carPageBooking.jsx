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
  const [car, setCar] = useState([]);

  const [busyDatesCar,setBusyDatesCar] = useState(null)
  const [locations,setLocations] = useState(null)


  const [stateOfPage, setStateOfPage] = useState(sessionStorage.getItem('yourState') || '');
  const [carDataId,setCarDataId]=useState();
  useEffect( () => {
    let company = Cookies.get("company") === '' ? undefined : Cookies.get("company")
    let carId = Cookies.get("carId") === '' ? undefined : Cookies.get("carId")
    let locationGet=Cookies.get('locationGet') === undefined ? '':Cookies.get('locationGet')
    let locationReturn=Cookies.get('locationReturn') === undefined ? '':Cookies.get('locationReturn')
    let rentDate = Cookies.get('rentDate') === undefined ? '':Cookies.get('rentDate')
    setCarDataId(carId)
    console.log("carId "+carId+" company:"+company)
    let body = {
      "car_id":carId,
      "group_car":company,
      "locationGet":locationGet,
      "locationReturn":locationReturn,
      "rentalDates":rentDate
    }
    const storedData = sessionStorage.getItem('carBookingData');
    if(id!=null && id!='' && company!=undefined && !storedData){
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
                setCar(result.car);
                setBusyDatesCar( result.rent_time.split(" - "))
                setLocations({"get":locationGet,"return":locationReturn})
                sessionStorage.setItem('carBookingData', JSON.stringify({
                  order: result.order,
                  car: result.car,
                  busyDatesCar: result.rent_time.split(" - "),
                  locations: { "get": locationGet, "return": locationReturn }
                }));
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
    setTimeout(() => {
      console.log("delete session storage")
      sessionStorage.removeItem('carBookingData');
    }, 1 * 60 * 1000);
  }, [id])

  useEffect(() => {
    // Проверка наличия данных в sessionStorage при загрузке страницы
    
    const storedData = sessionStorage.getItem('carBookingData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setItems(parsedData.order);
      setCar(parsedData.car);
      setBusyDatesCar(parsedData.busyDatesCar);
      setLocations(parsedData.locations);
      setIsLoaded(true);
    }
  }, []);

  return (
    <>
        <CarHat key={"carInformationHatBooking"} carName={car.brand+" "+car.mark}/>


        <CarBook key={"carInformation"} url={url} error={error} isLoaded={isLoaded} car={items} locations={locations} orderDate={busyDatesCar} carDescriptions={car}/>
        
        <div className="wrapper">
            <Outlet />
        </div>

    </>
  );
}

export default carPageBooking;
