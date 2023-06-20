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
                minDate={date} 
                startFrom="2023-01-01" 
                
            ></Datepicker>
            <Dropdown key={"locationGet"} locationType = "Get" locationsDelivery={locations} digit={'first'} placeHolder={"Select ..."}/>
            <Dropdown key={"locationReturn"} locationType = "Return" locationsDelivery={locations} digit={'second'} placeHolder={"Select ..."}/>
            <button className="btn btn-orange" onClick={()=>setSearch(value)} >Search</button>
          
    </div>
   
    </>
    
    );
};

export default carDatePicker;
