import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Opening Hours" cardText="Lorem Ipsum is simply dummy text of the pri" img={clock} bgClass="bg-gradient-to-r from-secondary to-primary"></InfoCard>
            <InfoCard cardTitle="Visit our location" cardText="Brooklyn, NY 10036, United States" img={marker} bgClass="bg-black"></InfoCard>
            <InfoCard cardTitle="Contact us now" cardText="+000 123 456789" img={phone} bgClass="bg-gradient-to-r from-secondary to-primary"></InfoCard>
        </div>
    );
};

export default Info;