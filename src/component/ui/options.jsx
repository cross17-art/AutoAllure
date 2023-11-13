// https://auto-allure.com:2053/cars_id/v2?id=${carId}&group=${type}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function options({ carOptions }) {


    return (
      <>
        {carOptions.map((element)=>{
            return ( 
                <div key={element.name} className="carItem_additionalInfo-item">
                    <span>{element.name}</span>
                </div>
            )
        })}
      </>
    );
  
}

export default options;
