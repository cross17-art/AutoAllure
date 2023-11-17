import React, { useEffect, useState } from 'react';
import stylePesonal from '../../assets/css/personalDetailes.module.scss'
import stylePickUpDate from '../../assets/css/pickUpDate.module.scss'
import Datepicker from "react-tailwindcss-datepicker"

const BirthdayPicker = ({handleInputChange,handleInputFocus,errors,inputName}) => {
  const [stateError, setStateErrors] = useState(false);

  const checkYearsOfClient = (date)=> {
  
    if(inputName.includes("driverLicence")) return true
    const currentDate = new Date();
    const birthDate = new Date(date);
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    if (age >= 23) {
      console.log("Клиент старше или равен 23 годам.");
      return true
    } else {
      console.log("Клиент младше 23 лет.");
      return false
    }
  }

  useEffect(()=>{
    // console.log(errors)
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
      if(checkYearsOfClient(newValue.startDate)){
        setValue(newValue);
        handleInputChange({"name":inputName,"value":newValue.startDate})
      }else{
        setStateErrors(true)
      }
      
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
          popoverDirection="up"
          inputName={inputName}
      ></Datepicker>
        
    </div>
  );
};

export default BirthdayPicker;