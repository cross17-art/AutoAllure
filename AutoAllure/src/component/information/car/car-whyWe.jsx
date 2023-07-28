import { useState,useEffect } from "react";
import styleOrder from '../../../assets/css/orderSteps.module.scss'
import styleInformation from '../../../assets/css/Information.module.scss'

const carWhyWe = ({url}) => {
 
  return (
    <>
     <section data="car-why-we">
        <h1 className={styleOrder.order__line}>Reasons to choose <a>AUTO-ALLURE</a></h1>

        <div className={`${styleOrder.order} ${styleOrder.whyWe}`}>
            <div className={`${styleOrder['order__steps']} ${styleOrder['order__whyWe']}`}>
                <div className={`${styleOrder.whyWe__element} ${styleOrder['order__steps--element']}`}>
                    <span>01</span>
                    <h1>No speed limit</h1>
                    <p>We do not penalize speeding on our cars.</p>
                </div>
            </div>
            <div className={`${styleOrder['order__steps']} ${styleOrder['order__whyWe']}`}>
                <div className={`${styleOrder.whyWe__element} ${styleOrder['order__steps--element']}`}>
                    <span>02</span>
                    <h1>Showroom in Limassol City</h1>
                    <p>You can view any car in our showroom at the address: Limassol City, Leoforos Amathous 32 Zanna Complex Block 1 Shop 8.</p>
                </div>
            </div>
            <div className={`${styleOrder['order__steps']} ${styleOrder['order__whyWe']}`}>
                <div className={`${styleOrder.whyWe__element} ${styleOrder['order__steps--element']}`}>
                    <span>03</span>
                    <h1>Confidentiality</h1>
                    <p>We guarantee that no hidden audio and video recording devices are installed in our cars.</p>
                </div>
            </div>
            <div className={`${styleOrder['order__steps']} ${styleOrder['order__whyWe']}`}>
                <div className={`${styleOrder.whyWe__element} ${styleOrder['order__steps--element']}`}>
                    <span>04</span>
                    <h1>Additional services</h1>
                    <p>Upon request, we provide a personal driver. Who can show you the island or give you or your family a vacation in the capital of Cyprus</p>
                </div>
            </div>
            <div className={`${styleOrder['order__steps']} ${styleOrder['order__whyWe']}`}>
                <div className={`${styleOrder.whyWe__element} ${styleOrder['order__steps--element']}`}>
                    <span>05</span>
                    <h1>Customer Discounts</h1>
                    <p>Become our regular customer and get up to 50% discount on any car</p>
                </div>
            </div>
            <div className={`${styleOrder['order__steps']} ${styleOrder['order__whyWe']}`}>
                <div className={`${styleOrder.whyWe__element} ${styleOrder['order__steps--element']}`}>
                    <span>06</span>
                    <h1>Registration in 15 minutes</h1>
                    <p>Leave a request for rent and we will process the order within 15 minutes during business hours from 9.30 to 21.30.</p>
                </div>
            </div>
        </div>
     </section>
    </>
  );
};

export default carWhyWe;