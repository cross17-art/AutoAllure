import { useState, useEffect, useRef } from "react";
import stylePesonal from '../../../assets/css/personalDetailes.module.scss'
import PickUpDate from "../../ui/pickUpDates";

const carPayment = ({ url,handlePaymentTypeChange,handleInputFocus,errors,formData}) => {


    return (
        <>
            <section data="paymentMethod">
                <div className={stylePesonal['box']}>
                    <p className={stylePesonal['box__title']}>Payment method</p>
                    <div className={stylePesonal['personal__payment']}>
                        <label className={errors.paymentType != '' && errors.paymentType != undefined ? stylePesonal.personal__birthday_error : ""} >
                            <img src={url+"/icons/credit-card.png"}></img>
                            <input type="radio" className={`${stylePesonal["personal__payment--input-radio-on"]} ${stylePesonal["personal__payment--input-radio"]}`} name={"paymentType"} value={"Card"}  onClick={handlePaymentTypeChange} /> 
                            <span> Pay by Card</span>
                        </label>
                        <label className={errors.paymentType != '' && errors.paymentType != undefined ? stylePesonal.personal__birthday_error : ""} >
                            <img src={url+"/icons/money.png"}></img>
                            <input type="radio" className={`${stylePesonal["personal__payment--input-radio-off"]} ${stylePesonal["personal__payment--input-radio"]}`} name={"paymentType"} value={"Cash"} onClick={handlePaymentTypeChange} />  
                            <span>Pay by Cash</span>
                        </label>
                    </div>

                </div>
    
            </section>
        </>
    );
};

export default carPayment;

