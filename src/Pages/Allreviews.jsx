import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from '../Components/ReviewCard';
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const AllReviews = () => {
  const reviews = useLoaderData();
  const [filteredReviews, setFilteredReviews] = useState(reviews); 
  const [sortOption, setSortOption] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  // Handle sorting
  const handleSort = (option) => {
    setSortOption(option);
    const sortedReviews = [...filteredReviews].sort((a, b) => {
      if (option === "ratingAsc") return a.rating - b.rating;
      if (option === "ratingDesc") return b.rating - a.rating;
      if (option === "yearAsc") return a.publishingYear - b.publishingYear; 
      if (option === "yearDesc") return b.publishingYear - a.publishingYear;
      return 0;
    });
    setFilteredReviews(sortedReviews);
  };

  // Handle filtering by genre
  const handleFilter = (genre) => {
    setGenreFilter(genre);
    if (genre === "all") {
      setFilteredReviews(reviews); // Reset to all reviews
    } else {
      const filtered = reviews.filter((review) => review.genre === genre);
      setFilteredReviews(filtered);
    }
  };

  return (
    <div>
   <div className="max-w-6xl mx-auto">

    <header>
        <NavBar></NavBar>
    </header>

   <h1 className="text-3xl font-bold text-center mb-6 mt-7">All Reviews</h1>
     
      <div className="mb-4 flex justify-center gap-4">
     <div className="flex items-center border-2 p-2 rounded-xl">
        <p className="text-xl font-bold text-blue-400 mr-4">Sort By : </p>
     <select
          value={sortOption}
          onChange={(e) => handleSort(e.target.value)}
          className="select select-neutral"
        >
          {/* <option  value=""> Sort by</option> */}
          <option value="ratingAsc">Rating (Low to High)</option>
          <option value="ratingDesc">Rating (High to low)</option>
          <option value="yearAsc">Year (Ascending)</option>
          <option value="yearDesc">Year (Descending)</option>
        </select>
     </div>

        {/* Genre Filter Dropdown */}
  <div className="flex items-center gap-4 border-2 p-2 rounded-xl">

  <p className="text-xl font-bold text-red-400 mr-4">Filter : </p>
  <select
          value={genreFilter}
          onChange={(e) => handleFilter(e.target.value)}
          className="select select-neutral"
        >
          <option value="all">All Genres</option>
          {[...new Set(reviews.map((review) => review.genre))].map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
  </div>
      </div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-gradient-to-r from-blue-200 via-gray-50 to-green-100 rounded-2xl mt-6">
        {filteredReviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
   </div>

      <footer className="mt-4">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AllReviews;
