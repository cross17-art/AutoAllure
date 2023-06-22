import { useState, useEffect } from "react";
import Popup from "reactjs-popup";

import Content from "./ContentPopup";
import "../../assets/css/carItem.scss";

const CarItemNew = ({ carData, url }) => {
  // const url = "http://localhost:5173/";

  return (
    <div className="carItem" id={carData.id}>
      <img
        className="carItem_img"
        alt={carData.fullName}
        src={carData.thumbnail}
      />
      <div className="carItem_info">
        <p className="carItem_info-title">
          {carData.fullName} {carData.year}
          <span className="carItem_info-subtitle">{carData.body_type}</span>
        </p>

        <div className="carItem_additionalInfo">
          <div className="carItem_additionalInfo-item">
            <img className="carItem_icon" src={url + "car/gas.svg"}></img>
            <span>{carData.fuel}</span>
          </div>
          <div className="carItem_additionalInfo-item">
            <img
              className="carItem_icon"
              src={carData.transmission.includes('Manual') ? url + "car/manual.svg" : url + "car/automatic.svg"}
            ></img>
            <span>{carData.transmission.split(" ")[0]}</span>
          </div>
          <div className="carItem_additionalInfo-item">
            <img className="carItem_icon" src={url + "car/seat.svg"}></img>
            <span>{carData.number_seats} {carData.number_seats < 2 ? 'seat' : 'seats'}</span>
          </div>
        </div>

        <div className="carItem_price">
          {carData.monthPrice === undefined ? (
            <p className="carItem_price-text">
              €{carData.total_price}/<span>period</span>
            </p>
          ) : (
            <p className="carItem_price-text">
              €{carData.monthPrice}/<span>month</span>
            </p>
          )}

          <button className="carItem_btn btn btn-orange">Rent Now</button>
        </div>
      </div>
    </div>
  );
};

export default CarItemNew;
