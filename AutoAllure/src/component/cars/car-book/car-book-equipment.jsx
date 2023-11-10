import { useState, useEffect, useRef } from "react";
import stylePesonal from '../../../assets/css/personalDetailes.module.scss'
import PickUpDate from "../../ui/pickUpDates";

const carEquipment = ({url,option,equipment,title}) => {
    // let option = {
    //     "id": 2763,
    //     "title": "Baby Seat",
    //     "icon": "baby-seat-1-3",
    //     "price_day": "5.00",
    //     "max_quantity": 2,
    //     "quantity": 0,
    //     "type": "fix",
    //     "price": "0.00"
    //   }
    // let option = {
    //   "id": 2765,
    //   "title": "Extra Driver",
    //   "icon": "driver-young",
    //   "price_day": "5.00",
    //   "max_quantity": 3,
    //   "quantity": 0,
    //   "type": "tariff",
    //   "price": "0.00"
    // }
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        if(count<option.max_quantity){
            setCount((prevCount) =>prevCount + 1);
            let index = equipment.findIndex(obj => obj.title === title);
            equipment[index].value=count + 1;

            if(option.type==="tariff"){
            }
        }

    };
    
    const handleDecrement = (price_day) => {
       if(count>0){
            setCount((prevCount) =>prevCount-1);
            let index = equipment.findIndex(obj => obj.title === title);
            equipment[index].value=count - 1;

            let carPrice = document.querySelector("#carPrice span").innerText
            carPrice = parseFloat(carPrice.replace(/\s/g, ''))

            carPrice+=price_day
            const newSpan = carPrice.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }).replace(',', ' ');

            document.querySelector("#carPrice span").innerText = newSpan
        }
    };
    const handleCheckboxChange = (event) => {
        // Если чекбокс выбран, увеличиваем счетчик, иначе уменьшаем
        if (event.target.checked) {
          handleIncrement();
        } else {
          handleDecrement();
        }
      };
  
    return (
  
       
              <label>
                    <span className={stylePesonal.price}>
                       {option.type==="tarrif"?"€5/Day":" €5/Period"}
                     </span>
                  {/* <input type="checkbox" className={`${stylePesonal["personal__payment--input-radio-on"]} ${stylePesonal["personal__payment--input-radio"]}`} name="pilih" onChange={handleCheckboxChange} />                    */}
                  <p>{option.title}</p>
                  <button onClick={handleDecrement(option.price_day)} price={option.price_day}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            >
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <span className={stylePesonal['personal__payment--counter']}>{count}</span>
                    <button onClick={handleIncrement} price={option.price_day}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            >
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                    <img src={`/icons/${title}.png`}></img>
              </label>


    );
};

export default carEquipment;

