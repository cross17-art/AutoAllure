import { useState,useEffect } from "react";
import styleOrder from '../../../assets/css/orderSteps.module.scss'
import styleInformation from '../../../assets/css/Information.module.scss'

const carPageSpecifications = ({carData}) => {
 
  return (
    <>
      <div>
         {/* {

         carData.options[0].map((item,index,carData2)=>{
          return(
            <span key={index}>{item.name}{index+1<carData2.length?", ":""}</span>
          )
         })} */}
      </div>

     <section data="car-specifications">
            <h1 className={styleOrder.order__line}>Vehicle  <a>Characteristics</a></h1>

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

        </div>
     </section>
    </>
  );
};

export default carPageSpecifications;