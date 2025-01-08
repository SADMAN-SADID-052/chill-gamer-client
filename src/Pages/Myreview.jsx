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
      fetch(`http://localhost:5000/review?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setReviews(data);
        })
        .catch((error) => {
          console.log(error);
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
        fetch(`http://localhost:5000/review/${id}`, {
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
            console.log(error);
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
            <table className="table-auto w-full mt-6 bg-white rounded-lg shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Game Title</th>
                  <th className="px-4 py-2">Genre</th>
                  <th className="px-4 py-2">Rating</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review._id} className="text-center border-b">
                    <td className="px-4 py-2">{review.gameTitle}</td>
                    <td className="px-4 py-2">{review.genre}</td>
                    <td className="px-4 py-2">{review.rating}</td>
                    <td className="px-4 py-2 flex justify-center gap-4">
                      <button
                        className="btn btn-outline btn-info"
                        onClick={() => handleUpdateReview(review._id)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-outline btn-error"
                        onClick={() => handleDeleteReview(review._id)}
                      >
                        Delete
                      </button>
                    </td>
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

export default MyReview;
