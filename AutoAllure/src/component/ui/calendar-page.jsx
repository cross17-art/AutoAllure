import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/css/popup.scss'
import '../../assets/css/datePickerBlock.scss'
import Cookies from 'js-cookie';


import Datepicker from "react-tailwindcss-datepicker"
import Dropdown from "./Dropdown";
import {dayPropertyse} from '../../assets/js/formatedDate'
// import { error } from "console";




const datePickerPage = ({locations,disabledDates}) => {
    
    const navigate = useNavigate()
    const [search,setSearch] = useState(null)
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // const [locations,setLocations] = useState(null)

    const [disableDatesArrayJson,setdisableDatesArrayJson] = useState()

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

if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
  } else {

    return (<>
    
        <div className="positionation">
                <Datepicker key={'datePicker'}
                    primaryColor={"orange"}
                    value={value}
                    onChange={handleValueChange} 
                    minDate={shortCuts.beforDate} 
                    // startFrom={date} 
                    // showShortcuts={true}
                    disabledDates={disableDatesArrayJson} 
                ></Datepicker>
                <Dropdown key={"locationGet"} locationType = "Get" locationsDelivery={locations} digit={'first'} placeHolder={"Select ..."}/>
                <Dropdown key={"locationReturn"} locationType = "Return" locationsDelivery={locations} digit={'second'} placeHolder={"Select ..."}/>
                
                
                {/* <button className="btn btn-orange" onClick={()=>setSearch(value)} >Search</button> */}
            
        </div>
    
    </>);
  }
    
    
};

export default datePickerPage;
