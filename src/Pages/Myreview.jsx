import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const Myreview = () => {
    return (
        <div>

            <div className='max-w-6xl mx-auto'>
                <header>
                    <NavBar></NavBar>
                </header>
                My review start here
            </div>

            <footer>
                <Footer></Footer>
            </footer>

           
            
        </div>
    );
};

export default Myreview;