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

  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
