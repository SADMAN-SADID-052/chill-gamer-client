import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const AuthLayout = () => {
    return (
        <div>

            <div className='max-w-6xl mx-auto'>

            <header>
                <NavBar></NavBar>
            </header>

            <Outlet></Outlet>
            </div>

           

            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default AuthLayout;