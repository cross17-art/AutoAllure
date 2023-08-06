import { useState,useEffect,useRef  } from "react";
import styleOrder from '../../../assets/css/orderSteps.module.scss'
import styleInformation from '../../../assets/css/Information.module.scss'
import styleSpecifications from '../../../assets/css/car-specifications.module.scss'
const carPageOptions = ({url,carData}) => {

  return (
    <>
    

     <section data="car-options" > 
        

        <div className="carItem_additionalInfo">
            <div className="carItem_additionalInfo-item">
                <img className="carItem_icon_Big" src={url + "car/gas.svg"}></img>
                <span>{carData.fuel}</span>
            </div>
            <div className="carItem_additionalInfo-item">
                <img
                className="carItem_icon_Big"
                src={carData.transmission.includes('Manual') ? url + "car/manual.svg" : url + "car/automatic.svg"}
                ></img>
                <span>{carData.transmission.split(" ")[0]}</span>
            </div>
            <div className="carItem_additionalInfo-item">
                <img className="carItem_icon_Big" src={url + "car/seat.svg"}></img>
                <span>{carData.number_seats} {carData.number_seats < 2 ? 'seat' : 'seats'}</span>
            </div>
        </div>
        <div className={styleSpecifications.options}>
            {carData.options[0].map((element)=>{
                    return ( 
                        <div className="carItem_additionalInfo-item">
                            {/* <i class="fa fa-check-square" aria-hidden="true"></i> */}
                            <span>{element.name}</span>
                        </div>
                    )
                })}
        </div>
        
     </section>
    </>
  );
};

export default carPageOptions;


{/* <h1 className={styleOrder.order__line}>Vehicle  <a>Characteristics</a></h1>

<div className={`${styleOrder.order}`}>
    <div className={`${styleOrder['order__steps']} ${styleOrder['order__specifications']}`}>
        <div className={`${styleOrder.spec} ${styleOrder['order__steps--element']}`}>
            <span> Transmission</span>
            <h1>{carData.transmission.split(" ")[0]}</h1>
        </div>
    </div>
    <div className={`${styleOrder['order__steps']} ${styleOrder['order__specifications']}`}>
        <div className={`${styleOrder.spec} ${styleOrder['order__steps--element']}`}>
            <span>Body type</span>
            <h1>{carData.body_type}</h1>
        </div>
    </div>
    <div className={`${styleOrder['order__steps']} ${styleOrder['order__specifications']}`}>
        <div className={`${styleOrder.spec} ${styleOrder['order__steps--element']}`}>
            <span>Number seats</span>
            <h1>{carData.number_seats}</h1>
        </div>
    </div>
    <div className={`${styleOrder['order__steps']} ${styleOrder['order__specifications']}`}>
        <div className={`${styleOrder.spec} ${styleOrder['order__steps--element']}`}>
            <span>Bags</span>
            <h1>{carData.large_bags}</h1>
        </div>
    </div>
    <div className={`${styleOrder['order__steps']} ${styleOrder['order__specifications']}`}>
        <div className={`${styleOrder.spec} ${styleOrder['order__steps--element']}`}>
            <span>Volume engine</span>
            <h1>{carData.volume_engine}</h1>
        </div>
    </div>
</div> */}