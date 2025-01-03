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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
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

    path:'/login',
    element:<Login></Login>
  },

  {

    path:'/register',
    element:<Register></Register>
  },

  {

    path:"*",
    element:<PageError></PageError>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
