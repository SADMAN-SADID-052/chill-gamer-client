import React, { useEffect, useState } from 'react';
import Rating from 'react-rating'; 
import {Bounce,Slide} from 'react-awesome-reveal';

const EduGame = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('edugame.json') 
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="bg-gradient-to-r from-green-100 to-blue-100 py-8 p-4 mb-4">
    <Slide>

    <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Educational Games</h2>
    </Slide>
    


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <Bounce>
      {games.map((game) => (
          <div
            key={game.id}
            className="card bg-white shadow-lg rounded-lg p-4 text-center"
          >
            <img
              src={game.thumbnail}
              alt={game.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{game.title}</h3>
            <p className="text-gray-600 mb-2">{game.description}</p>

            

            <div className="flex items-center justify-center mb-4">
              <span>
              Rating : 
              </span>
              <Rating
                initialRating={game.rating}
                readonly
                emptySymbol={<span className="text-gray-400 text-2xl">☆</span>}
                fullSymbol={<span className="text-orange-600 text-2xl">★</span>}
              />
              <span className="ml-2 text-gray-700 font-semibold">
               {game.rating.toFixed(1)}
              </span>
            </div>

            <button
              className="btn btn-primary mt-4"
              onClick={() => alert(`Downloading ${game.title}...`)}
            >
              Download Game
            </button>
          </div>
        ))}
      </Bounce>
      </div>
      
    </section>
  );
};

export default EduGame;
