import { useState } from "react";
import BannerBook from "../screen/BannerBook";
import Information from "../information/information";
import CarDatePicker from "../ui/calendar";

import "../../assets/css/Main.scss";
import { Outlet } from "react-router-dom";

function mainPage() {
  const url = "https://auto-allure.com/"
  
  return (

    <>
        <BannerBook/>
        <CarDatePicker key={'CarListDatePicker'} classContainer={"p-hidden"}/>

        <div className="wrapper">
            <Outlet />
        </div>
        <Information url={url}/>

    </>
  );
}

export default mainPage;
