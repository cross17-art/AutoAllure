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





const carDatePicker = () => {
    
    const navigate = useNavigate()
    const [search,setSearch] = useState(null)
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

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
   
    useEffect(()=>{
        if(search!=null){
            if(search.startDate!=null){
                // startDate = search.toLocaleDateString("en-US", { day: 'numeric' })+ "-"+ search.toLocaleDateString("en-US", { month: 'numeric' })+ "-" + search.toLocaleDateString("en-US", { year: 'numeric' })
                let locationGet = document.querySelector('[name=first] [name=dropdownTextLocationGet]').textContent
                let locationReturn = document.querySelector('[name=second] [name=dropdownTextLocationReturn]').textContent
                let timeGet = document.querySelector('[name=first] [name=dropdownTextTimeGet]').textContent
                let timeReturn = document.querySelector('[name=second] [name=dropdownTextTimeReturn]').textContent

                let dates = search.startDate+' '+timeGet + ' - ' + search.endDate+' '+timeReturn
                Cookies.set('locationGet', locationGet, { expires: 7 });
                Cookies.set('locationReturn', locationReturn, { expires: 7 });
                Cookies.set('rentDate', dates, { expires: 7 });
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
    
        <div className="positionation">
            <div className="positionation__display">
                <Datepicker key={'datePicker'}
                        toggleClassName="toogle_calendar absolute rounded-r-lg text-white right-0 px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed" 
                        useRange={false}
                        primaryColor={"orange"}
                        value={value}
                        onChange={handleValueChange} 
                        minDate={shortCuts.beforDate} 
                        popoverDirection="up" 
                        // startFrom={date} 
                        showShortcuts={true}
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
         
                    <Dropdown key={"locationGet"} locationType = "Get" locationsDelivery={locations.locations} digit={'first'} placeHolder={"Select ..."}/>
                    <Dropdown key={"locationReturn"} locationType = "Return" locationsDelivery={locations.locations} digit={'second'} placeHolder={"Select ..."}/>
                    <button type='button' className={styleBanner.btnBanner__orange}>
                            Order now
                    </button>
                    {/* <button className="btn btn-orange" onClick={()=>setSearch(value)} >Search</button> */}
            </div>
                
            
        </div>
    
    </>);
  }
    
    
};

export default carDatePicker;
// transition-all ease-out duration-300 absolute z-10 mt-[1px] text-sm lg:text-xs 2xl:text-sm mb-2.5 block bottom-full translate-y-0 opacity-1
// transition-all ease-out duration-300 absolute z-10 mt-[1px] text-sm lg:text-xs 2xl:text-sm mb-2.5 mt-2.5 block translate-y-0 opacity-1


// transition-all ease-out duration-300 absolute z-10 mt-[1px] text-sm lg:text-xs 2xl:text-sm block translate-y-0 opacity-1