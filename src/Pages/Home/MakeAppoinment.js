import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center mb-20'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px] xl:mt-[-200px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-8 lg:p-0'>
                <h3 className='text-secondary text-xl font-semibold'>Appointment</h3>
                <h2 className='text-2xl my-2 text-white'>Make an appointment Today</h2>
                <p className='text-white mb-5 lg:pr-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;