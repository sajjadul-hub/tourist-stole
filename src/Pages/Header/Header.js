import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/logo.png'
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import'./Header.css'
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .carch();
    }
    const menuItems = <>
        <li className='font-semibold mr-4 text-orange-400'><Link to='/'>Home</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-semibold mr-4 text-orange-400 '><Link to='/reviews'>My Reviews</Link></li>
                    <li className='font-semibold mr-4 text-orange-400 '><Link to='/orders'> My Booking</Link></li>
                    <li className='font-semibold  text-orange-400' onClick={handleLogOut}><Link>Log Out</Link></li>
                </>
                :
                <>
                    <li className='font-semibold mr-4 text-orange-400'><Link to='/login'>Login</Link></li>
                    <li className='font-semibold text-orange-400'><Link to='/signUp'>Sign Up</Link></li>

                </>
        }
        <li className='font-semibold ml-4 text-orange-400'><Link to='/faq'>FAQ</Link></li>
    </>

    return (
        <div className="navbar   h-20 mb-12 header rounded-b-lg">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>
                    <img className='h-12 w-12' src={logo} alt=''></img>
                </Link>
                <h2 className='text-3xl font-bold text-cyan-400'>Traveller</h2>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div>
                    {
                        user?.photoURL?
                            <>
                                <div className='flex gap-2'>
                                    <img className='h-8 rounded-full' src={user?.photoURL} alt=''></img>
                                    <p className='text-lg font-semibold text-orange-400'>{user?.displayName}</p>
                                </div>
                            </>
                            :

                           <>
                           {
                            user?.email?
                            <>
                           <div className=' bg-slate-200 p-2 rounded-full'>
                           <FaUser></FaUser>
                           </div>
                            </>
                            :
                            ""
                           }
                           </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;