import { useState,useEffect } from "react";

const carSpecifications = ({carData}) => {
 
  return (
    <>
      <div>
          <p><span>{carData.fuel}</span></p>
          <p><span>{carData.transmission.split(" ")[0]}</span></p>
          <p><span>{carData.number_seats} seats</span></p>
      </div>
      <div>
         {

         carData.options[0].map((item,index,carData2)=>{
          return(
            <span>{item.name}{index+1<carData2.length?", ":""}</span>
          )
         })}
      </div>
    </>
  );
};

export default carSpecifications;