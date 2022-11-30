import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Component/Navabr/Navbar';
import { AuthContext } from '../Context/UseContext/UseContext';
import UseAdmin from '../Hooks/useAdmin';
import UseSeller from '../Hooks/useSeller';

const DashboardMain = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = UseAdmin(user?.email)
    const [isSeller] = UseSeller(user?.email)

    return (
        <div className='bg-white'>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content shadow-xl">

                    <Outlet />
                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-black my-2 rounded-sm text-lg sm:text-base">

                        {
                            !isSeller && !isAdmin && <li><Link to='/dashboardLayOut/myOrders'>My Orders</Link></li>
                        }


                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboardLayOut/addProduct'>Add Product</Link></li>
                                <li><Link to='/dashboardLayOut/myProducts'>My Products</Link></li>
                            </>
                        }

                        {
                            isAdmin && <>
                                <li><Link to='/dashboardLayOut/allSeller'>All Seller</Link></li>
                                <li><Link to='/dashboardLayOut/allBuyer'>All Buyers</Link></li>
                                <li><Link to='/dashboardLayOut/Report'>All Report</Link></li>

                            </>
                        }


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardMain;