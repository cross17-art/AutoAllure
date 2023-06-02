import { useState } from 'react'
import '../../assets/css/Header.scss'
function Header() {

  return (
    <>
        <div className='header'>
            <div className='header_links'> 
                <a lng="eng" href="https://auto-allure.com/">Home</a>
                <a lng="eng" href="https://auto-allure.com/directory/privacy-policy.php">Privacy
                    Policy</a>
                <a lng="eng" href="#our_tariffs">Tariffs</a>
                <a lng="eng" href="#help">Contacts</a>
            </div>
            <div>
            <div >
                    <a href="http://auto-allure.com" >
                        <img  src="https:/auto-allure.com/assets/images/logo24.png" alt="logo" width="" height="150"/>
                    </a>
                </div>
                <div lng="eng">
                    <div>
                        <p >Car rental in Cyprus</p>
                        <p>choose a car for your next trip</p>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Header
