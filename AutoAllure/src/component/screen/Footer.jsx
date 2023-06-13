import { useState, useEffect } from "react";
import "../../assets/css/Information.scss";
import "../../assets/css/Footer.scss";

function Footer() {
  return (
    <>
      <div className="information footer">
        <div className="information_row">
          <div className="information_row-blockFooter">
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

      <div className="information footerContact">
        <div className="information_row">
          <div className="footerContact_list">
            <p className="footerContact_item">
              <span>Phone:</span>
              <a className="footerContact_item-link" href="tel: +35799667777">
                +357&nbsp;996&nbsp;7777
              </a>
            </p>
            <p className="footerContact_item">
              <span>Email:</span>
              <a
                className="footerContact_item-link"
                href="mailto: autoallure@protonmail.com"
              >
                autoallure@protonmail.com
              </a>
            </p>
            <p className="footerContact_item">
              <span>Address:</span>
              <a
                className="footerContact_item-link"
                href="https://goo.gl/maps/1zUCBWxVqK5apxuB7"
                target="_blank"
              >
                Leoforos Amathous 32 Zanna Complex Block 1 Shop 8 Limassol 4532
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
