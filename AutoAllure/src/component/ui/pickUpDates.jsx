import React, { useEffect, useState } from 'react';
import stylePesonal from '../../assets/css/personalDetailes.module.scss'
import stylePickUpDate from '../../assets/css/pickUpDate.module.scss'
import Datepicker from "react-tailwindcss-datepicker"

const BirthdayPicker = ({handleInputChange,handleInputFocus,errors,inputName}) => {
  const [stateError, setStateErrors] = useState(false);

  useEffect(()=>{
    console.log(errors)
    if(errors){
      errors[inputName]!='' &&errors[inputName]!=undefined?setStateErrors(true):setStateErrors(false)
    }
  },[errors])

  const [value, setValue] = useState({
      startDate: "",
      endDate: ""
  });

  const handleValueChange = (newValue) => {
      console.log("newValue:", newValue);

      setValue(newValue);
      handleInputChange({"name":inputName,"value":newValue})
      // event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("input")
  }
  return (
    <div className={stylePickUpDate.date}>
      <Datepicker key={'datePicker'}
          inputClassName={`w-full rounded-md focus:ring-0 font-normal bg-white-100 dark:bg-white-900 dark:placeholder:text-white-100 ${stateError?stylePesonal.personal__birthday_error:""}`}
          toggleClassName="hidden " 
          useRange={false}
          primaryColor={"orange"}
          value={value}
          asSingle={true}
          onChange={handleValueChange} 
          popoverDirection="down"
          inputName={inputName}
      ></Datepicker>
        
    </div>
  );
};

export default BirthdayPicker;