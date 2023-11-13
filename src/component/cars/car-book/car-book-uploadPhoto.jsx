import { useState, useEffect, useRef } from "react";
import stylePesonal from '../../../assets/css/personalDetailes.module.scss'
import stylePhoto from '../../../assets/css/uploadPhoto.module.scss'
import styleBanner from  '../../../assets/css/banner.module.scss'

const carUploadPhoto = ({ url,handleFileChange,handleInputFocus,errors,formData}) => {
    // 


    return (
        <>
            <div className="photo-upload-form">
                <label className={stylePhoto["input-file"]}>
                    <input type="file" name="photoFront" accept=".jpg, .png" onChange={handleFileChange} />		
                    <span className={`${styleBanner.banner_btn} positionation__display--item_4 btn btn-outline primary ${errors.photoFront != "" && errors.photoFront != undefined ? stylePesonal.personal__birthday_error:''}`}>
                        {formData.photoFront ? formData.photoFront.name : 'Uload photo'}
                    </span> 
                </label>
                <label className={stylePhoto["input-file"]}>
                    <input type="file" name="photoBack" accept=".jpg, .png" onChange={handleFileChange} />		
                    <span className={`${styleBanner.banner_btn} positionation__display--item_5 btn btn-outline secondary ${errors.photoBack != "" && errors.photoBack != undefined ? stylePesonal.personal__birthday_error:''}`}>
                        {formData.photoBack ? formData.photoBack.name : 'Uload photo'}
                    </span> 
                </label>
                
            </div>

            
        </>
    );
};

export default carUploadPhoto;

