import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/css/popup.scss'
import '../../assets/css/datePickerBlock.scss'
import stylePesonal from '../../assets/css/personalDetailes.module.scss'

import Cookies from 'js-cookie';


import Datepicker from "react-tailwindcss-datepicker"
import Dropdown from "./Dropdown";
import {dayPropertyse} from '../../assets/js/formatedDate'
// import { error } from "console";




const datePickerPage = ({locations,disabledDates,id}) => {
    
    const navigate = useNavigate()
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datesErorr,setDatesError] = useState(true)
    const calendarRange = window.innerWidth >= 1000
    // const [locations,setLocations] = useState(null)

    const [disableDatesArrayJson,setdisableDatesArrayJson] = useState()

    const [shortCuts,setShortCuts] = useState({
        next3days: '',
        nextWeek: '',
        nextMonth: '',
        next3Month: '',
        beforDate:''
    })

    const [date, setDate] = useState({
        startDate: "",
        endDate: ""
    });

    const handleDateChange = (newValue) => {
        console.log("newValue:", newValue);
        setDatesError(true)
        setDate(newValue);
    }



    const handleButtonPress = (date)=>{
        if(date.startDate!=null && date.startDate!=""){
            let locationGet = document.querySelector('[name=first] [name=dropdownTextLocationGet]').textContent.trim()
            let locationReturn = document.querySelector('[name=second] [name=dropdownTextLocationReturn]').textContent.trim()
            let timeGet = document.querySelector('[name=first] [name=dropdownTextTimeGet]').textContent
            let timeReturn = document.querySelector('[name=second] [name=dropdownTextTimeReturn]').textContent

            let currentDates = date.startDate+' '+timeGet + ' - ' + date.endDate+' '+timeReturn
            let company = Cookies.get('company')
            Cookies.set('company', company, { expires: 7 });
            Cookies.set('carId', id, { expires: 7 });
            Cookies.set('locationGet', locationGet, { expires: 7 });
            Cookies.set('locationReturn', locationReturn, { expires: 7 });
            Cookies.set('rentDate', currentDates, { expires: 7 });
            navigate(`/car-book/${id}`)
        }else{
            setDatesError(false)
        }
    }
   
    // useEffect(()=>{
    //     console.log(search)
    //     if(search!=null){
    //         if(search.startDate!=null && search.startDate!=""){
    //             // startDate = search.toLocaleDateString("en-US", { day: 'numeric' })+ "-"+ search.toLocaleDateString("en-US", { month: 'numeric' })+ "-" + search.toLocaleDateString("en-US", { year: 'numeric' })
    //             let locationGet = document.querySelector('[name=first] [name=dropdownTextLocationGet]').textContent.trim()
    //             let locationReturn = document.querySelector('[name=second] [name=dropdownTextLocationReturn]').textContent.trim()
    //             let timeGet = document.querySelector('[name=first] [name=dropdownTextTimeGet]').textContent
    //             let timeReturn = document.querySelector('[name=second] [name=dropdownTextTimeReturn]').textContent

    //             let dates = search.startDate+' '+timeGet + ' - ' + search.endDate+' '+timeReturn
    //             let company = Cookies.get('company')
    //             Cookies.set('company', company, { expires: 7 });
    //             Cookies.set('carId', id, { expires: 7 });
    //             Cookies.set('locationGet', locationGet, { expires: 7 });
    //             Cookies.set('locationReturn', locationReturn, { expires: 7 });
    //             Cookies.set('rentDate', dates, { expires: 7 });
    //             navigate(`/car-book/${id}`)
    //         }else{
    //             setError(false)
    //         }
    //     }
    // },[search])

    useEffect(()=>{
        // {
            //     startDate: "2023-02-11",
            //     endDate: "2023-02-12",
            //     },
        let dates = disabledDates.dates
        let disableDatesArray = []
        for(let i=0;i<dates.length;i++){
            let disabledDate = {
                startDate: dates[i].from,
                endDate: dates[i].to,
            }
            disableDatesArray.push(disabledDate)
        }


        setdisableDatesArrayJson(disableDatesArray)
        let date = new Date();
        date.setDate(date.getDate() - 1);

        let next3days = dayPropertyse("day",2)
        let nextWeek = dayPropertyse("week",6)
        let nextMonth = dayPropertyse("month",1)
        let next3Month = dayPropertyse("month",3)
        
        // handleValueChange({"startDate":nextMonth.today,"endDate":nextMonth.next})
        setShortCuts({
            "next3days":next3days,
            "nextWeek":nextWeek,
            "nextMonth":nextMonth,
            "next3Month":next3Month,
            "beforDate":date
        })




        setIsLoaded(true)
        // setLocations(locations);

    },[])


   
    

// https://github.com/onesine/react-tailwindcss-datepicker/issues/71
// https://react-tailwindcss-datepicker.vercel.app/props#displayFormat
//inputClassName={`w-full rounded-md focus:ring-0 font-normal bg-white-100 dark:bg-white-900 dark:placeholder:text-white-100 ${stylePesonal.personal__birthday_error}`}
//

if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
  } else {

    return (<>
    
        <div className="positionation reset_margin_top minH-carPage">
            <div className="positionation__displayPage">

                <Datepicker key={'datePicker'}
                    containerClassName="relative w-full text-gray-700" 
                    toggleClassName="toogle_calendar absolute rounded-r-lg text-white right-0 px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed" 
                    inputClassName={`relative transition-all py-2.5 pl-4 pr-14 w-full border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-orange-500 focus:ring-orange-500/20 ${datesErorr?"":stylePesonal.personal__birthday_error}`}
                    useRange={false}
                    primaryColor={"orange"}
                    value={date}
                    onChange={handleDateChange} 
                    minDate={shortCuts.beforDate} 
                    popoverDirection="up" 
                    // startFrom={date} 
                    // showShortcuts={true}
                    disabledDates={disableDatesArrayJson} 
                ></Datepicker>
                <Dropdown key={"locationGet"} locationType = "Get" locationsDelivery={locations} digit={'first'} placeHolder={"Select ..."}/>
                <Dropdown key={"locationReturn"} locationType = "Return" locationsDelivery={locations} digit={'second'} placeHolder={"Select ..."}/>
                
                
                <button className="carItem_btn btn btn-orange btn-unset" onClick={()=>handleButtonPress(date)} >Book</button>
                </div>
            
        </div>
    
    </>);
  }
    
    
};

export default datePickerPage;
