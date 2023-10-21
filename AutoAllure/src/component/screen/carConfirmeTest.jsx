// https://auto-allure.com:2053/cars_id/v2?id=${carId}&group=${type}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function carConfirmeTest({  }) {


  
  const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        city: '',
        address: '',
        phone: '',
        driverLicenceNumber: '',
        driverLicenceIssueDate: '',
        driverLicenceExpirationDate: '',
        birthday: '',
        paymentType: ''
    });



const [errors, setErrors] = useState({ ..."" });


const handleSubmit = (e) => {

   

        // Здесь можно выполнять действия после успешной отправки формы
        // Например, отправка данных на сервер

        let body ={
            firstName:"firstName,",
            lastName:"lastName,",
            email:"email,",
            country:"country,",
            city:"city,",
            address:"address,",
            phone:"phone,",
            driverLicenceNumber:"driverLicenceNumber,",
            driverLicenceIssueDate:"driverLicenceIssueDate,",
            driverLicenceExpirationDate:"driverLicenceExpirationDate,",
            birthday:"birthday,",
            paymentType:"paymentType,",
            equipment:" equipment.filter(item => item.value!=undefined),",
            company:" Cookies.get() === '' ? undefined : Cookies.get(),",
            order_id:" car.order_id"
        }

        fetch(`https://auto-allure.com:2053/booking-car/v2`,{
          method: "POST",
          body:JSON.stringify(body),
          headers:{'Content-Type': 'application/json'}
        })
         

        console.log('Форма отправлена успешно!');
};



    return (
      <>
            <div>
                <button onClick={handleSubmit}>text</button>
            </div>
      </>
    );
}

export default carConfirmeTest;
