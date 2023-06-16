import { useState } from 'react'
import CarsList from './component/cars/cars-list'
import Header from './component/screen/Header'
import Footer from './component/screen/Footer'
import Information from './component/information/information'
import './assets/css/Main.scss'
import {Routes,Route,Link} from 'react-router-dom'


function App() {
  
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<CarsList/>}/>
        <Route path="dates/:dates" element={<CarsList/>}/>
    </Routes>
    
    <Information />
    <Footer />

    </>
  )
}

export default App
