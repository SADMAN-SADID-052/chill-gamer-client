import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const Addreview = () => {
    return (
        <div>

      <div className='max-w-6xl mx-auto'>

    
           <header>
                <NavBar></NavBar>
            </header>
    
<div className='lg:w-3/4 mx-auto'>
  <div className="text-center p-10">
    <h1 className="text-5xl font-bold">Add Game Review</h1>
    <p className="py-6">
      Share your thoughts on your favorite games. Provide a detailed review, rating, and other details to help others discover great games.
    </p>
  </div>
  <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
    <form className="card-body">
      {/* User Info Row */}
      <div className='flex flex-col lg:flex-row gap-5'>
        <div className="form-control flex-1">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input 
            type="text" 
            name='name' 
            value="John Doe" 
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
            value="user@example.com" 
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
            placeholder="Enter game title" 
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
            placeholder="Enter image URL" 
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
            placeholder="e.g., 2021, 2024" 
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
            min="1" 
            max="10" 
            placeholder="Enter rating" 
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
            className="select select-bordered w-full" 
            required
          >
            <option value="">Select a genre</option>
            <option value="Action">Action</option>
            <option value="RPG">RPG</option>
            <option value="Adventure">Adventure</option>
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
          placeholder="Write your review here" 
          rows="4" 
          className="textarea textarea-bordered" 
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary text-xl font-bold">Submit Review</button>
      </div>
    </form>
  </div>
</div>

</div>

          <footer>

            <Footer></Footer>
          </footer>
        </div>
    );
};

export default Addreview;