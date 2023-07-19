// https://auto-allure.com:2053/cars_id/v2?id=${carId}&group=${type}

import { useState,useEffect} from 'react'
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';

function carBook({url}) {
    const {id} = useParams(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

  
    useEffect(() => {
      let company = Cookies.get("company") === '' ? undefined : Cookies.get("company")
      if(id!=null && id!='' && company!=undefined){
          fetch(`https://auto-allure.com:2053/cars_id/v2?id=${id}&group=${company}`)
            .then(res => res.json())
            .then(
              (result) => {
                setIsLoaded(true);
                setItems(result);
                Cookies.remove("company")
              },
              (error) => {
                setIsLoaded(true);
                setError(error);
                Cookies.remove("company")
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
      <div className='orderInformation'>



        order information 
        {items.busyDatesCar.status}
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



export default carBook