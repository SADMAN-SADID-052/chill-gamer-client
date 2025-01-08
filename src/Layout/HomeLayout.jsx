import React from 'react';
import NavBar from '../Components/NavBar';
import Banner from '../Components/Banner';

import Footer from '../Components/Footer';
import HighestRatedGame from '../Components/HighestRatedGame';

const HomeLayout = () => {
    return (
        <div>

            <div className='max-w-6xl mx-auto'>
                <header>

                    <NavBar></NavBar>
                    <section>

                    <Banner></Banner>

                    </section>
                    

                </header>
                <main>
                    <section>
                        <HighestRatedGame></HighestRatedGame>
                    </section>

                </main>
            </div>

            <footer>
                <Footer></Footer>

            </footer>
            
        </div>
    );
};

export default HomeLayout;