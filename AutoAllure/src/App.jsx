import { useState } from 'react'
import CarsList from './component/cars/cars-list'
import Header from './component/screen/Header'
import Footer from './component/screen/Footer'
import Information from './component/information/information'
import './assets/css/Main.scss'



function App() {
  
  return (
    <>
    <Header />
 
    <CarsList />
    
    <Information />
    <Footer />
    </>
  )
}

export default App
