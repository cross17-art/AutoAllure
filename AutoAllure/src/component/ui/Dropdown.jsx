import React from "react";
import { useState } from "react";

const Dropdown = ({ locationsDelivery }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one ...");
  function handleBlur(e) {
    console.log(e);
  }
  return (
      <div className="dropdown">
        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className="dropdown-btn"
        >
          {selected}
          <span
            className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
          />
        </div>
        <div
          className="dropdown_content"
          style={{ display: isActive ? "block" : "none" }}
        >
         {locationsDelivery.map((element)=>{
           return ( 
              <div
              onClick={(e) => {
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
  );
};

export default Dropdown;