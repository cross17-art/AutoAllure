import { useState,useEffect,useRef  } from "react";
import styleOrder from '../../../assets/css/orderSteps.module.scss'
import styleInformation from '../../../assets/css/Information.module.scss'
import styleSpecifications from '../../../assets/css/car-specifications.module.scss'
const carPageSpecifications = ({carData}) => {
    
 
  return (
    <>
    

     <section data="car-specifications" > 
        

        <h1 className={styleOrder.order__line}>Vehicle  <a>Characteristics</a></h1>

        <div className={`${styleOrder['order']} ${styleSpecifications['order__specifications']}`}>
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
        </div>
     </section>
    </>
  );
};

export default carPageSpecifications;


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