import { useState, useEffect } from "react";
import Popup from "reactjs-popup";

import Content from "./ContentPopup";
import "../../assets/css/carItem.scss";

const CarItemNew = ({ carData }) => {
  const url = "http://localhost:5173/";
  return (
    <div className="carItem" carId={carData.id}>
      <img
        className="carItem_img"
        alt={carData.fullName}
        src={carData.thumbnail}
      />
      <div className="carItem_info">
        <p>
          {carData.fullName} {carData.year}
          <span>{carData.body_type}</span>
        </p>

        <div className="carItem_additionalInfo">
          <div className="carItem_additionalInfo-item">
            <img src={url + "gas.png"}></img>
            <span>3.0 ltr</span>
            <span>/{carData.fuel}</span>
          </div>
          <div  className="carItem_additionalInfo-item">
            <img src={url + "manual-transmission.png"}></img>
            <span>{carData.transmission.split(" ")[0]}</span>
          </div>
          <div  className="carItem_additionalInfo-item">
            <img src={url + "car-seat.png"}></img>
            <span>{carData.number_seats} seats</span>
          </div>
        </div>

        <div className="carItem_periodPrice">
          {carData.monthPrice === undefined ? (
            <p>
              €{carData.total_price}/<span>period</span>
            </p>
          ) : (
            <p>
              €{carData.monthPrice}/<span>month</span>
            </p>
          )}

          <Popup
            modal
            trigger={
              <button className="carItem_btn btn btn-orange">Rent Now</button>
            }
          >
            {(close) => <Content close={close} carData={carData} />}
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default CarItemNew;
