import React from "react";
import { useState,useRef } from "react";

import LocationsList from "./locations-list";
import TimeList from "./time-list";
import { useEffect } from "react";
import '../../assets/css/datePickerBlock.scss'


const Dropdown = ({ locationType,locationsDelivery,digit,containerClass }) => {
  

  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState(locationsDelivery[0].name);

 
  const [isActiveTime, setIsTimeActive] = useState(false);
  const [selectedTime, setIsTimeSelected] = useState("10:30");


  const toolTipLocationRef = useRef(null)
  const toolTipTimeRef = useRef(null)

  useEffect(()=>{
    if(!isActive)return;
    const handlerLocationClick = e =>{
      if(!toolTipLocationRef.current)return
      if(!toolTipLocationRef.current.contains(e.target) && e.target!=e.target.parentElement.querySelector(`[name=dropdownTextLocation${locationType}]`)){
        setIsActive(!isActive)
      }
    }

    document.addEventListener("click",handlerLocationClick)
    // return ()=>{
    //   document.removeEventListener("click",handlerLocationClick)
    // }

  },[isActive])

  useEffect(()=>{
    if(!isActiveTime)return;
  
    if(!isActiveTime)return;
    const handlerTimeClick = e =>{
      if(!toolTipTimeRef.current)return
      if(!toolTipTimeRef.current.contains(e.target) && e.target!=e.target.parentElement.querySelector(`[name=dropdownTextTime${locationType}]`)){
        setIsTimeActive(!isActiveTime)
      }
    }
    document.addEventListener("click",handlerTimeClick)
    return () => {
      document.removeEventListener("click", handlerTimeClick);
    }
  },[isActiveTime])

  return (
      <div className={`dropdown ${containerClass}`} name={digit}>
        <div className="dropdown_btn" name='dropdownText'  >
          
          <span name={'dropdownTextLocation'+locationType} onClick={(e) => {setIsActive(!isActive);}}> {selected}</span>
          <span name={'dropdownTextTime'+locationType} onClick={(e) => {setIsTimeActive(!isActiveTime);}}>{selectedTime}</span>


          <div ref={toolTipLocationRef} className="dropdown_content" style={{ display: isActive ? "block" : "none" }}>
            <LocationsList key={"LocationsList"} locations={locationsDelivery} setIsSelected={setIsSelected} setIsActive={setIsActive} isActive={isActive}  />
          </div>  
          <div ref={toolTipTimeRef} className="dropdown_time" style={{ display: isActiveTime ? "block" : "none" }}>
             <TimeList key={"timeList"} setIsTimeSelected={setIsTimeSelected} setIsTimeActive={setIsTimeActive} isActiveTime={isActiveTime}   />
          </div>  
        </div>
      </div>
  );
};

export default Dropdown;