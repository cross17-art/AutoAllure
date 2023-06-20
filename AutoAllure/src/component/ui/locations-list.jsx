import { useState, useEffect } from "react";

const LocationsList = ({locations,setIsSelected,setIsActive,isActive}) => {
  return (
    <>
    {locations.map((element)=>{
        return ( 
            <div  key={element.id}  onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
            className="dropdown_content-item"
          >
            {element.name}
            
          </div>
        )
      })}
     </>
  );
};

export default LocationsList;
