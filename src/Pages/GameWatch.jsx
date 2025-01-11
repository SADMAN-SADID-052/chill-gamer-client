import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const GameWatch = () => {
  const { user } = useContext(AuthContext); 
  const [watchlist, setWatchlist] = useState([]);

  
  useEffect(() => {
    if (user?.email) {
      fetch(`https://chill-gamer-server-zeta-eight.vercel.app/watchlist?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setWatchlist(data.data);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Failed to Load Watchlist',
              text: data.message,
            });
          }
        })
        .catch((err) => {
          console.error(err);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'An error occurred while loading the watchlist.',
          });
        });
    }
  }, [user]);

 
 

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <header>
          <NavBar></NavBar>
        </header>
        <main className="mt-6 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-2xl p-4">
          <h1 className="text-3xl font-bold text-center">My Game Watchlist</h1>

          {watchlist.length === 0 ? (
            <p className="text-center mt-6">No items in your watchlist.</p>
          ) : (
            <table className="table-auto w-full mt-6 bg-white rounded-lg shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Game Title</th>
                  <th className="px-4 py-2">Genre</th>
                  <th className="px-4 py-2">Rating</th>
                  <th className="px-4 py-2">Publishing Year</th>
                </tr>
              </thead>
              <tbody>
                {watchlist.map((item) => (
                  <tr key={item._id} className="text-center border-b">
                    <td className="px-4 py-2">{item.gameTitle}</td>
                    <td className="px-4 py-2">{item.genre}</td>
                    <td className="px-4 py-2">{item.rating}</td>
                    <td className="px-4 py-2">{item.publishingYear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </main>
      </div>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default GameWatch;
