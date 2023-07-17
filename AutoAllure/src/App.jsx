import { useState } from "react";
import CarsList from "./component/cars/cars-list";
import CarsDateList from "./component/cars/carDates-list";
import Header from "./component/screen/Header";
import BannerBook from "./component/screen/BannerBook";
import Header2 from "./component/screen/Header2";

import Footer from "./component/screen/Footer";
import Information from "./component/information/information";
import "./assets/css/Main.scss";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const url = "http://localhost:5173/"
  
  return (

    <>
    <Header2 />
    <BannerBook/>
    <Information url={url}/>
    <Footer />
      {/* <Header /> */}
      {/* <div className="wrapper">

        <Routes>
          <Route path="/" element={<CarsList url={url} />} />
          <Route path="dates/:dates" element={<CarsDateList url={url} />} />
        </Routes>

        <Information url={url} />
      </div>
      <Footer /> */}
    </>
  );
}

export default App;
