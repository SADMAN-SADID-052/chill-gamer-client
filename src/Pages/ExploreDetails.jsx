import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import Rating from "react-rating";

const ExploreDetails = () => {
  const details = useLoaderData();
  const {
    name,
    email,
    gameTitle,
    coverImage,
    publishingYear,
    genre,
    rating,
    reviewDescription,
  } = details;

  const { user } = useContext(AuthContext); // Access logged-in user data

  const handleAddToWatchList = () => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "You need to log in to add to the watchlist.",
      });
      return;
    }

    const watchlistItem = {
      gameTitle,
      coverImage,
      genre,
      rating,
      publishingYear,
      reviewDescription,
      name,
      email,
      addedBy: {
        username: user.displayName,
        email: user.email,
      },
    };

    fetch("https://chill-gamer-server-zeta-eight.vercel.app/watchlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(watchlistItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire({
            icon: "success",
            title: "Added to WatchList",
            text: `${gameTitle} has been added to your watchlist!`,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed to Add",
            text: "Something went wrong. Please try again later.",
          });
        }
      })
      .catch((error) => {
        // console.log(error)
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred.",
        });
      });
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <header>
          <NavBar></NavBar>
        </header>
        <main className="mt-6 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-2xl p-4">
          <p>
            <img
              className="w-96 mx-auto rounded-3xl"
              src={coverImage}
              alt="game cover"
            />
          </p>

          <div className="text-center mt-6 space-y-4">
            <h2 className="text-3xl font-bold">{gameTitle}</h2>
            <p>Category : {genre}</p>
            <p>Publishing Year : {publishingYear}</p>
            <div className="flex items-center justify-center mb-4">
              <span className=" text-gray-900 dark:text-gray-100">
                Rating :
              </span>

              
              <Rating
                initialRating={rating}
                readonly
                emptySymbol={<span className="text-gray-400 text-2xl">☆</span>}
                fullSymbol={<span className="text-orange-600 text-2xl">★</span>}
              />
              <span className="ml-2 text-gray-700 font-semibold">
                {rating.toFixed(1)}
              </span>
            </div>
          </div>

          <div className="bg-slate-200 mt-4 text-center rounded-2xl p-4">
            <h2 className="text-center font-bold text-2xl mb-5 btn btn-accent text-white">Review</h2>

            <p className="">{reviewDescription}</p>
            <div className="flex gap-4 justify-center mt-6 items-center">
              <p className="text-cyan-600 font-semibold">Reviewer Name : 
                
                <span className="border-2 border-slate-300 p-1 rounded-xl ml-2"> {name}</span>
                
                </p>
              <p className="text-cyan-600 font-semibold">Email : 
                
              <span className="border-2 border-slate-300 p-1 rounded-xl ml-2"> {email}</span>
                
                </p>
            </div>

            <div className="mt-6">
              <button
                className="btn btn-outline btn-primary"
                onClick={handleAddToWatchList}
              >
                Add to WatchList
              </button>
            </div>
          </div>
        </main>
      </div>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ExploreDetails;
