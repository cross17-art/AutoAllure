import { useState,useEffect } from 'react'
import styleInformation from '../../assets/css/Information.module.scss'
import styleOrder from '../../assets/css/orderSteps.module.scss'
// import FAQS from './faqs'
// import AboutUs from './aboutUs'

function OrderSteps({url}) {
  
    return(
     <section data="orderSteps">
            <h1 className={styleOrder.order__line}>Just <a>3 steps</a> to rent</h1>

        <div className={`${styleOrder.order}`}>
            <div className={styleOrder.order__steps}>
                <div className={styleOrder['order__steps--element']}>
                    <span>01</span>
                    <h1>Application</h1>
                    <p>Make an application on the website, contact by phone or in messengers and book a car</p>
                </div>
            </div>
            <div className={styleOrder.order__steps}>
                <div className={styleOrder['order__steps--element']}>
                    <span>02</span>
                    <h1>Receiving</h1>
                    <p>Pick up a car in our showroom or we can deliver it to any point in Cyprus</p>
                </div>

            </div>
            <div className={styleOrder.order__steps}>
                <div className={styleOrder['order__steps--element']}>
                    <span>03</span>
                    <h1>Contract</h1>
                    <p>Sign a car rental agreement, make a payment and an insurance deposit</p>
                </div>
            </div>

        </div>
     </section>
    )
    
    
}

export default OrderSteps;