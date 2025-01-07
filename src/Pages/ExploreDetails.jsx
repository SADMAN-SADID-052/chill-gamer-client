
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { useLoaderData } from 'react-router-dom';

const ExploreDetails = () => {
    const details = useLoaderData();
    const {name,email,gameTitle,coverImage,publishingYear,genre,rating,reviewDescription} =  details
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <header>
                    <NavBar></NavBar>
                </header>
                <main className='mt-6 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-2xl p-4'>


                    <p>
                        <img className='w-96 mx-auto rounded-3xl' src={coverImage} alt="game cover" />

                    </p>

                    <div className='text-center mt-6 space-y-4'>
                        <h2 className='text-3xl font-bold'>{gameTitle}</h2>
                        <p>Category : {genre}</p>
                        <p>Publishing Year : {publishingYear}</p>
                        <p>Rating : {rating}</p>
                        
                    </div>

                    <div className='bg-slate-300 mt-4 text-center rounded-2xl p-4'>
                        <h2 className='text-center font-bold text-xl'>Review</h2>
                          
                          <p className=''>{reviewDescription}</p>
                         <div className='flex gap-4 justify-center'>
                            <p>Reviewer Name : {name}</p>
                            <p>Email : {email}</p>
                         </div>

                         <div className='mt-6'>
                        <button className='btn btn-outline'>
                         
                         Add to Wishlist
                        </button>
                    </div>
                    </div>

                  
                    

                </main>

            </div>

            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default ExploreDetails;