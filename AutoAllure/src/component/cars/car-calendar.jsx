import React, {useState} from "react";

import '../../assets/css/popup.scss'
import '../../assets/css/datePickerBlock.scss'

import Datepicker from "react-tailwindcss-datepicker"
import Dropdown from "../ui/Dropdown";


const carDatePicker = ({locations}) => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }

    return (
        <div className="positionation">

            <Datepicker key={'datePicker'}
                value={value}
                onChange={handleValueChange} 
            />
            <Dropdown key={locations[0][0].id+"dropdonw"} locationsDelivery={locations[0]} placeHolder={"Select ..."}/>
            <button className="btn btn-orange">Search</button>
        </div>
    );
};

export default carDatePicker;

