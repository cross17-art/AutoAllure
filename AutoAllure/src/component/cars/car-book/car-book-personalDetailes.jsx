import { useState, useEffect, useRef } from "react";
import styleOrder from '../../../assets/css/orderSteps.module.scss'
import styleInformation from '../../../assets/css/Information.module.scss'
import styleSpecifications from '../../../assets/css/car-specifications.module.scss'
import stylePesonal from '../../../assets/css/personalDetailes.module.scss'

import CarDriverLicence from './car-book-driverLicence'
import CarPhone from "./car-book-phone";
const carPersonalDetailes = ({ carData }) => {

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
        birthday: ''
    });

    const [errors, setErrors] = useState({ ..."" });

    const handleInputChange = (e) => {
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


        // Если есть ошибки, устанавливаем их в состояние, иначе выполняем действия после успешной отправки
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);

        } else {

            // Здесь можно выполнять действия после успешной отправки формы
            // Например, отправка данных на сервер
            console.log('Форма отправлена успешно!');
        }
    };
    return (
        <>


            <section data="car-personalDetailes" >
                
                <div className={stylePesonal.personal}>
                    <CarPhone formData={formData} handleInputChange={handleInputChange} handleInputFocus={handleInputFocus} errors={errors} inputName="phone" />
                    <CarDriverLicence formData={formData} handleInputChange={handleInputChange} handleInputFocus={handleInputFocus} errors={errors} />
                    <div className={stylePesonal.personal__element}>
                        <label>Name:</label>
                        <input className={errors.firstName != '' && errors.firstName != undefined ? stylePesonal.personal__birthday_error : ""} type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} onFocus={handleInputFocus} placeholder="First name" />
                    </div>
                    <div className={stylePesonal.personal__element}>
                        <label>Last name:</label>
                        <input className={errors.lastName != '' && errors.lastName != undefined ? stylePesonal.personal__birthday_error : ""} type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} onFocus={handleInputFocus} placeholder="Last name" />
                    </div>
                    <div className={stylePesonal.personal__element}>
                        <label>Email:</label>
                        <input className={errors.email != '' && errors.email != undefined ? stylePesonal.personal__birthday_error : ""} type="email" name="email" value={formData.email} onChange={handleInputChange} onFocus={handleInputFocus} placeholder="Email" />
                    </div>

                    <div className={stylePesonal.personal__element}>
                        <label>Country:</label>
                        <input className={errors.country != '' && errors.country != undefined ? stylePesonal.personal__birthday_error : ""} type="text" name="country" value={formData.country} onChange={handleInputChange} onFocus={handleInputFocus} placeholder="Country" />
                    </div>
                    <div className={stylePesonal.personal__element}>
                        <label>City:</label>
                        <input className={errors.city != '' && errors.city != undefined ? stylePesonal.personal__birthday_error : ""} type="text" name="city" value={formData.city} onChange={handleInputChange} onFocus={handleInputFocus} placeholder="City" />
                    </div>
                    <div className={stylePesonal.personal__element}>
                        <label>Address:</label>
                        <input className={errors.address != '' && errors.address != undefined ? stylePesonal.personal__birthday_error : ""} type="text" name="address" value={formData.address} onChange={handleInputChange} onFocus={handleInputFocus} placeholder="Address" />
                    </div>
                    <button onClick={handleSubmit}>Отправить</button>
                </div>

            </section>
        </>
    );
};

export default carPersonalDetailes;
{/* <div className={stylePesonal.personal__element}> 
<label>Phone:</label>
<input type="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
{errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
</div>
<div className={stylePesonal.personal__element}>
<label>DriverLicenceNumber:</label>
<input type="text" name="driverLicenceNumber" value={formData.driverLicenceNumber} onChange={handleInputChange} />
{errors.driverLicenceNumber && <span style={{ color: 'red' }}>{errors.driverLicenceNumber}</span>}
</div>
<div className={stylePesonal.personal__element}>
<label>DriverLicenceIssueDate:</label>
<input type="text" name="driverLicenceIssueDate" value={formData.driverLicenceIssueDate} onChange={handleInputChange} />
{errors.driverLicenceIssueDate && <span style={{ color: 'red' }}>{errors.driverLicenceIssueDate}</span>}
</div>
<div className={stylePesonal.personal__element}> 
<label>DriverLicenceExpirationDate:</label>
<input type="text" name="driverLicenceExpirationDate" value={formData.driverLicenceExpirationDate} onChange={handleInputChange} />
{errors.driverLicenceExpirationDate && <span style={{ color: 'red' }}>{errors.driverLicenceExpirationDate}</span>}
</div>
<div className={stylePesonal.personal__element}>
<label>Birthday:</label>
<input type="text" name="birthday" value={formData.birthday} onChange={handleInputChange} placeholder={errors.birthday}/>
</div> */}