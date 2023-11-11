import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import Content from "./ContentPopup";
// import Popup from "reactjs-popup";

import Cookies from "js-cookie";
import "../../assets/css/carItem.scss";

const CarItemNew = ({ additionalStyle, carData, url, type, button }) => {
  // const url = "http://localhost:5173/";
  const navigate = useNavigate();
  const [request, setRequest] = useState(false);

  useEffect(() => {
    Cookies.set("company", carData.company, { expires: 7 });
    Cookies.set("carId", carData.id, { expires: 7 });

    if (request === "carPage") {
      navigate(`/car-page/${carData.id}`);
    } else if (request === "carBook") {
      navigate(`/car-book/${carData.id}`);
    }
  }, [request]);

  return (
    <div
      className={"carItem" + " " + additionalStyle}
      id={carData.id}
      company={carData.company}
      onClick={() =>
        type === "page" ? setRequest("carPage") : setRequest("carBook")
      }
    >
      <img
        className="carItem_img"
        alt={carData.fullName}
        src={carData.thumbnail}
      />
      <div className="carItem_info">
        <div>
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
                src={
                  carData.transmission.includes("Manual")
                    ? url + "car/manual.svg"
                    : url + "car/automatic.svg"
                }
              ></img>
              <span>{carData.transmission.split(" ")[0]}</span>
            </div>
            <div className="carItem_additionalInfo-item">
              <img className="carItem_icon" src={url + "car/seat.svg"}></img>
              <span>
                {carData.number_seats}{" "}
                {carData.number_seats < 2 ? "seat" : "seats"}
              </span>
            </div>
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

          <button
            className="carItem_btn btn btn-orange"
            onClick={() =>
              type === "page" ? setRequest("carPage") : setRequest("carBook")
            }
          >
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarItemNew;
