import { useState,useEffect } from 'react'
import styleInformation from '../../assets/css/Information.module.scss'
import FAQS from './faqs'
// import AboutUs from './aboutUs'
import Reviews from './reviews';
import OurService from './ourService';
import HelpPhone from './helpPhone';
import OrderSteps from './orderSteps';

function information({url}) {
  
    return(
     <>
        <OurService url={url}/>
        <OrderSteps />

        <Reviews url={url}/>
        <HelpPhone />
        <FAQS />
        
{/* 
        
        <AboutUs url={url} /> */}
     </>
    )
    
    
}

export default information;