import React, { useEffect, useState } from 'react';
import Technician from '../Technician/Technician';

const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <div>

            <div className='text-center space-y-5'>
                <p className='font-bold text-[#FF3811]'>Service</p>
                <h1 className='text-6xl font-bold'>Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className='md:grid grid-cols-3 gap-5' >
                {
                    services.map(service => <Technician key={service._id} service={service}></Technician>)
                }
            </div>

        </div>
    );
};

export default Service;