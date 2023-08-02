import { useState } from "react";
import CarsList from "./component/cars/cars-list";
import CarsDateList from "./component/cars/carDates-list";
// import Header from "./component/screen/Header";
// import BannerBook from "./component/screen/BannerBook";
// import CarDiscount from "./component/information/carDiscount";

import Header2 from "./component/screen/Header2";

import Footer from "./component/screen/Footer";
// import Information from "./component/information/information";


// import CarDatePicker from "./component/ui/calendar";

import "./assets/css/Main.scss";
import { Routes, Route, Link } from "react-router-dom";


import MainPage from "./component/screen/mainPage";
import CarPageMain from "./component/screen/carPageMain";
import CarPageBook from "./component/screen/carPageBooking";
import CarPersonalDetailes from "./component/cars/car-book/car-book-personalDetailes";
function App() {
  const url = "http://localhost:5173/"
  
  return (

    <>
    <Header2 />
        <Routes>
            <Route path="/" element={<MainPage />}>
              <Route path="/" element={<CarsList url={url} />} />
              <Route path="dates/:dates" element={<CarsDateList url={url} />} />
            </Route>
            <Route path="/car-page/:id" element={<CarPageMain url={url}/>}>

              {/* <Route path="/" element={<CarsList url={url} />} /> */}
              {/* <Route path="dates/:dates" element={<CarsDateList url={url} />} /> */}
            </Route>
            <Route path="/car-book/:id" element={<CarPageBook url={url}/>}/>
            <Route path="/personal/" element={<CarPersonalDetailes url={url}/>}/>
        </Routes>
    <Footer />
    </>
  );
}

export default App;
