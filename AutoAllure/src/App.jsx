import { useState } from "react";
import CarsList from "./component/cars/cars-list";
import CarsDateList from "./component/cars/carDates-list";
import CarPage from "./component/cars/car-page";
import Header from "./component/screen/Header";
import Footer from "./component/screen/Footer";
import Information from "./component/information/information";
import CarDatePicker from "./component/ui/calendar";

import "./assets/css/Main.scss";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const url = "http://localhost:5173/"
  
  return (

    <>
      <Header />
      <div className="wrapper">
        <CarDatePicker key={'CarListDatePicker'}/>

        <Routes>
          {/* <Route path="/" element={<CarsList url={url} />} />
          <Route path="dates/:dates" element={<CarsDateList url={url} />} />
          <Route path="car-page/:id" element={<CarPage />}/> */}
        </Routes>

        <Information url={url} />
      </div>
      <Footer />
    </>
  );
}

export default App;
