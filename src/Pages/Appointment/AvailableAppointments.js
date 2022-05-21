import React, { useEffect, useState } from 'react';
import { format } from "date-fns";
// import axios from 'axios';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AvailableAppointments = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');

    const { isLoading, data: services, refetch } = useQuery(['available', formattedDate], () =>
     fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
   );

    if(isLoading) {
        return <Loading></Loading>
    }

    // useEffect( () => {
    //     axios(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(data => setServices(data.data));
    // }, [formattedDate])

    return (
        <div>
            <h4 className='text-2xl text-secondary text-center mt-20 mb-20'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-28'>
                {
                    services?.map(service => <AppointmentService
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
            refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;