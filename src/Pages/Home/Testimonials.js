import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            location: "California",
            img: people1
        },
        {
            _id: 2,
            name: "Dua Lipa",
            location: "California",
            img: people2
        },
        {
            _id: 3,
            name: "Samara Hill",
            location: "California",
            img: people3
        }
    ];

    return (
        <section className='mb-28'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-secondary font-semibold text-xl'>Testimonials</h3>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-5 mt-12'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;