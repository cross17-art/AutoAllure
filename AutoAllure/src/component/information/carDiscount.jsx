import { useState, useEffect } from "react";
// import styleInformation from '../../assets/css/Information.module.scss'
import styleCarDiscount from "../../assets/css/discount.module.scss";
import styleReviews from "../../assets/css/reviews.module.scss";
import styleBanner from "../../assets/css/banner.module.scss";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

// import FAQS from './faqs'
// import AboutUs from './aboutUs'

function carDiscount({ url, discountItems }) {
  const navigate = useNavigate();
  const handelGetPage = (car_id, company) => {
    Cookies.set("company", company, { expires: 7 });
    Cookies.set("carId", car_id, { expires: 7 });
    navigate(`/car-page/${car_id}`);
  };

  if (discountItems) {
    return (
      <section data="carSales">
        <div className={styleCarDiscount.carDiscount}>
          <div className={styleCarDiscount[`carDiscount__block`]}>
            <div className={styleCarDiscount[`carDiscount__block--text`]}>
              <p className={styleCarDiscount[`carDiscount__block--header`]}>
                Monthly sale
                <span>SAVE UP TO 20%</span>
              </p>
              <div className={` carList__text--line`}>
                <div className="carList__text--line_item1"></div>
                <div className="carList__text--line_item2"></div>
              </div>
              <p
                className={styleCarDiscount[`carDiscount__block--description`]}
              >
                We have the most interesting and profitable offers on discounts
                and tariffs. It is worth noting that the long term rental will
                save your budget.
              </p>
            </div>

            {discountItems.map((item, index) => {
              return (
                <div
                  key={index + "discountCar"}
                  className={`${styleCarDiscount["carDiscount__block--pictures"]}`}
                  onClick={() => handelGetPage(item.id, item.company)}
                >
                  <div
                    className={
                      styleCarDiscount[`carDiscount__block--pictures-carImg`]
                    }
                    style={{ backgroundImage: `url(${item.thumbnail})` }}
                  >
                    {/* <img src={item.thumbnail}></img> */}
                  </div>

                  <div className={styleReviews["reviews__results--counter"]}>
                    <div
                      className={
                        styleCarDiscount[`carDiscount__block--pictures_item`]
                      }
                    >
                      <p
                        className={
                          styleCarDiscount[`carDiscount__block--pictures_item-name`]
                        }
                      >
                        {item.fullName}
                      </p>
                      <span>€{item.monthPrice}/month</span>
                      <button
                        type="button"
                        className={`${styleCarDiscount["carDiscount__block--btn"]} btn btn-wh-outline` }
                        onClick={() => handelGetPage(item.id, item.company)}
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* 

                <div className={`${styleCarDiscount["carDiscount__block--pictures"]}`}>
                    <div className={styleCarDiscount[`carDiscount__block--pictures-carImg2`]}></div>
                    <div className={styleReviews['reviews__results--counter']}>
                        <div className={styleCarDiscount[`carDiscount__block--pictures_item`]}>
                            <h1>
                                Renault Kadjar 2022
                            </h1>
                            <span>
                                €1550/month
                            </span>
                            <button type='button' className={styleBanner['btnBanner__orange--discount']}>
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
                 */}
          </div>
        </div>
      </section>
    );
  }
}

export default carDiscount;
