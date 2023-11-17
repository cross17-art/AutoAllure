import React, {useState,useEffect} from "react";
import styleCarBook from "../../../assets/css/carBook.module.scss";
// import CarWhyWe from "../../information/car/car-whyWe";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const carPayment = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [link, setLink] = useState();
    const [paymentType, setPaymentType] = useState("Cash");
    const navigate = useNavigate();

    useEffect(()=>{
        let link = Cookies.get("paymentLink")
        setIsLoaded(true)
        if(link!=undefined){
            setLink(link) 
            setPaymentType(Cookies.get("payment_type"))
            Cookies.remove("paymentLink")
            Cookies.remove("payment_type")
            
        }
    },[])
   
    const handelPayment = () =>
    {
      navigate(link);
    }
    

 if (!isLoaded) {
    return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
  } else {

    return (<>
    
    <div className="wrapper">

          <div className={styleCarBook["payment"]}>
            <div className={styleCarBook["payment_text"]}>
                <p>Thank you for choosing our company for your car rental. We've emailed you all the essential details, and feel free to give us a call if you have any questions</p>
                {paymentType=="Cash"?"":<button className="carItem_btn carItem_booking btn booking btn-orange" >Pay now</button>}
           
            </div>

          {/* {paymentType!="Cash"?
            <button className="carItem_btn carItem_booking btn booking btn-orange" >Pay now</button>

          
            :
            ""
          } */}
          </div>
        </div>
        {/* <iframe
                title="Nested Page"
                src={link}
                width="100%"
                height="700px"
                frameBorder="0"
                target='_self'
            ></iframe> */}
    
    </>);
  }
    
    
};

export default carPayment;