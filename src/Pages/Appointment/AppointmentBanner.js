import React from "react";
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../assets/images/bg.png';

const AppointmentBanner = ({date, setDate}) => {

  return (
    <div style={{
      background: `url(${bg})`,
      backgroundSize: 'cover'
  }} className="hero min-h-max py-36">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl"
        alt="Dentist Chair" />
        <div className="mr-12">
            <DayPicker 
                mode="single"
                selected={date}
                onSelect={setDate}
            />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
