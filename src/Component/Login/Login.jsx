import React, { useContext } from 'react';
import login from '../../assets/images/login/login.svg';
import { FcGoogle } from "react-icons/fc";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsFacebook } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Result } from 'postcss';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {


    const { logInUser, googleCreate } = useContext(AuthContext);

    const handleLogIn = (event) => {

        event.preventDefault();
        const form = event.target;



        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);


        logInUser(email, password)
            .then(result => {

                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error);
            })

    }


    const handleGoogle = () => {

        const provider = new GoogleAuthProvider();

        googleCreate(provider)
            .then(result => {

                const user = result.user;
                console.log(user)
            })
            .catch(error => {

                console.log(error)
            })

    }







    return (
        <div className="mb-36 mt-36 mx-auto">
            <div className="md:flex">
                <div className='w-1/2'>
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 border border-slate-200 rounded-md p-10">
                    <form onSubmit={handleLogIn} className="card-body space-y-5">
                        <h1 className='text-center text-4xl font-bold'>Log In</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] border-none" >Login</button>
                        </div>
                        <p className='text-center'>Or Sign in with</p>


                    </form>

                    <div className='flex justify-center gap-5'>
                        <button className="btn btn-circle">
                            <BsFacebook></BsFacebook>
                        </button>
                        <button onClick={handleGoogle} className="btn btn-circle">
                            <FcGoogle></FcGoogle>
                        </button>
                        <button className="btn btn-circle">
                            <SlSocialLinkedin></SlSocialLinkedin>
                        </button>
                    </div>
                    <p className='text-center mt-5'>Haven't Account? <Link to="/signup" className='font-bold text-[#FF3811]'>Sing Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;