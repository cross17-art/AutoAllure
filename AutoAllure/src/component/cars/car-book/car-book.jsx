// https://auto-allure.com:2053/cars_id/v2?id=${carId}&group=${type}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CarSlider from "../car-sliderPhotose";
import syleCarPage from "../../../assets/css/carPage.module.scss";
import styleCarBook from "../../../assets/css/carBook.module.scss";
import stylePesonal from '../../../assets/css/personalDetailes.module.scss'

import styleOrder from "../../../assets/css/orderSteps.module.scss";

import CalendarPage from "../../../component/ui/calendar-page";
import CarPageSpecifications from "../car-page/car-page-specifications";
import CarPageTariffs from "../car-page/car-page-tariffs";
import CarPersonalDetailes from "../../../component/cars/car-book/car-book-personalDetailes";
import CarPayment from "../../../component/cars/car-book/car-book-payment";
import CarEquipment from "../../../component/cars/car-book/car-book-equipment";
import CarWhyWe from "../../information/car/car-whyWe";
import CarPageOptions from "../../../component/cars/car-page/car-page-options";

function carBook({ url, error, isLoaded, car, locations, orderDate, carDescriptions }) {


  
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

const equipment = car.options;


const [errors, setErrors] = useState({ ..."" });

const handleInputChange = (e) => {
    if(e.target.parentElement.getAttribute("name") === "paymentType"){
      let name = e.target.parentElement.getAttribute("name");
      let value = e.target.parentElement.getAttribute("value");
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    }

    if(e.target === undefined){
        let { name, value } = e;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    }else{
        let { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
};

const handleInputFocus = (e) => {
    const { name, value } = e.target;

    setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
    }));

};
const isDrivingLicenseValid = (licenseNumber) => {
    // Проверяем формат номера прав "N000NNNNN" с помощью регулярного выражения
    const validationResult = validateLicense(licenseNumber);
    return validationResult.isValid;
};

const isDateValid = (dateString) => {
    // Проверяем формат даты "YYYY-MM-DD" с помощью регулярного выражения
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(dateString);
};
const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};
const validatePhone = (phoneNumber) => {
    const phonePattern = /^[1-9]\d{0,2}\s?\d{1,4}\s?\d{1,4}$/;
    return phonePattern.test(phoneNumber);
};

const handleSubmit = (e) => {
    e.preventDefault();

    // Проверяем, все ли поля заполнены
    const validationErrors = {};
    if (!formData.firstName.trim()) {
        validationErrors.firstName = 'Enter your name';
    }
    if (!formData.lastName.trim()) {
        validationErrors.lastName = 'Enter your last name';
    }
    if (!formData.email.trim() || !validateEmail(formData.email.trim())) {
        validationErrors.email = 'Enter your email address';
    }

    if (!formData.country.trim()) {
        validationErrors.country = 'Enter your country';
    }

    if (!formData.city.trim()) {
        validationErrors.city = 'Enter your city';
    }

    if (!formData.address.trim()) {
        validationErrors.address = 'Enter your address';
    }

    if (!formData.phone.trim() || !validatePhone(formData.phone.trim())) {
        validationErrors.phone = 'Enter your phone number';
    }

    if (!formData.driverLicenceNumber.trim()) {
        validationErrors.driverLicenceNumber = 'Enter number';
    }

    if (!formData.driverLicenceIssueDate.trim()) {
        validationErrors.driverLicenceIssueDate = 'Issue date';
    }

    if (!formData.driverLicenceExpirationDate.trim()) {
        validationErrors.driverLicenceExpirationDate = 'Expiration date';
    }

    if (!formData.birthday.trim()) {
        validationErrors.birthday = 'Enter your birthday';
    }

    if (!formData.paymentType.trim()) {
      validationErrors.paymentType = 'Chouse your payment type';
    }


    // Если есть ошибки, устанавливаем их в состояние, иначе выполняем действия после успешной отправки
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
    } else {

        // Здесь можно выполнять действия после успешной отправки формы
        // Например, отправка данных на сервер

        let body ={
          firstName:firstName,
          lastName:lastName,
          email:email,
          country:country,
          city:city,
          address:address,
          phone:phone,
          driverLicenceNumber:driverLicenceNumber,
          driverLicenceIssueDate:driverLicenceIssueDate,
          driverLicenceExpirationDate:driverLicenceExpirationDate,
          birthday:birthday,
          paymentType:paymentType,
          equipment: equipment.filter(item => item.value!=undefined),
          company: Cookies.get("company") === '' ? undefined : Cookies.get("company"),
          order_id: car.order_id
        }

        fetch(`https://auto-allure.com:2053/booking-car/v2`,{
          method: "POST",
          body:JSON.stringify(body),
          headers:{'Content-Type': 'application/json'}
        })
         

        console.log('Форма отправлена успешно!');
    }
};


  if (error) {
    return (
      <div>
        We apologize, someone is already renting a car. Try again in a couple of
        minutes
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else {
    let arrayPhoto =[]
    arrayPhoto.push(carDescriptions.thumbnail)
    return (
      <>
        <div className="wrapper">
          <div className={styleCarBook["book"]}>
            <div className={styleCarBook["book__info"]}>
              <h1>Заголовок основной информации</h1>
              <div>
                <img src={carDescriptions.thumbnail}/>
                <CarPageOptions url={url} carData={carDescriptions} />
              </div>
              <p>Дополнительные детали и описание.</p>
              <div className={stylePesonal["box"]}>
                <p>Equipment</p>
                <div className={stylePesonal["personal__payment"]}>
                  {car.options.map((element) => {
                    //create Full Name of Car
                    // let name = element.title.includes("Driver")
                    //   ? "driver"
                    //   : "baby-car-seat";
                    

                    return (
                      <CarEquipment
                        key={element.id}
                        url={url}
                        option={element}
                        equipment={equipment}
                        title={element.title}
                      />
                    );
                  })}
                </div>
              </div>
              {/* <CarEquipment url={url} name={"driver"}/> */}
              <CarPayment url={url} handleInputChange={handleInputChange} handleInputFocus={handleInputFocus} errors={errors} formData={formData}/>
              <CarPersonalDetailes handleInputChange={handleInputChange} handleInputFocus={handleInputFocus} errors={errors} formData={formData}/>
              <button onClick={handleSubmit}>Отправить</button>
            </div>
            <div className={styleCarBook["book__payment"]}>
              <div className={styleCarBook["book__payment--sticky"]}>
                <h2>Calculation Info</h2>
                <div className={syleCarPage["carPage__text--row"]}>
                  <p> Start Date </p>
                  <span>{orderDate[0]}</span>
                </div>
                <div className={syleCarPage["carPage__text--row"]}>
                  <p> End Date </p>
                  <span>{orderDate[1]}</span>
                </div>
                <div className={syleCarPage["carPage__text--row"]}>
                  <p> Car Price </p>
                  <span>{car.total_price}</span>
                </div>
                <div className={syleCarPage["carPage__text--row"]}>
                  <p> Service Fee </p>
                  <span>{car.taxes.taxesTotal}</span>
                </div>
                <div className={syleCarPage["carPage__text--row"]}>
                  <p> Pick-up Location </p>
                  <span>{locations.get}</span>
                </div>
                <div className={syleCarPage["carPage__text--row"]}>
                  <p> Drop-off Location</p>
                  <span>{locations.return}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <CarWhyWe />
      </>
    );
  }
}

export default carBook;
