
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { useLoaderData } from 'react-router-dom';

const ExploreDetails = () => {
    const details = useLoaderData();
    const {_id,gameTitle,coverImage,genre,rating} =  details
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <header>
                    <NavBar></NavBar>
                </header>
                <main>
                    <h2>gametitle:{gameTitle}</h2>

                </main>

            </div>

            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default ExploreDetails;