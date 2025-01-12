import React from 'react';
import { Link } from 'react-router-dom';

const PageError = () => {
    return (
        <div>

<div className="bg-gray-100">
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-8xl font-bold text-gray-800">404</h1>
        <p className="text-4xl font-medium text-gray-800">Page Not Found</p>
        <Link to="/"className="mt-4 btn btn-info text-white font-bold">
          Go Back Home
        </Link>
      </div>
    </div>
            
        </div>
    );
};

export default PageError;