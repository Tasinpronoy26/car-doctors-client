import React, { useContext } from 'react';
import login from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext)
    
    const handleSignUp = (event) => {

        event.preventDefault();
        const form = event.target;
        

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);


        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })


    }




    return (
        <div className="mb-36 mt-36 mx-auto">
            <div className="md:flex">
                <div className='w-1/2'>
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 border border-slate-200 rounded-md p-10">
                    <form onSubmit={handleSignUp} className="card-body space-y-5">
                        <h1 className='text-center text-4xl font-bold'>Log In</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Register" className="btn bg-[#FF3811] border-none" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link to="/login" className='font-bold text-[#FF3811]'>Log in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;