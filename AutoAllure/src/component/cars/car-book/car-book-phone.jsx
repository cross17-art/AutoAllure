import { useState, useEffect, useRef } from "react";
import stylePesonal from '../../../assets/css/personalDetailes.module.scss'

const carPhone = ({ carData }) => {

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

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
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
        if (!formData.email.trim()) {
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

        if (!formData.phone.trim()) {
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
            <div className={stylePesonal.personal}>
                <div className={stylePesonal.personal__element}> 
                    <label>Phone:</label>
                    <input type="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                    {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
                </div>
            </div>
        </>
    );
};

export default carPhone;

