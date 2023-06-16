import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/css/popup.scss'
import '../../assets/css/datePickerBlock.scss'
import Cookies from 'js-cookie';


import Datepicker from "react-tailwindcss-datepicker"
import Dropdown from "../ui/Dropdown";

const carDatePicker = ({locations}) => {
    const navigate = useNavigate()
    const [search,setSearch] = useState(null)
    
    useEffect(()=>{
        
       
        if(search!=null){
            if(search.startDate!=null){
                // startDate = search.toLocaleDateString("en-US", { day: 'numeric' })+ "-"+ search.toLocaleDateString("en-US", { month: 'numeric' })+ "-" + search.toLocaleDateString("en-US", { year: 'numeric' })
                let location = document.querySelector('[name=dropdownText]').textContent
                Cookies.set('dateStart', search.startDate, { expires: 7 });
                Cookies.set('dateEnd', search.endDate, { expires: 7 });
                Cookies.set('location', location, { expires: 7 });
                navigate(`/dates/${search.startDate} ${search.endDate}`)
            }
        }
    },[search])

    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
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
                showTimeInput
            />
            <Dropdown key={locations[0][0].id+"dropdonw"} locationsDelivery={locations[0]} placeHolder={"Select ..."}/>
            <Dropdown key={locations[0][0].id+"dropdonw"} locationsDelivery={locations[0]} placeHolder={"Select ..."}/>
            <button className="btn btn-orange" onClick={()=>setSearch(value)} >Search</button>
    </div>
   
    </>
    
    );
};

export default carDatePicker;
