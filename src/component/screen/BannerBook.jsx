import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import styleBanner from "../../assets/css/banner.module.scss";
import CarDatePicker from "../../component/ui/calendar";
import CarDiscount from "../../component/information/carDiscount";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Cookies from "js-cookie";

function BannerBook() {
  const navigate = useNavigate();
  const [discountItems, setDiscountItem] = useState();

  useEffect(() => {
    fetch(`https://auto-allure.com:2053/top-cars?amount=${2}`)
      .then((res) => res.json())
      .then((result) => {
        result.cars.forEach((element) => {
          let brand = element.brand.toLowerCase();
          brand = brand.replace(brand[0], brand[0].toUpperCase());

          let mark = element.mark.toLowerCase();
          mark = mark.replace(mark[0], mark[0].toUpperCase());
          element.fullName = brand + " " + mark;

          //search max discount
          let maxDiscount = 0;
          element.periods_price.forEach((item) => {
            if (parseFloat(item.discount) < maxDiscount)
              maxDiscount = parseFloat(item.discount);
          });
          element.maxDiscount = maxDiscount;

          element.monthPrice =
            (element.price - (element.price * (maxDiscount * -1)) / 100) * 31;
        });
        setDiscountItem(result.cars);
      });
  }, []);

  function showAllCars() {
    Cookies.remove("locationGet");
    Cookies.remove("locationReturn");
    Cookies.remove("rentDate");
    document.getElementById("allCars").scrollIntoView({ behavior: "smooth" });
    navigate(`/#allCars`);
  }

  function showAboutCompany() {
    Cookies.remove("locationGet");
    Cookies.remove("locationReturn");
    Cookies.remove("rentDate");
    ChildComponent.scrollTo();
  }

  function orderNextMonth() {
    let locationGet = document
      .querySelector("[name=first] [name=dropdownTextLocationGet]")
      .textContent.trim();
    let locationReturn = document
      .querySelector("[name=second] [name=dropdownTextLocationReturn]")
      .textContent.trim();
    let timeGet = document.querySelector(
      "[name=first] [name=dropdownTextTimeGet]"
    ).textContent;
    let timeReturn = document.querySelector(
      "[name=second] [name=dropdownTextTimeReturn]"
    ).textContent;

    let nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    nextMonth =
      nextMonth.getFullYear() +
      "-" +
      nextMonth.getMonth() +
      "-" +
      nextMonth.getDate();

    let currentDate = new Date(); // Получаем текущую дату и время
    currentDate.setDate(currentDate.getDate() + 1);
    currentDate =
      currentDate.getFullYear() +
      "-" +
      currentDate.getMonth() +
      "-" +
      currentDate.getDate();

    let dates =
      currentDate + " " + timeGet + " - " + nextMonth + " " + timeReturn;
    Cookies.set("locationGet", locationGet, { expires: 7 });
    Cookies.set("locationReturn", locationReturn, { expires: 7 });
    Cookies.set("rentDate", dates, { expires: 7 });
    window.location.href.includes("dates")
      ? document
          .getElementById("dateCars")
          .scrollIntoView({ behavior: "smooth" })
      : document
          .getElementById("allCars")
          .scrollIntoView({ behavior: "smooth" });
    navigate(`/dates/${dates}`);
  }
  return (
    <div className={styleBanner.banner}>
      <div className={styleBanner.banner__infromation}>
        <Swiper
          navigation={false}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className={styleBanner["banner__infromation--swiper"]}>
              <h1>Premium transportation services </h1>
              <p>
                Invest in comfort and convenience and enjoy the ultimate
                limousine travel experience with a professional chauffeur in
                Cyprus
              </p>
              <a
                lng="eng"
                className={`${styleBanner.btnBanner__white} btn btn-wh-outline`}
                href="#allCars"
                onClick={() => showAllCars()}
              >
                Choose a car
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styleBanner["banner__infromation--swiper"]}>
              <h1>Chauffeur Service in Cyprus </h1>
              <p>
                Car rental services available for Family Class, Business Class,
                and Premium Class vehicles in Cyprus and the surrounding region
              </p>
             
                <a lng="eng"  className={`${styleBanner.btnBanner__white} btn btn-wh-outline`} onClick={() => orderNextMonth()}>
                  {" "}
                  Order for a month
                </a>
            
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styleBanner["banner__infromation--swiper"]}>
              <h1>Exclusive Service</h1>
              <p>
                Rent luxury cars and minibuses with driver. Chauffeur service
                since 2023.
              </p>
          
                <a lng="eng" href="#comapny"  className={`${styleBanner.btnBanner__white} btn btn-wh-outline`} onClick={() => showAboutCompany()}>
                  About company
                </a>
           
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <CarDatePicker key={"CarListDatePicker"} classContainer={"p-open"} />
      <CarDiscount key={"CarDiscountT"} discountItems={discountItems} />
    </div>
  );
}

export default BannerBook;
