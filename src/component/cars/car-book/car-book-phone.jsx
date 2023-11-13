import { useState, useEffect, useRef } from "react";
import stylePesonal from '../../../assets/css/personalDetailes.module.scss'
import stylePickUpDate from '../../../assets/css/pickUpDate.module.scss'

import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
const carPhone = ({formData,handleInputChange,handleInputFocus,errors,inputName}) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [stateError, setStateErrors] = useState(false);


    useEffect(()=>{
        // console.log(errors)
        if(errors){
          errors[inputName]!='' &&errors[inputName]!=undefined?setStateErrors(true):setStateErrors(false)
        }
      },[errors])
      
    const handleValueChange = (newValue) => {
        // console.log("newValue:", newValue);
        setPhoneNumber(phoneNumber);
        handleInputChange({"name":inputName,"value":newValue})
        // event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("input")
    }


    return (
        <div className={stylePesonal['personal__driver--block']}>
            <div className={stylePesonal['personal__driver']}>
                <p>Phone</p>
                <PhoneInput
                    country={'cy'} // Начально выбранная страна (в данном примере США)
                    value={phoneNumber}
                    onChange={handleValueChange}
                    onFocus={handleInputFocus}
                    buttonClass={stateError?stylePesonal.personal__birthday_error:""}
                    inputClass={stateError?stylePesonal.personal__birthday_error:""}
                    placeholder="Enter phone number"
                    inputProps={{
                        name: inputName,
                        required: true,
                    }}
                />
    
            </div>

        </div>

    );
};

export default carPhone;

