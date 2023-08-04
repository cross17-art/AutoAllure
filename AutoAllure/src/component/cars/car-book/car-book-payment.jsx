import { useState, useEffect, useRef } from "react";
import stylePesonal from '../../../assets/css/personalDetailes.module.scss'
import PickUpDate from "../../ui/pickUpDates";

const carPayment = ({url}) => {


    return (
        <>
            <div className={`${stylePesonal.personal__driver}`}>
                <h1>Payment method</h1>
                <div className={`${stylePesonal.personal__element} `}>
                </div>
                
                <div className={stylePesonal['personal__driver--block']}>
                    <div className={stylePesonal['personal__driver--width']}>
                        <p>Pay by Cash 0% </p>
                    </div>
                    <div className={stylePesonal['personal__driver--width']}>
                        <p>Pay by Card 3.5%</p>
                    </div>

                </div>
            </div>
            
        </>
    );
};

export default carPayment;

