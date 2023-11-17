import React from 'react';
import { useState,useEffect  } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

// import styleLink from '../../assets/css/components/linksForm.module.scss'
import stylePesonal from '../../assets/css/personalDetailes.module.scss'
import styleLink from '../../assets/css/components/linksForm.module.scss'
import Cookies from 'js-cookie';

const StepsForm = ({carDataId}) => {
    const navigate = useNavigate();

    const location = useLocation();
    const [page,setPage] = useState(false);
    const [carId,setCarId] = useState();
    const [correctSessionStorage, setCorrectSessionStorage] = useState(false)
    useEffect(()=>{
        const currentUrl = location.pathname;
        let dataId = currentUrl.split("/")[2]

        if(sessionStorage.length!=0){
            let carData = JSON.parse(sessionStorage.carBookingData)
            carData.order.vehicle_id == dataId?
            setCorrectSessionStorage(true):
            sessionStorage.removeItem('carBookingData')
        }
        setCarId(dataId)
        

    },[])

    const handelRedirect =(path,carId)=> {
        if(path=="/"){
            sessionStorage.removeItem('carBookingData');
            navigate("/")
        }else if(path.includes("car-page")){
            navigate("/car-page/"+carId)
        }else if(sessionStorage.length!=0 && path.includes("car-book")){
            navigate("/car-book/"+carId)
            // let carData = JSON.parse(sessionStorage.carBookingData)
            // carData.order.vehicle_id == carId ? navigate("/car-book/"+carId) : sessionStorage.removeItem('carBookingData');

        }
    }
    return (
        <div className={styleLink["linksForm"]} >
                <p onClick={()=>handelRedirect("/",carId)} className={styleLink["linksForm__active"]} >Main page</p>
                <span>/</span>
                <p onClick={()=>handelRedirect("/car-page/",carId)} className={styleLink["linksForm__active"]} >Car Page</p>
                <span>/</span>
                <p onClick = {()=>handelRedirect("/car-book/",carId)}className={ correctSessionStorage ? styleLink["linksForm__active"]:styleLink["linksForm__disable"]}>Car Book</p>
            
        </div>
    );
};

export default StepsForm;
