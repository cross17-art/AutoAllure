import React from "react";
import { useState } from "react";
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
const Dropdown = ({ locationsDelivery,digit }) => {

  const [value, onChange] = useState('10:00')
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one ...");

  const [isActiveTime, setIsTimeActive] = useState(false);
  const [selectedTime, setIsTimeSelected] = useState("Time");

  return (
      <div className="dropdown" name={digit}>
        <div className="dropdown_btn" name='dropdownText'  >
          
          <span name='dropdownTextLocation' onClick={(e) => {setIsActive(!isActive);}}> {selected}</span>
          <span name='dropdownTextTime' onClick={(e) => {setIsTimeActive(!isActiveTime);}}>{value}</span>

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
          <div className="dropdown_time" style={{ display: isActiveTime ? "block" : "none" }}>
             <TimePicker onChange={onChange} value={value} locale="sv-sv" clockIcon={null}/>           
          </div>  
        </div>
      </div>
  );
};

export default Dropdown;