import { useState } from "react";
import CarsList from "./component/cars/cars-list";
import CarsDateList from "./component/cars/carDates-list";
import Header from "./component/screen/Header";
import Footer from "./component/screen/Footer";
import Information from "./component/information/information";
import "./assets/css/Main.scss";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<CarsList />} />
          <Route path="dates/:dates" element={<CarsDateList />} />
        </Routes>

        <Information />
      </div>
      <Footer />
    </>
  );
}

export default App;
