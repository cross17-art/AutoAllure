import { useState,useEffect } from "react";
import Popup from "reactjs-popup";

import Content from "./ContentPopup";

const carItem = ({carData}) => {

  return (
    <div className="carList_item">
          <p>
            {carData.fullName} {carData.year}
            <span>
              {carData.body_type}
            </span>
          </p>
          <img className="carList_item-img" alt={carData.fullName} src={carData.thumbnail}/>

        <div className="carList_item-additionalInfo">
            <p><span>{carData.fuel}</span></p>
            <p><span>{carData.transmission.split(" ")[0]}</span></p>
            <p><span>{carData.number_seats} seats</span></p>

        </div>
        
        <div className="carList_item-monthPrice">
          <p>€{carData.monthPrice}/<spna>month</spna></p>
          <Popup modal trigger={<button className="btn">Rent Now</button>}>
                {close => <Content close={close} carData={carData} />}
          </Popup>
          
        </div>
    </div>
  );
};

export default carItem;