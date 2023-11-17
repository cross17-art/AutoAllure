import { useState, useEffect, useRef } from "react";
import styleOrder from "../../../assets/css/orderSteps.module.scss";
import styleInformation from "../../../assets/css/Information.module.scss";
import styleSpecifications from "../../../assets/css/car-specifications.module.scss";
import stylePesonal from "../../../assets/css/personalDetailes.module.scss";
import PickUpDate from "../../ui/pickUpDates";
import CarDriverLicence from "./car-book-driverLicence";
import CarPhone from "./car-book-phone";
import ToolTip from "../../ui/tooltip";

const carPersonalDetailes = ({
  handleFileChange,
  handleInputChange,
  handleInputFocus,
  errors,
  formData,
}) => {
  return (
    <>
      <section data="car-personalDetailes">
        <div className={stylePesonal.personal}>
          <p className={stylePesonal["box__title"]}>Personal Information</p>
          <div className={stylePesonal.personal__element}>
            <label>Name:</label>
            <input
              className={
                errors.firstName != "" && errors.firstName != undefined
                  ? stylePesonal.personal__birthday_error
                  : ""
              }
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder="First name"
            />
          </div>
          <div className={stylePesonal.personal__element}>
            <label>Last name:</label>
            <input
              className={
                errors.lastName != "" && errors.lastName != undefined
                  ? stylePesonal.personal__birthday_error
                  : ""
              }
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder="Last name"
            />
          </div>
          <div className={stylePesonal.personal__element}>
            <label>Birthday:
              <ToolTip text="The client must be over 23 years old"/>
            </label>
            <PickUpDate
              handleInputChange={handleInputChange}
              handleInputFocus={handleInputFocus}
              errors={errors}
              inputName="birthday"
            />
          </div>
          <div className={stylePesonal.personal__element}>
            <label>Email:</label>
            <input
              className={
                errors.email != "" && errors.email != undefined
                  ? stylePesonal.personal__birthday_error
                  : ""
              }
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder="Email"
            />
          </div>
          <div className={stylePesonal.personal__element}>
            <label>Country:</label>
            <input
              className={
                errors.country != "" && errors.country != undefined
                  ? stylePesonal.personal__birthday_error
                  : ""
              }
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder="Country"
            />
          </div>
          <div className={stylePesonal.personal__element}>
            <label>City:</label>
            <input
              className={
                errors.city != "" && errors.city != undefined
                  ? stylePesonal.personal__birthday_error
                  : ""
              }
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder="City"
            />
          </div>
          <div className={stylePesonal.personal__element}>
            <label>Address:</label>
            <input
              className={
                errors.address != "" && errors.address != undefined
                  ? stylePesonal.personal__birthday_error
                  : ""
              }
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder="Address"
            />
          </div>
        </div>
        <div className={stylePesonal.personal}>
        <p className={stylePesonal['box__title']}>Additional Information</p>
          <CarPhone
            formData={formData}
            handleInputChange={handleInputChange}
            handleInputFocus={handleInputFocus}
            errors={errors}
            inputName="phone"
          />
          <CarDriverLicence
            formData={formData}
            handleFileChange={handleFileChange}
            handleInputChange={handleInputChange}
            handleInputFocus={handleInputFocus}
            errors={errors}
          />
        </div>
      </section>
    </>
  );
};

export default carPersonalDetailes;
{
  /* <div className={stylePesonal.personal__element}> 
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
</div> */
}
