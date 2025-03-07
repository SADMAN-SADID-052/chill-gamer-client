import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {

  const [isHovered, setIsHovered] = useState(false);

  const { user, logOut} = useContext(AuthContext);

  const links = <>
  
  <li className='text-gray-900 dark:text-gray-100 font-semibold'><NavLink  to="/">Home</NavLink></li>
  <li className='text-gray-900 dark:text-gray-100 font-semibold'><NavLink to="/allreviews">All Reviews</NavLink></li>
  <li className='text-gray-900 dark:text-gray-100 font-semibold'><NavLink to="/addreview">Add Review</NavLink></li>
  <li className='text-gray-900 dark:text-gray-100 font-semibold'><NavLink to="/myreview">My Review</NavLink></li>
  <li className='text-gray-900 dark:text-gray-100 font-semibold'><NavLink to="/watchList">Game Watchlist</NavLink></li>
  {/* <li><NavLink to="/"></NavLink></li> */}
  
  
  </>
    return (
        <div>

<div className="navbar bg-emerald-100 rounded-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {
        links

       }
      </ul>
    </div>
    <img className='w-16' src="https://cdn-icons-png.freepik.com/256/2317/2317374.png?ga=GA1.1.94081497.1723952170&semt=ais_hybrid" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
    {

      links


    }
    
    </ul>
  </div>

  {user && (
    // <div className="hidden sm:flex gap-4 items-center">
    //   <p className="btn btn-default">{user.email}</p>
    // </div>

    // <img className='w-16 rounded-full border-2 border-red-500 hover:' src={user?.photoURL}></img>

    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* User Profile Picture */}
      <img
        className="w-24 rounded-full border-2 border-red-500 cursor-pointer"
        src={user?.photoURL}
        alt="User Avatar"
      />
      
      {/* Tooltip for Display Name */}
      {isHovered && (
        <div className="absolute top-14 left-1 bg-gray-800 text-white text-xs w-24 p-2 rounded-2xl">
          {user?.displayName || user?.email}
        </div>
      )}
    </div>
  )}
  <div className="navbar-end">

    {
      user && user?.email ? (<button 
        onClick={logOut}
        className='btn btn-error font-bold text-white'>LogOut</button>) : 
      
      ( <Link to="/auth/login" className="btn btn-accent font-bold text-white">LOGIN</Link>)
    }
   
  </div>
</div>
            
        </div>
    );
};

export default NavBar;