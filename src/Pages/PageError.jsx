import React from 'react';
import { Link } from 'react-router-dom';

const PageError = () => {
    return (
        <div>

            <div className='max-w-6xl mx-auto mt-10'>

                <h2 className='text-5xl text-center bg-slate-700 text-white rounded-2xl p-6'>
                    OPPS!!!! Not Found Any Page
                </h2>

                <Link className='flex justify-center mt-6' to="/">
                    <button className='btn btn-info'>Go Back </button>
                </Link>

            </div>
            
        </div>
    );
};

export default PageError;