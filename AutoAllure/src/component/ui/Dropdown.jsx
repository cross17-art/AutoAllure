import React from "react";
import { useState } from "react";

const Dropdown = ({ locationsDelivery }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one ...");

  const [isActiveTime, setIsTimeActive] = useState(false);
  const [selectedTime, setIsTimeSelected] = useState("Choose one ...");

  return (
      <div className="dropdown">
        <div className="dropdown_btn" name='dropdownText' onClick={(e) => {setIsActive(!isActive);}} >
          {selected} 
          <span
            className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
          />
          <div className="dropdown_content" style={{ display: isActive ? "block" : "none" }}>
            {locationsDelivery.map((element)=>{
              return ( 
                  <div onClick={(e) => {
                    setIsSelected(e.target.textContent);
                    setIsActive(!isActive);
                  }}
                  className="dropdown_content-item"
                >
                  {element.name}
                </div>
              )
            })}
          </div>
        </div>
        <div className="dropdown_btn" name='dropdownText' onClick={(e) => {setIsActive(!isActive);}} >
          {selected} 
          <span
            className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
          />
          <div className="dropdown_content" style={{ display: isActive ? "block" : "none" }}>
            {locationsDelivery.map((element)=>{
              return ( 
                  <div onClick={(e) => {
                    setIsSelected(e.target.textContent);
                    setIsActive(!isActive);
                  }}
                  className="dropdown_content-item"
                >
                  {element.name}
                </div>
              )
            })}
          </div>
        </div>
      </div>
  );
};

export default Dropdown;