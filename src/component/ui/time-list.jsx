import React from "react";
import { useState } from "react";

import { timeArray } from "../../assets/js/timeArray";



const TimeList = ({setIsTimeSelected, setIsTimeActive, isActiveTime}) => {

    
    return (
        <>
        {timeArray.map((element)=>{
            return ( 
                <div key={element} onClick={(e) => {
                  setIsTimeSelected(e.target.textContent);
                  setIsTimeActive(!isActiveTime);
                }}
                className="dropdown_content-item"
              >
                {element}
              </div>
            )
          })}
        </>
    );
  };
  
  export default TimeList;