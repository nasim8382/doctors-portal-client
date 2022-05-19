import React, { useEffect, useState } from 'react';
import { format } from "date-fns";
import axios from 'axios';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect( () => {
        axios('http://localhost:5000/service')
            .then(data => setServices(data.data));
    }, [])

    return (
        <div>
            <h4 className='text-2xl text-secondary text-center mt-20 mb-20'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-28'>
                {
                    services.map(service => <AppointmentService
                        key={service._id}
                        appointmentService={service}
                        setTreatment={setTreatment}
                    ></AppointmentService>)
                }
            </div>
            {treatment && <BookingModal 
            date={date} 
            treatment={treatment}
            setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;