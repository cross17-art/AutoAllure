import { useState } from 'react'
import CarsList from './component/cars/cars-list'
import './assets/css/Main.scss'
// import './App.css'
import DateRangePicker from "tw-daterange"

function App() {
  const [count, setCount] = useState(0)
  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  })
  return (
    <>
     <DateRangePicker
      initialRange={range}
      onUpdate={(dateRange) => {
        setRange(dateRange)
      }}/>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      {/* <CarsList /> */}
    </>
  )
}

export default App
