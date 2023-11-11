import React from 'react';
import styleHeader from  '../../assets/css/header2.module.scss'
import '../../assets/css/Header.scss'
import '../../assets/css/popup.scss'
function Header2({url}) {

  
  return (
    <div className={styleHeader.header}>

        <div className={styleHeader.header__links}>
          <a lng="eng" href={url} >Home</a>
          <a lng="eng" href={url+"privacy-policy/"} >Privacy Policy</a>
          {/* <a lng="eng" href={url+"#our_tariffs"} >Tariffs</a> */}
          {/* <a lng="eng" href="#our_tariffs" >Tariffs</a> */}
          <a lng="eng" href={url+"#help"} >Contacts</a>
        </div>     
    </div>
  )
}

export default Header2
