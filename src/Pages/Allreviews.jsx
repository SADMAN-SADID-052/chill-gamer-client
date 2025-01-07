
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../Components/ReviewCard';

const Allreviews = () => {
    
    const reviews = useLoaderData();
    return (
        <div>

            <div className='max-w-6xl mx-auto'>

                <header>
                    <NavBar></NavBar>
                </header>

               <main>

                <h2 className='text-3xl text-center mt-6 font-bold'>

                    All Reviews
                    
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-gradient-to-r from-blue-200 via-gray-50 to-green-100 rounded-2xl mt-6'>

                {
                    reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                }

                </div>
               
               </main>


            </div>


            <footer>
                <Footer></Footer>
            </footer>

           
            
        </div>
    );
};

export default Allreviews;