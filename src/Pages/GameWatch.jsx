import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const GameWatch = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <header>
                    <NavBar></NavBar>
                </header>

                Game Watchlist start here
            </div>
            
            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default GameWatch;