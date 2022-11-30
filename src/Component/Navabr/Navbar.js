import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContext/UseContext';


const Navbar = () => {
    const {user, LogOut} = useContext(AuthContext)
    const navItems = <>
        <li><Link to='/' className=' font-semibold   hover:bg-red-500 rounded text-white '>Home</Link></li>
        <li><Link to='/' className=' font-semibold  hover:bg-red-500 rounded text-white '>About</Link></li>
        <li><Link to='/blog' className=' font-semibold  hover:bg-red-500 rounded text-white '>Blog</Link></li>
        <li><Link to='/dashboardLayOut' htmlFor="dashboard-drawer" className=' font-semibold  hover:bg-red-500 rounded text-white '>Dashboard</Link></li>
        <Link  className='text-white font-medium mx-2  flex justify-center items-center '>{user?.email}</Link>
        
    </>

    const handleLogout = ()=>{
        LogOut()
        .then(res=>res.json())
        .then(result=>{
            toast.success('LogOut SuccessFully')
        })
        .catch(error=>{})
    }

    return (
        <div className="navbar bg-slate-600 w-full  sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2  rounded-box w-52">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <Link to='/' className=" normal-case text-2xl font-bold text-white">Dream <span className='text-red-500'>Bike</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user?.uid ?<Link onClick={handleLogout} className="btn rounded-lg bg-red-500 border-0 text-white hover:bg-red-600">Log Out</Link>
                    : 
                    <>
                    
                    <Link to='/login' className="btn rounded-lg bg-red-500 border-0 text-white hover:bg-red-600">Log in</Link>
                    </>
                }
            </div>
            <label  htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
        </div>
    );
};

export default Navbar;