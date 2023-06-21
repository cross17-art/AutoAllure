import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/css/popup.scss'
import '../../assets/css/datePickerBlock.scss'
import Cookies from 'js-cookie';


import Datepicker from "react-tailwindcss-datepicker"
import Dropdown from "../ui/Dropdown";

const DayPropertyse = (type,count)=>{
    let today = new Date()
    let tomorrowDay = new Date(today.setDate(today.getDate()+1))
    
    let nextDate='';
    if(type==="month"){
        nextDate= new Date(tomorrowDay.setMonth(tomorrowDay.getMonth()+count))
    }else if(type==="day"){
        nextDate= new Date(tomorrowDay.setDate(tomorrowDay.getDate()+count))
    }else if(type ==="week"){
        // day = d.getDay()
        // d.getDate() + (8-day)
    }

    today = new Date()
    tomorrowDay = new Date(today.setDate(today.getDate()+1))




    let day = tomorrowDay.getDate()<10?"0"+tomorrowDay.getDate():tomorrowDay.getDate()
    let month = tomorrowDay.getMonth()+1<10?"0"+(tomorrowDay.getMonth()+1):tomorrowDay.getMonth()+1
    let year = tomorrowDay.getFullYear()

    let nextMonth = nextDate.getMonth()+1<10?"0"+(nextDate.getMonth()+1):nextDate.getMonth()+1
    let nextDay = nextDate.getDate()<10?"0"+nextDate.getDate():nextDate.getDate()
    let nextYear = nextDate.getFullYear()



    return ({"today": year+"-"+month+"-"+day,"next": nextYear+"-"+nextMonth+"-"+nextDay})   
}

const carDatePicker = ({locations}) => {

    const navigate = useNavigate()
    const [search,setSearch] = useState(null)
    

    let date = new Date();
    date.setDate(date.getDate() - 1);

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
                navigate(`/dates/${dates}`)
            }
        }
    },[search])


    const [value, setValue] = useState({
        startDate: DayPropertyse("month",0).today,
        endDate: DayPropertyse("month",1).next
    });



    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }
    

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
    return (<>
    <div className="positionation">
            <Datepicker key={'datePicker'}
                primaryColor={"orange"}
                value={value}
                onChange={handleValueChange} 
                minDate={date} 
                startFrom={date} 
                showShortcuts={true}
                configs={
                    {shortcuts:{
                        Next3days:{
                            text:"Rent for a 3 days",
                            period:{
                                start:DayPropertyse("day",2).today,
                                end:DayPropertyse("day",2).next
                            },
                        },
                        NextWeek:{
                            text:"Rent for a next week",
                            period:{
                                start:DayPropertyse("day",6).today,
                                end:DayPropertyse("day",6).next
                            },
                        },
                        NextMonth:{
                            text:"Rent for a month",
                            period:{
                                start:"2023-06-17",
                                end:"2023-06-19"
                            },
                        },
                        Next3month:{
                            text:"Rent for a 3 month",
                            period:{
                                start:"2023-06-17",
                                end:"2023-06-19"
                            },
                        }
                    }
                
                }}
            ></Datepicker>
            <Dropdown key={"locationGet"} locationType = "Get" locationsDelivery={locations} digit={'first'} placeHolder={"Select ..."}/>
            <Dropdown key={"locationReturn"} locationType = "Return" locationsDelivery={locations} digit={'second'} placeHolder={"Select ..."}/>
            <button className="btn btn-orange" onClick={()=>setSearch(value)} >Search</button>
          
    </div>
   
    </>
    
    );
};

export default carDatePicker;
