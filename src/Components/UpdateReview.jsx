import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from './Footer';
import NavBar from './NavBar';

const UpdateReview = () => {
  const { id } = useParams(); 
  const [review, setReview] = useState({}); 
  const navigate = useNavigate(); 

  useEffect(() => {
   
    fetch(`https://chill-gamer-server-zeta-eight.vercel.app/review/${id}`)
      .then((res) => res.json())
      .then((data) => setReview(data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`https://chill-gamer-server-zeta-eight.vercel.app/review/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire('Success!', 'Review updated successfully.', 'success');
          navigate('/myreview');
        }
      })
      .catch((error) => console.error(error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value }); 
  };

  return (
   <div>
     <div className="container mx-auto max-w-6xl">
       
       <header>
        <NavBar></NavBar>
       </header>

      <h1 className="text-center text-3xl font-bold mt-4">Update Review</h1>
      <form onSubmit={handleUpdate} className="card-body">
        {/* User Info Row */}
        <div className='flex flex-col lg:flex-row gap-5'>
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input 
              type="text" 
              name='name' 
              value={review.name || ''} // Pre-fill name field
              readOnly
              className="input input-bordered bg-gray-100" 
            />
          </div>
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input 
              type="email" 
              name='email' 
              value={review.email || ''} 
              readOnly
              className="input input-bordered bg-gray-100" 
            />
          </div>
        </div>

        {/* Form first row */}
        <div className='flex flex-col lg:flex-row gap-5'>
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Game Title</span>
            </label>
            <input 
              type="text" 
              name='gameTitle' 
              value={review.gameTitle || ''} // Pre-fill game title
              onChange={handleChange} 
              className="input input-bordered" 
              required 
            />
          </div>
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Cover Image URL</span>
            </label>
            <input 
              type="url" 
              name='coverImage' 
              value={review.coverImage || ''} 
              onChange={handleChange} 
              className="input input-bordered" 
              required 
            />
          </div>
        </div>

        {/* Form second row */}
        <div className='flex flex-col lg:flex-row gap-5'>
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Publishing Year</span>
            </label>
            <input 
              type="number" 
              name='publishingYear' 
              value={review.publishingYear || ''} 
              onChange={handleChange} 
              className="input input-bordered" 
              required 
            />
          </div>
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Rating (1-10)</span>
            </label>
            <input 
              type="number" 
              name='rating' 
              value={review.rating || ''} // Pre-fill rating
              onChange={handleChange} 
              min="1" 
              max="10" 
              className="input input-bordered" 
              required 
            />
          </div>
        </div>

        {/* Form third row */}
        <div className='flex flex-col lg:flex-row gap-5'>
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <select 
              name='genre' 
              value={review.genre || ''} 
              onChange={handleChange} 
              className="select select-bordered w-full" 
              required
            >
              <option value="">Select a genre</option>
              <option value="Action">Action</option>
              <option value="RPG">RPG</option>
              <option value="Adventure">Adventure</option>
              <option value="Simulation">Simulation</option>
              <option value="Racing">Racing</option>
              <option value="Puzzle">Puzzle</option>
            </select>
          </div>
        </div>

        {/* Review Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Review Description</span>
          </label>
          <textarea 
            name='reviewDescription' 
            value={review.reviewDescription || ''} 
            onChange={handleChange} 
            rows="4" 
            className="textarea textarea-bordered" 
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary text-xl font-bold">Update Review</button>
        </div>
      </form>
    </div>

    <footer>
        <Footer></Footer>
    </footer>
   </div>
  );
};

export default UpdateReview;
