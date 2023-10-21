import { useState, useEffect, useRef } from "react";
import stylePesonal from '../../../assets/css/personalDetailes.module.scss'
import stylePhoto from '../../../assets/css/uploadPhoto.module.scss'

const carUploadPhoto = ({ url,handleInputChange,handleInputFocus,errors,formData}) => {

    const [selectedFile, setSelectedFile] = useState(null);


    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
  
      // На вашем месте здесь можно выполнить другие действия с файлом, если это необходимо.
    };

    return (
        <>
        
            <section data="uploadPhoto">
                <div className="photo-upload-form">
                    <h2>Загрузите свою фотографию</h2>
                    <label className={stylePhoto["input-file"]}>
                        <input type="file" name="file" accept=".jpg, .png" onChange={handleFileChange} />		
                        <span>{selectedFile ? selectedFile.name : 'Choose file'}</span>
                    </label>
                </div>
            </section>
        </>
    );
};

export default carUploadPhoto;

