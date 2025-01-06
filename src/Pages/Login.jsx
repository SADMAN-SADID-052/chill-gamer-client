import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
 

  const {userLogin,setUser} = useContext(AuthContext)
  const handleLogin = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
    
    userLogin(email,password)
    .then(result =>{

      const user = result.user;
      setUser(user);
      toast.success("Login Successful!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      
      
    })
    .catch((error)=>{

      alert('Email or password does not match')
    })}


    return (
        <div>

           

<div>

          
<div className="contain py-16">
  <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
    <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
    <p className="text-gray-600 mb-6 text-sm">Welcome! So good to have you back!</p>
    <form onSubmit={handleLogin}>
      <p className="text-red-500"></p>
      <div className="space-y-2">
        <div>
          <label className="text-gray-600 mb-2 block">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
            placeholder="youremail.@domain.com"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <div>
          <label  className="text-gray-600 mb-2 block">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
              placeholder="***********"
              required
            />
            <div className="cursor-pointer absolute inset-y-0 right-0 flex items-center px-8 text-gray-600 border-l border-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="block w-full py-2 text-center text-white bg-teal-500 border border-teal-500 rounded hover:bg-transparent hover:text-teal-500 transition uppercase font-roboto font-medium"
        >
          Login
        </button>

        <div className='text-center mt-6'>
        <button className='btn btn-outline'>Log In With Google</button>
        </div>
        <div className="flex gap-2 pt-5">
          <p className="text-gray-600 text-sm">Don't have an account?</p>
          <Link className="text-gray-600 text-sm underline" to="/auth/register">
            Register here
          </Link>
        </div>
      </div>
    </form>
  </div>
</div>
</div>


        </div>
    );
};

export default Login;