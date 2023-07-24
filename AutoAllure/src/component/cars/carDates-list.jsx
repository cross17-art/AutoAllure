import { useState,useEffect } from 'react'
import '../../assets/css/CarList.scss'

import CarItem from './car-item';
import CarDatePicker from "../ui/calendar";

import { useParams } from 'react-router-dom';

import Cookies from 'js-cookie';

function cars({url}) {
    const {dates} = useParams(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [rentDateInformation,setRentDateInformation] = useState(null)

  
    useEffect(() => {
      if(dates!=null){
        console.log("only dates")

        let locationGet=Cookies.get('locationGet') === undefined ? '':Cookies.get('locationGet')
        let locationReturn=Cookies.get('locationReturn') === undefined ? '':Cookies.get('locationReturn')
        let rentDate = Cookies.get('rentDate') === undefined ? '':Cookies.get('rentDate')

        setIsLoaded(false);

        fetch(`https://auto-allure.com:2053/cars_dates/V2?dates=${rentDate}&locationGet=${locationGet}&locationReturn=${locationReturn}`)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
              const targetElement = document.getElementById('dateCars'); 
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
              }

              // setRentDateInformation({
              //   "dates":dates,
              //   "locationGet":locationGet,
              //   "locationReturn":locationReturn,
              //   "type":"book"
              // })
              // Cookies.remove('dateStart');
              // Cookies.remove('dateEnd');
  
              // Cookies.remove('locationGet');
              // Cookies.remove('locationGet');
              // Cookies.remove('locationReturn');
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
              const targetElement = document.getElementById('dateCars'); 
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
              }
              // Cookies.remove('dateStart');
              // Cookies.remove('dateEnd');
          
              // Cookies.remove('locationGet');
              // Cookies.remove('locationReturn');
            }
            
          )
      }
    }, [dates])


  
    if (error) {
      return <div>Error: {error}</div>;
    } else if (!isLoaded) {
      return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
    } else {
      return (<>
      {/* <CarDatePicker key={'CarListDatePicker'} locations={items.locations }/> */}
      <div id="dateCars">
        <div className='carList__text'>
                  <h1>TOP CARS</h1>
                  <div className='carList__text--line'>
                    <div className='carList__text--line_item1'></div>
                    <div className='carList__text--line_item2'></div>
                  </div>
                  <p>Car rental with driver.</p>
        </div>
        </div>
      <div className='carList' id="">

         {items.cars.map((element)=>{
           
           //create Full Name of Car
           let brand = element.brand.toLowerCase()
           brand = brand.replace(brand[0],brand[0].toUpperCase())
            
           let mark = element.mark.toLowerCase()
           mark = mark.replace(mark[0],mark[0].toUpperCase())
           element.fullName=brand+" "+mark;

           return ( <CarItem key={element.id} carData={element} url={url} type="book"/>)
         })}

      </div>
      </>
      );
    }
}

export default cars
