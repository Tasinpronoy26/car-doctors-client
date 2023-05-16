import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { CgLogIn } from "react-icons/cg";
import { AuthContext } from '../../Component/AuthProvider/AuthProvider';


const NavBar = () => {

    const { logOut, user } = useContext(AuthContext);

    const item = <>
        <li><Link to="/">Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Services</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Contact</Link></li>
    </>


    const handleLogOut = () => {

        logOut()
            .then(() => { })
            .then(error => {
                console.log(error)
            })
    }



    return (
        <div className="navbar bg-base-100 h-20 mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">

                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {item}

                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {item}

                </ul>
            </div>
            <div className="navbar-end gap-5">
                {
                    user ? <button onClick={handleLogOut} className='flex items-center gap-2'><BiLogOut></BiLogOut> Log Out </button> : <Link to="/login"><button className='flex items-center gap-2'>
                        
                        <CgLogIn></CgLogIn>
                        
                       Log in  </button></Link>
                }
                <a> <AiOutlineShopping></AiOutlineShopping></a>
                <a> <AiOutlineSearch></AiOutlineSearch></a>
                <button className="btn btn-outline text-[#FF3811]">Appointment</button>
            </div>
        </div>
    );
};

export default NavBar;