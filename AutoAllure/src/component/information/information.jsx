import { useState,useEffect } from 'react'
import styleInformation from '../../assets/css/Information.module.scss'
// import FAQS from './faqs'
// import AboutUs from './aboutUs'
import Reviews from './reviews';

function information({url}) {
  
    return(
     <>

        <div className={`${styleInformation.information} ${styleInformation.info}`}>
        <h1>Our Service</h1>

            <div className={styleInformation["information__row"]}>
                <div className={styleInformation['information__row--block']}>
                    <img src={url+"/icons/insurance.png"} alt='insurance'></img>
                    <p>
                        Insurance.Receive your car promptly, ready to go with mixed insurance and paid road tax. Your monthly rent also includes repairs and maintenance.
                    </p>
                </div>
                <div className={styleInformation['information__row--block']}>
                    <img src={url+"/icons/loupe.png"} alt='loupe'></img>
                    <p>
                        Flexible conditions.Find the specific AutoAllure that fits your needs. We offer ready to deliver, almost new cars from reputable dealers.
                    </p>
                </div>
                <div className={styleInformation['information__row--block']}>
                    <img src={url+"/icons/care.png"} alt='care'></img>
                    <p>              
                        Support.You can always contact us with any questions. We always say our client is our family
                    </p>
                </div>
            </div>
        </div>
        <Reviews />
{/* 
        <FAQS />
        <AboutUs url={url} /> */}
     </>
    )
    
    
}

export default information;