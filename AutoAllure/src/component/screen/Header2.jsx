import React from 'react';
import styleHeader from  '../../assets/css/header2.module.scss'
function Header2() {

  return (
    <div className={styleHeader.header}>

        <div className={styleHeader.header__links}>
          <a lng="eng" href="https://auto-allure.com/" >Home</a>
          <a lng="eng" href="https://auto-allure.com/directory/privacy-policy.php" >Privacy Policy</a>
          <a lng="eng" href="#our_tariffs" >Tariffs</a>
          {/* <a lng="eng" href="#our_tariffs" >Tariffs</a> */}
          <a lng="eng" href="#help" >Contacts</a>
        </div>     
    </div>
  )
}

export default Header2
