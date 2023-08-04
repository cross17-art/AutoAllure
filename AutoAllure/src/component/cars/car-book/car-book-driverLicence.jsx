import { useState, useEffect, useRef } from "react";
import stylePesonal from '../../../assets/css/personalDetailes.module.scss'
import PickUpDate from "../../ui/pickUpDates";

const carDriverLicence = ({formData,handleInputChange,handleInputFocus,errors}) => {


    return (
        <>
            <div className={`${stylePesonal.personal__driver}`}>
                <p>Driver Licence</p>
                <div className={`${stylePesonal.personal__element} `}>
                        <input className={errors.driverLicenceNumber!='' &&errors.driverLicenceNumber!=undefined?stylePesonal.personal__birthday_error:""} type="text" name="driverLicenceNumber" value={formData.driverLicenceNumber} onChange={handleInputChange} onFocus={handleInputFocus} placeholder={"Enter Number"} />
                </div>
                
                <div className={stylePesonal['personal__driver--block']}>
                    <div className={stylePesonal['personal__driver--width']}>
                        <p>Issue Date</p>
                        <PickUpDate handleInputChange={handleInputChange} handleInputFocus={handleInputFocus} errors={errors} inputName="driverLicenceIssueDate"/>
                    </div>
                    <div className={stylePesonal['personal__driver--width']}>
                        <p>Expiration Date</p>
                        <PickUpDate handleInputChange={handleInputChange} handleInputFocus={handleInputFocus} errors={errors} inputName="driverLicenceExpirationDate"/>
                    </div>
                    {/* <input className={errors.driverLicenceIssueDate!='' &&errors.driverLicenceIssueDate!=undefined?stylePesonal.personal__birthday_error:""} type="text" name="driverLicenceIssueDate" value={formData.driverLicenceIssueDate} onChange={handleInputChange} onFocus={handleInputFocus} placeholder="Issue Date 2002-12-24"/> */}
                    {/* <input className={errors.driverLicenceExpirationDate!='' &&errors.driverLicenceExpirationDate!=undefined?stylePesonal.personal__birthday_error:""} type="text" name="driverLicenceExpirationDate" value={formData.driverLicenceExpirationDate} onChange={handleInputChange} onFocus={handleInputFocus} placeholder="Expiration Date 2002-12-24" /> */}

                </div>
            </div>
            
        </>
    );
};

export default carDriverLicence;

