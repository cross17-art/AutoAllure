import { useState,useEffect } from "react";
import styleOrder from '../../../assets/css/orderSteps.module.scss'
import styleInformation from '../../../assets/css/Information.module.scss'

const carPageSpecifications = ({tariffs,priceCar}) => {
 
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

     <section data="car-tariffs">
        <h1 className={styleOrder.order__line}><a>Rental</a>price</h1>

        <div className={`${styleOrder.order}`}>

            {
                tariffs.map((item)=>{
                    priceCar = parseFloat(priceCar)
                    let discount = item.discount;
                    let isDigitPositive = discount > 0 ? true:false;
                    discount = priceCar*discount/100;
                    let dayPrice = priceCar+discount;
                    return(
                        <div className={`${styleOrder['order__steps']} ${styleOrder['order__specifications']}`}>
                        <div className={`${styleOrder.spec} ${styleOrder['order__steps--element']}`}>
                            <span>Rent for {item.period_from}-{item.period_to} days </span>
                            <h1>{dayPrice} €</h1>
                            <p>day</p>
                        </div>
                    </div>
                    )
                })
            }

            

        </div>
     </section>
    </>
  );
};

export default carPageSpecifications;