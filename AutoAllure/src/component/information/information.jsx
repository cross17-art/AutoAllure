import { useState,useEffect } from 'react'
import '../../assets/css/Information.scss'
import FAQS from './faqs'
import AboutUs from './aboutUs'


function information() {
  
    return(
     <>
        <div className='information info'>
            
            <div className='information_row'>
                <h1>Our Service</h1>

                <div className='information_row-block'>
                    <img src='./icons/insurance.png' alt='insurance'></img>
                    <p>
                        Insurance.Receive your car promptly, ready to go with mixed insurance and paid road tax. Your monthly rent also includes repairs and maintenance.
                    </p>
                </div>
                <div className='information_row-block'>
                    <img src='./icons/loupe.png' alt='loupe'></img>
                    <p>
                        Flexible conditions.Find the specific AutoAllure that fits your needs. We offer ready to deliver, almost new cars from reputable dealers.
                    </p>
                </div>
                <div className='information_row-block'>
                    <img src='./icons/care.png' alt='care'></img>
                    <p>              
                        Support.You can always contact us with any questions. We always say our client is our family
                    </p>
                </div>
            </div>
        </div>

        <FAQS />
        <AboutUs />
     </>
    )
    
    
}

export default information;