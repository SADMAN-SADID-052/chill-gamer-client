import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import toggle icons
import NavBar from '../Components/NavBar';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import HighestRatedGame from '../Components/HighestRatedGame';
import HeroBanner from '../Components/HeroBanner';
import EduGame from '../Components/EduGame';
import BlogAndNews from '../Components/BlogAndNews';

const HomeLayout = () => {
    const [theme, setTheme] = useState('light'); // State to manage theme

    // Toggle theme handler
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Persist theme in local storage
    };

    // Apply theme on initial load
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }, [theme]);

    return (
        <div className={`${theme === 'dark' ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <div className='max-w-6xl mx-auto'>
                <header>
                    
                  

                    <HeroBanner></HeroBanner>

             
                    <NavBar></NavBar>
                    <section>
                    <div className="flex justify-center p-4 ">
                        <button
                            onClick={toggleTheme}
                            className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md"
                        >
                            {theme === 'light' ? <FaMoon className="text-gray-800" /> : <FaSun className="text-yellow-400" />}
                        </button>
                    </div>
                    </section>
                    <section>
                        <Banner></Banner>
                    </section>
                </header>
                <main>
                    <section>
                        <HighestRatedGame></HighestRatedGame>
                    </section>
                    <section>
                        <EduGame></EduGame>
                    </section>

                    <section>
                        <BlogAndNews></BlogAndNews>
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
