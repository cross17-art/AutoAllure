import { useState,useEffect,useRef } from "react";
import styleOrder from '../../../assets/css/orderSteps.module.scss'
import styleInformation from '../../../assets/css/Information.module.scss'

const carPageSpecifications = ({tariffs,priceCar}) => {
  tariffs.sort((elemetn1,element2)=>element2.period_to - elemetn1.period_to)

  const [isRunning, setIsRunning] = useState(true);

  const toggleAnimation = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };
  return (
    <>

     <section data="car-tariffs">
        <h1 className={styleOrder.order__line}><a>Rental</a>price</h1>

        <div className={`${styleOrder.order}`}>

            {
                tariffs.map((item,index)=>{
                    priceCar = parseFloat(priceCar)
                    let discount = item.discount;
                    discount = priceCar*discount/100;
                    let dayPrice = priceCar+discount;
                    return(
                      <div key={`tariff_${index}`} className={`${styleOrder['order__steps']}`}>
                          <div className={`${styleOrder['spec']} ${styleOrder['order__steps--element']}`}>
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