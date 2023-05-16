import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import person from '../../assets/images/checkout/checkout.png';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Checkout = () => {

    const service = useLoaderData();
    const { title, img, price } = useContext(AuthContext);

    const handleConfirm = (event) => {

        event.preventDefault()

        const form = event.target;


        const firstName = form.first.value;
        const lastName = form.last.value;
        const email = form.email.value;
        const date = form.date.value;
        const details = form.details.value;

        const confirm = {

            firstName,
            lastName,
            email,
            date,
            details,
            title,
            img,
            price
        }

        console.log(confirm);

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {

                "content-type" : "application/json"
            },
            body: JSON.stringify(confirm) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })



    }



    return (
        <div className="mt-24 mb-24">


            <div className="relative w-full">
                <img src={person} className='mb-24' alt="" />

                <div className="absolute h-full flex items-center pl-10 left-0 top-0 text-white bg-gradient-to-r from-black rounded-lg">
                    <div className=''>
                        <h1 className='text-5xl font-bold ml-10'>Check Out</h1>

                    </div>

                </div>

            </div>





            <div className="hero-content bg-[#F3F3F3] py-16">
                <div className="card w-full">
                    <form onSubmit={handleConfirm} className="card-body">
                        <div className='grid grid-cols-2 gap-4'>
                            <div className="form-control">

                                <input type="text" placeholder="First Name" name='first' className="input rounded-none" />
                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="Last Name" name='last' className="input rounded-none" />
                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="Your email" name='email' className="input rounded-none" />
                            </div>
                            <div className="form-control">

                                <input type="date" placeholder="Your Phone" name='date' className="input rounded-none" />
                            </div>

                        </div>
                        <div className="form-control mt-3">

                            <input type="text" name='details' className="input rounded-none h-40" />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn bg-[#FF3811] border-none" value="Order Confirm" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Checkout;