import { useState, useEffect, useRef } from "react";
import stylePesonal from '../../../assets/css/personalDetailes.module.scss'
import PickUpDate from "../../ui/pickUpDates";

const carPayment = ({ url }) => {


    return (
        <>
            <section data="paymentMethod">
                <div className={stylePesonal['box']}>
                    <p>Payment method</p>
                    <div className={stylePesonal['personal__payment']}>
                        <label>
                            <img src={url+"/icons/credit-card.png"}></img>
                            <input type="radio" className={`${stylePesonal["personal__payment--input-radio-on"]} ${stylePesonal["personal__payment--input-radio"]}`} name="pilih" /> 
                            <span> Pay by Card</span>
                        </label>
                        <label>
                            <img src={url+"/icons/money.png"}></img>
                            <input type="radio" className={`${stylePesonal["personal__payment--input-radio-off"]} ${stylePesonal["personal__payment--input-radio"]}`} name="pilih" />  
                            <span>Pay by Cash</span>
                        </label>
                    </div>

                </div>
    
            </section>
        </>
    );
};

export default carPayment;

