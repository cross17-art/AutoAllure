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
          <div>
            <img src="./gas.png"></img><span>{carData.fuel}</span>
          </div>
          <div>
            <img src="./manual-transmission.png"></img>
            <span>{carData.transmission.split(" ")[0]}</span>
          </div>
          <div>
            <img src="./car-seat.png"></img>
            <span>{carData.number_seats} seats</span>
          </div>
        

        </div>
        
        <div className="carList_item-monthPrice">
          <p>€{carData.monthPrice}/<span>month</span></p>
          <Popup modal trigger={<button className="btn btn-orange">Rent Now</button>}>
                {close => <Content close={close} carData={carData} />}
          </Popup>
          
        </div>
    </div>
  );
};

export default carItem;