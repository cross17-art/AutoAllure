import React, {useState} from "react";

import '../../assets/css/popup.scss'
import Datepicker from "react-tailwindcss-datepicker"
import Dropdown from "../ui/Dropdown";
const carDatePicker = ({carData}) => {
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
        <Datepicker
            value={value}
            onChange={handleValueChange}
        />
        <Dropdown placeHolder={"Select ..."}/>
    </div>
);
};

export default carDatePicker;

