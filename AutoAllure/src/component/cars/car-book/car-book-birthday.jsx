import { useState, useEffect, useRef } from "react";
import stylePesonal from '../../../assets/css/personalDetailes.module.scss'
import PickUpDate from "../../ui/pickUpDates";

const carPhone = ({formData,handleInputChange,handleInputFocus,errors}) => {


    return (
        <>
            <div className={`${stylePesonal.personal__birthday}`}>
                <p>Driver Licence</p>
                <div className={`${stylePesonal.personal__element} `}>
                        <input className={errors.driverLicenceNumber!='' &&errors.driverLicenceNumber!=undefined?stylePesonal.personal__birthday_error:""} type="text" name="driverLicenceNumber" value={formData.driverLicenceNumber} onChange={handleInputChange} onFocus={handleInputFocus} placeholder={"Enter Number"} />
                </div>
                
                <div className={`${stylePesonal.personal__element} `}>
                    <p>Issue Date</p>
                    <PickUpDate />
                    {/* <input className={errors.driverLicenceIssueDate!='' &&errors.driverLicenceIssueDate!=undefined?stylePesonal.personal__birthday_error:""} type="text" name="driverLicenceIssueDate" value={formData.driverLicenceIssueDate} onChange={handleInputChange} onFocus={handleInputFocus} placeholder="Issue Date 2002-12-24"/> */}
                </div>
                <div className={`${stylePesonal.personal__element} `}> 
                    <p>Expiration Date</p>
                    <PickUpDate />
                    {/* <input className={errors.driverLicenceExpirationDate!='' &&errors.driverLicenceExpirationDate!=undefined?stylePesonal.personal__birthday_error:""} type="text" name="driverLicenceExpirationDate" value={formData.driverLicenceExpirationDate} onChange={handleInputChange} onFocus={handleInputFocus} placeholder="Expiration Date 2002-12-24" /> */}
                </div>


                
            </div>
            
        </>
    );
};

export default carPhone;

