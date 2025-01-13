import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`https://chill-gamer-server-zeta-eight.vercel.app/review?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setReviews(data);
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'An error occurred while loading your reviews.',
          });
        });
    }
  }, [user?.email]);

  // Delete a review
  const handleDeleteReview = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This review will be permanently deleted.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://chill-gamer-server-zeta-eight.vercel.app/review/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire('Deleted!', 'Your review has been deleted.', 'success');
              setReviews((prev) => prev.filter((review) => review._id !== id));
            } else {
              Swal.fire('Failed!', 'Unable to delete the review.', 'error');
            }
          })
          .catch((error) => {
            Swal.fire('Error!', 'An error occurred. Please try again.', 'error');
          });
      }
    });
  };

  // Update a review
  const handleUpdateReview = (id) => {
    navigate(`/updateReview/${id}`);
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <header>
          <NavBar></NavBar>
        </header>
        <main className="mt-6 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-2xl p-4">
          <h1 className="text-3xl font-bold text-center">My Reviews</h1>

          {reviews.length === 0 ? (
            <p className="text-center mt-6">No reviews found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="table-auto w-full mt-6 bg-white rounded-lg shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 text-sm sm:text-base">Game Title</th>
                    <th className="px-4 py-2 text-sm sm:text-base">Genre</th>
                    <th className="px-4 py-2 text-sm sm:text-base">Rating</th>
                    <th className="px-4 py-2 text-sm sm:text-base">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review) => (
                    <tr key={review._id} className="text-center border-b">
                      <td className="px-4 py-2 text-sm sm:text-base">{review.gameTitle}</td>
                      <td className="px-4 py-2 text-sm sm:text-base">{review.genre}</td>
                      <td className="px-4 py-2 text-sm sm:text-base">{review.rating}</td>
                      <td className="px-4 py-2 flex flex-col sm:flex-row justify-center items-center gap-2">
                        <button
                          className="btn btn-outline btn-info text-sm sm:text-base"
                          onClick={() => handleUpdateReview(review._id)}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-outline btn-error text-sm sm:text-base"
                          onClick={() => handleDeleteReview(review._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MyReview;
