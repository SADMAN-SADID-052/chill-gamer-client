import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fade, Zoom, Slide, Bounce } from 'react-awesome-reveal';

const HighestRatedGame = () => {
  const [games, setGames] = useState([]); 
  const navigate = useNavigate();
  useEffect(() => {
    fetch('https://chill-gamer-server-zeta-eight.vercel.app/highestRatedGames') 
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((error) => console.error('Error fetching games:', error));
  }, []);


  
 
  const handleExploreDetails = (id) => {
    navigate(`/review/${id}`);
  };

  return (
    <div className="container mx-auto my-8">
      <Fade>
      <h2 className="text-3xl font-bold text-center mb-10">Highest Rated Games</h2>
      </Fade>
   
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-pink-100 p-4 rounded-2xl">
      <Zoom>
      {games.map((game) => (
          <div
            key={game._id}
            className="card bg-white shadow-md rounded-3xl overflow-hidden border-2 border-white"
          >
            <img
              src={game.coverImage}
              alt={game.gameTitle}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2  text-gray-900 dark:text-gray-100">{game.gameTitle}</h3>
              <p className="text-gray-700 mb-2">Genre: {game.genre}</p>
              <p className="text-gray-700 mb-4">Rating: {game.rating}/10</p>
              <button
                className="btn btn-neutral w-full hover:text-2xl"
                onClick={() => handleExploreDetails(game._id)}
              >
                Explore Details
              </button>
            </div>
          </div>
        ))}
      </Zoom>
      </div>
   
    </div>
  );
};

export default HighestRatedGame;
