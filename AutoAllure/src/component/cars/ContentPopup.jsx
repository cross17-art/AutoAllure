import React from "react";
import '../../assets/css/popup.scss'
import CarSlider from './car-sliderPhotose'
import CarSpecifications from './car-specifications'

export default ({ close, carData }) => (
    <div className="modal">
        <a className="modal_close" onClick={close}>
            &times;
        </a>
        <div className="modal_bookingDates">
            date selaction

            calendar
        </div>
        <div className="modal_information">
            <div className="modal_information-side">
                <CarSpecifications carData={carData}/>
            </div>
            <CarSlider photos={carData.photos} />
        </div>
    </div>
   );