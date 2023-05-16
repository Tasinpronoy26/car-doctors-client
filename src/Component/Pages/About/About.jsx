import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero h-full mt-24 mb-24">
            <div className="sm:grid grid-cols-1 md:flex">
                <div className='relative lg:w-1/2'>
                    <img src={person} className="max-w-sm rounded-lg shadow-2xl" />
                    <img src={parts} className="absolute left-32 top-1/2 border-white border-8 w-80 max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2 space-y-7'>
                    <p className='font-bold text-[#FF3811]'> About Us</p>
                    <h1 className='text-3xl font-bold text-black'> We are qualified <br /> & of experience <br /> in this field</h1>
                    <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p> the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="btn bg-[#FF3811] border-none">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;