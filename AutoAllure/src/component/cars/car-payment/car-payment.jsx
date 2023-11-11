import React, {useState,useEffect} from "react";
import styleCarBook from "../../../assets/css/carBook.module.scss";
import CarWhyWe from "../../information/car/car-whyWe";
import Cookies from "js-cookie";


const carPayment = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [link, setLink] = useState();
    
    useEffect(()=>{
        let link = Cookies.get("paymentLink")
        if(link!=undefined){
            setLink(link)
            setIsLoaded(true)
            Cookies.remove("paymentLink")
        }
    },[])
   
    

 if (!isLoaded) {
    return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
  } else {

    return (<>
    
    <div className="wrapper">
          <div className={styleCarBook["book"]}>
          <iframe
                title="Nested Page"
                src={link}
                width="100%"
                height="700px"
                frameBorder="0"
            ></iframe>
          </div>
        </div>
        
    
    </>);
  }
    
    
};

export default carPayment;