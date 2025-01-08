import { Link } from "react-router-dom";

const ReviewCard = ({review}) => {

    const {_id,gameTitle,coverImage,genre,rating,publishingYear} = review
    return (
        <div>


     
        <div
         
          className="border border-gray-400  shadow-lg p-6 rounded-xl"
        >
          <img
            src={coverImage}
            alt="img"
            className="w-56 h-56 mx-auto object-contain mb-4"
          />
          <h2 className="text-xl font-bold text-center">{gameTitle}</h2>
          <p className="text-center text-gray-500">
            Category: {genre}
          </p>
          <p className="text-center text-gray-700">
            Rating: {rating}
          </p>
          <p className="text-center text-gray-700">
            py: {publishingYear}
          </p>
          <div className="mt-4 text-center">
          <Link to={`/review/${_id}`} className="btn btn-neutral">
          Explore Details
          </Link>
          </div>
        </div>
      
  
            
        </div>
    );
};

export default ReviewCard;