import React from 'react';

import '../../assets/css/welcomeBlock.scss'
import CarDatePicker from "../../component/ui/calendar";



function Welcomblock() {

  return (
    <>
    <div className='welcomeBanner'>

    <div className='header_hat-banner-text'>
        <p>Drive your dream</p>
        <span>find your car</span>
    </div>

    <CarDatePicker key={'CarListDatePicker'}/>

            
    <div className='header_hat-banner-selector'>
        <button className="btn btn-orange">Rent next month</button>
        <button className="btn btn-black">Rent Now</button>
    </div>
             
    </div>
    </>
  )
}

export default Welcomblock
