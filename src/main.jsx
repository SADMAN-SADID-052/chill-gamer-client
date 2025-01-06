import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Layout/HomeLayout';
import Allreviews from './Pages/Allreviews';
import Addreview from './Pages/Addreview';
import Myreview from './Pages/Myreview';
import GameWatch from './Pages/GameWatch';
import PageError from './Pages/PageError';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthLayout from './Layout/AuthLayout';
import AuthProvider from './Provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },

  {
    path:"auth",
    element:<AuthLayout></AuthLayout>,
    children:[
  
      {
        path:"/auth/login",
        element:<Login></Login>,
      },
      {
        path:"/auth/register",
        element: <Register></Register>,
      }
      
    ]
  },

  {

    path:'/allreviews',
    element:<Allreviews></Allreviews>
  }
  ,
  {

    path:'/addreview',
    element:<Addreview></Addreview>

  },

  {

    path:'/myreview',
    element:<Myreview></Myreview>
  },

  {

    path:'/watchList',
    element:<GameWatch></GameWatch>
  },

 

  {

    path:"*",
    element:<PageError></PageError>
  }
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />

 <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
 </AuthProvider>
  </StrictMode>,
)
