import React from 'react';
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import styleCarHat from "../../../assets/css/carHat.module.scss"
function CarHat({carName}) {
  
  return (
        <div className={styleCarHat.carHat}>
            <div className={styleCarHat.carHat__element}>
                <h1>{carName.includes("undefined")?"":carName}</h1>
                <p>LUXURY CLASS</p>
            </div>
        </div>
  )
}

export default CarHat
