import React from "react";

const AppointmentService = ({ appointmentService, setTreatment }) => {
  const { name, slots } = appointmentService;

  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-2xl text-secondary">{name}</h2>
        <p>{
                slots.length
                ? <span>{slots[0]}</span>
                : <span className="text-red-500">Try another date</span>
                }</p>
        <p className="text-uppercase">{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
        <div className="card-actions justify-center mt-2">
          <label 
          htmlFor="booking-modal" 
          disabled={slots.length === 0} 
          onClick={() => setTreatment(appointmentService)}
          className="btn btn-sm btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentService;
