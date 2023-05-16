import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Technician = ({ service }) => {

    const { _id, title, img, price } = service;

    return (
        <div className=" card bg-base-100 rounded-none shadow-xl mt-5">
            <figure><img src={img} className='h-[230px] w-80 mt-10 rounded-md' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p className='text-[#FF3811] font-bold'>Price: $ {price}</p>
                <div className="card-actions justify-end">
                <Link to={`/checkout/${_id}`}><button className='text-[#FF3811]'><AiOutlineArrowRight></AiOutlineArrowRight></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Technician;