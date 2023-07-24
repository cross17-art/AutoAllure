import { useState, useEffect } from "react";
import styleInfromation from "../../assets/css/Information.module.scss";
import styleFooter from  "../../assets/css/Footer.module.scss";

function Footer() {
  return (
    <footer className={styleFooter.footerMargin} id = "help">
      <div className={`${styleInfromation['information']} ${styleInfromation['footer']}`}>
        <div className={`${styleInfromation['information__row']}`}>
          <div className={`${styleInfromation['information__row--blockFooter']}`}>
            <h1>We are always ready to help</h1>
            <p>
              You can always contact us if you need help with a car or housing
              in general. We are always happy to help you with the hotel, the
              organization of any events, excursions and generally fulfill any
              of your wishes. Our managers and support service are always happy
              to help.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styleInfromation['information']} ${styleFooter['footerContact']}`}>
        <div className={`${styleInfromation['information__row']}`}>
          <div className={`${styleFooter['footerContact__list']}`}>
            <p className={`${styleFooter['footerContact__item']}`}>
              <span>Phone:</span>
              <a className={`${styleFooter['footerContact__item--link']}`} href="tel: +35799667777">
                +357&nbsp;996&nbsp;7777
              </a>
            </p>
            <p className={`${styleFooter['footerContact__item']}`}>
              <span>Email:</span>
              <a
                className={`${styleFooter['footerContact__item--link']}`}
                href="mailto: autoallure@protonmail.com"
              >
                autoallure@protonmail.com
              </a>
            </p>
            <p className={`${styleFooter['footerContact__item']}`}>
              <span>Address:</span>
              <a
                className={`${styleFooter['footerContact__item--link']}`}
                href="https://goo.gl/maps/1zUCBWxVqK5apxuB7"
                target="_blank"
              >
                Leoforos Amathous 32 Zanna Complex Block 1 Shop 8 Limassol 4532
              </a>
            </p>
          </div>
        </div>
        <p className={`${styleFooter['footerContact__copyright']}`}>© 2023 Auto Allure</p>
      </div>
    </footer>
  );
}

export default Footer;
