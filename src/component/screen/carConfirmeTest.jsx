// https://auto-allure.com:2053/cars_id/v2?id=${carId}&group=${type}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import styleBanner from "../../assets/css/banner.module.scss";
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
        let front = document.querySelector("[name=photoFront]").files[0]
        let back = document.querySelector("[name=photoBack]").files[0]
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
            order_id:" car.order_id",
            fileFront:front,
            fileBack:back
        }
        const data = new FormData();
        data.append("company", "asdasd")
        data.append("order_id", "car.order_id")
        data.append("fileFront", front)
        data.append("fileBack", back)

        fetch(`https://auto-allure.com:2053/test`,{
          method: "POST",
          body: data,
        }).then(res=>res.json())
        .then(
          (result)=>{
            console.log(result)
          }
        )
         

        console.log('Форма отправлена успешно!');
};



    return (
      <>
            <div>
            <div className="photo-upload-form">
                <label >
                    <input type="file" name="photoFront" accept=".jpg, .png" />		
                    <span className={`${styleBanner.banner_btn} positionation__display--item_4 btn btn-outline primary `}>
                    </span> 
                </label>
                <label >
                    <input type="file" name="photoBack" accept=".jpg, .png"  />		
                    <span className={`${styleBanner.banner_btn} positionation__display--item_5 btn btn-outline secondary `}>
                    </span> 
                </label>
                <button onClick={() => handleSubmit()}>send</button>
            </div>
            </div>
      </>
    );
}

export default carConfirmeTest;
