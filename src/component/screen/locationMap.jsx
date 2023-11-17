import React from 'react';
import styleHeader from  '../../assets/css/header2.module.scss'
// import '../../assets/css/Header.scss'
// import '../../assets/css/popup.scss'
import styleLocationMap from "../../assets/css/locationMap.module.scss";
import syleCarPage from "../../assets/css/carPage.module.scss"

function LocationMap({url}) {

  
  return (
    <div className={`${styleLocationMap.locations}`}>
      <iframe
        title="Google Maps"
        width="60%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.189740870417!2d33.0362666!3d34.7047402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e0cbf81668b4cd%3A0x88f0b22370acf2a2!2sAuto%20Allure%20Luxury%20Car%20Rental!5e0!3m2!1sen!2sus!4v1636788329017!5m2!1sen!2sus"
        allowFullScreen
      ></iframe>
       <div className={`${styleLocationMap.locations__text}`}>
        <h1>How It Works:</h1>
          <ul>
            <ol>
              <li>
                <strong>Choose Your Car:</strong> Explore our diverse fleet and select the car that matches your preferences and needs.
              </li>
              <li>
                <strong>Submit Your Request:</strong> Fill out a simple application form on our website or get in touch with our team for additional information.
              </li>
              <li>
                <strong>Get the Keys:</strong> Once your request is confirmed, come to our location to pick up the keys to your luxurious car.
              </li>
              <li>
                <strong>Enjoy Your Journey:</strong> Embark on your adventure, savoring the comfort and style of your new vehicle.
              </li>
            </ol>
          </ul>
      <p>Don't miss the opportunity to make your journey unforgettable! Reserve your luxury car now!</p>
            {/* <h1>Where You Can Fin Us</h1>
            <div className={syleCarPage["carPage__text--icon"]}>
                      <span className="_footerContact__item--link_s23m4_26" href="tel: +35799667777">+357&nbsp;996&nbsp;7777</span>
                      <a href="https://t.me/+35799667777">
                          <img src={url+'/icons/telegram_icon.png'} />
                      </a>
                      <a href="https://wa.me/+35799667777">
                          <img src={url+'/icons/whatsapp_icon.png'} />
                      </a>
              </div> */}
           
        </div>       
    </div>
  )
}

export default LocationMap
