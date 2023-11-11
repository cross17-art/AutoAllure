import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
// import '../../assets/css/popup.scss'
import '../../assets/css/datePickerBlock.scss'
import Cookies from 'js-cookie';
import Datepicker from "react-tailwindcss-datepicker"
import Dropdown from "./Dropdown";
import {dayPropertyse} from '../../assets/js/formatedDate'
// import { error } from "console";


import styleBanner from  '../../assets/css/banner.module.scss'





const carDatePicker = ({classContainer}) => {

    const navigate = useNavigate()
    const [search,setSearch] = useState(null)

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const [showShortcuts, setShowShortCuts] = useState(null);

    const [locations,setLocations] = useState(null)

    const [shortCuts,setShortCuts] = useState({
        next3days: '',
        nextWeek: '',
        nextMonth: '',
        next3Month: '',
        beforDate:''
    })

    const [value, setValue] = useState({
        startDate: "",
        endDate: ""
    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }
    
    const handleResetSearch = () => {
        Cookies.remove('locationGet');
        Cookies.remove('locationReturn');
        Cookies.remove('rentDate');
        window.location.href.includes("dates")?
            document.getElementById('dateCars').scrollIntoView({ behavior: 'smooth' }):
            document.getElementById('allCars').scrollIntoView({ behavior: 'smooth' })
        navigate(`/`)
    }
    const calendarRange = window.innerWidth >= 1000
    // const [shouldSticky, setShouldSticky] = useState(false);
    // const handleScroll = () => {
    //     const targetBlock = document.getElementById('allCars');
    //     console.log("scroll")
    //     if (targetBlock) {
    //       const rect = targetBlock.getBoundingClientRect();
    //       setShouldSticky(window.scrollY > rect.top);
    //     }
    // };
    useEffect(()=>{
        if(search!=null){
            if(search.startDate!=null){
                // startDate = search.toLocaleDateString("en-US", { day: 'numeric' })+ "-"+ search.toLocaleDateString("en-US", { month: 'numeric' })+ "-" + search.toLocaleDateString("en-US", { year: 'numeric' })
                let locationGet = document.querySelector('[name=first] [name=dropdownTextLocationGet]').textContent.trim()
                let locationReturn = document.querySelector('[name=second] [name=dropdownTextLocationReturn]').textContent.trim()
                let timeGet = document.querySelector('[name=first] [name=dropdownTextTimeGet]').textContent
                let timeReturn = document.querySelector('[name=second] [name=dropdownTextTimeReturn]').textContent

                let dates = search.startDate+' '+timeGet + ' - ' + search.endDate+' '+timeReturn
                Cookies.set('locationGet', locationGet, { expires: 7 });
                Cookies.set('locationReturn', locationReturn, { expires: 7 });
                Cookies.set('rentDate', dates, { expires: 7 });
                window.location.href.includes("dates")?
                    document.getElementById('dateCars').scrollIntoView({ behavior: 'smooth' }):
                    document.getElementById('allCars').scrollIntoView({ behavior: 'smooth' })
                navigate(`/dates/${dates}`)
            }
        }
    },[search])

    useEffect(()=>{


        let date = new Date();
        date.setDate(date.getDate() - 1);

        let next3days = dayPropertyse("day",2)
        let nextWeek = dayPropertyse("week",6)
        let nextMonth = dayPropertyse("month",1)
        let next3Month = dayPropertyse("month",3)
        
        handleValueChange({"startDate":nextMonth.today,"endDate":nextMonth.next})
        setShortCuts({
            "next3days":next3days,
            "nextWeek":nextWeek,
            "nextMonth":nextMonth,
            "next3Month":next3Month,
            "beforDate":date
        })

        fetch("https://auto-allure.com:2053/locations/v2/")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setLocations(result);
                
                },
                (error) => {
                setIsLoaded(true);
                setError(error);
                
                }
        )
      
    },[])


   
    

    // disabledDates={[
    //     {
    //     startDate: "2023-02-02",
    //     endDate: "2023-02-05",
    //     },
    //     {
    //     startDate: "2023-02-11",
    //     endDate: "2023-02-12",
    //     },]} 
// https://github.com/onesine/react-tailwindcss-datepicker/issues/71
// https://react-tailwindcss-datepicker.vercel.app/props#displayFormat

if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
  } else {

    return (<>
    
        <div className={`positionation ${classContainer}`}>
            <div className="positionation__display">
                <Datepicker key={'datePicker'}
                        inputClassName="relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-orange-500 focus:ring-orange-500/20 positionation__dark"
                        containerClassName="relative w-full text-gray-700 positionation__display--item_1" 
                        toggleClassName="toogle_calendar absolute rounded-r-lg text-white right-0 px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed" 
                        useRange={calendarRange}
                        primaryColor={"orange"}
                        value={value}
                        onChange={handleValueChange} 
                        minDate={shortCuts.beforDate} 
                        popoverDirection="up" 
                        // startFrom={date} 
                        showShortcuts={calendarRange}
                        configs={
                            {shortcuts:{
                                Next3days:{
                                    text:"Rent for a 3 days",
                                    period:{
                                        start:shortCuts.next3days.today,
                                        end:shortCuts.next3days.next
                                    },
                                },
                                NextWeek:{
                                    text:"Rent for a next week",
                                    period:{
                                        start:shortCuts.nextWeek.today,
                                        end:shortCuts.nextWeek.next
                                    },
                                },
                                NextMonth:{
                                    text:"Rent for a month",
                                    period:{
                                        start:shortCuts.nextMonth.today,
                                        end:shortCuts.nextMonth.next
                                    },
                                },
                                Next3month:{
                                    text:"Rent for a 3 month",
                                    period:{
                                        start:shortCuts.next3Month.today,
                                        end:shortCuts.next3Month.next                                
                                    },
                                }
                            }
                        
                        }}
                    ></Datepicker>
                        <Dropdown key={"locationGet"} locationType = "Get" locationsDelivery={locations.locations} digit={'first'} placeHolder={"Select ..."} containerClass ={" positionation__display--item_2"}/>
                        <Dropdown key={"locationReturn"} locationType = "Return" locationsDelivery={locations.locations} digit={'second'} placeHolder={"Select ..."} containerClass ={" positionation__display--item_3"}/>
                        
                        <div className={`${styleBanner.banner_btns}`}>
                        <button type='button' className={`${styleBanner.banner_btn} positionation__display--item_4 btn btn-outline primary`}  onClick={()=>setSearch(value)} >
                            Search
                        </button> 
  
                         
                        <button type='button' className={`${styleBanner.banner_btn} positionation__display--item_5 btn btn-outline secondary`}  onClick={()=>handleResetSearch()} >
                                Reset
                        </button> 
                        </div>
            </div>
                
            
        </div>
    
    </>);
  }
    
    
};

export default carDatePicker;