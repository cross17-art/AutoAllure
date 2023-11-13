import { useState, useEffect, useRef } from "react";
import stylePesonal from '../../../assets/css/personalDetailes.module.scss'
import stylePhoto from '../../../assets/css/uploadPhoto.module.scss'

const carUploadPhoto = ({ url,handleFileChange,handleInputFocus,errors,formData}) => {



    return (
        <>
            <div className="photo-upload-form">
                <label className={stylePhoto["input-file"]}>
                    <input type="file" name="file" accept=".jpg, .png" onChange={handleFileChange} />		
                    <span className="carItem_btn carItem_booking btn booking btn-orange">{formData.photo ? formData.photo.name : 'Uload photo'}</span>
                </label>
            </div>
        </>
    );
};

export default carUploadPhoto;

