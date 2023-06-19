import { useState, useEffect } from "react";
import Popup from "reactjs-popup";

import Content from "./ContentPopup";

const carItem = ({ carData }) => {
  const url = "http://localhost:5173/"
  return (
    <div className="carList_item" carId={carData.id}>
      <img
        className="carList_item-img"
        alt={carData.fullName}
        src={carData.thumbnail}
      />

      <p className="carList_item-info">
        {carData.fullName} {carData.year}
        <span>{carData.body_type}</span>
      </p>

      <div className="carList_item-additionalInfo">
        <div>
          <img src={url+"gas.png"}></img>
          <span>{carData.fuel}</span>
        </div>
        <div>
          <img src={url+"manual-transmission.png"}></img>
          <span>{carData.transmission.split(" ")[0]}</span>
        </div>
        <div>
          <img src={url+"car-seat.png"}></img>
          <span>{carData.number_seats} seats</span>
        </div>
      </div>

      <div className="carList_item-periodPrice">
          { carData.monthPrice===undefined ? (
            <p>€{carData.total_price}/<span>period</span></p>
          ) : (
            <p>€{carData.monthPrice}/<span>month</span></p>
          )}
       
        <Popup
          modal
          trigger={<button className="btn btn-orange">Rent Now</button>}
        >
          {(close) => <Content close={close} carData={carData} />}
        </Popup>
      </div>
    </div>
  );
};

export default carItem;
