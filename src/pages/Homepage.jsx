import Navbar from "../components/Navbar";
import "../App.css";
// import movies from "../../db/movies.json";
import { useState } from "react";

function Homepage() {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [likedMovies, setLikedMovies] = useState([]);
  const [dislikedMovies, setDislikedMovies] = useState([]);

  const mockData = [
    {
      id: 1,
      title: "Jaws",
      poster: "../movie-posters/jaws.jpg",
    },
    {
      id: 2,
      title: "Gladiator",
      poster: "../movie-posters/gladiator.jpg",
    },
    {
      id: 3,
      title: "Inception",
      poster: "../movie-posters/inception.jpg",
    },
    {
      id: 4,
      title: "The Godfather",
      poster: "../movie-posters/theGodfather.jpg",
    },
  ];

  const handleLike = () => {
    const currentMovie = mockData[currentMovieIndex];
    setLikedMovies([...likedMovies, currentMovie]);
    setCurrentMovieIndex(currentMovieIndex + 1);
  };

  const handleDislike = () => {
    const currentMovie = mockData[currentMovieIndex];
    setDislikedMovies([...dislikedMovies, currentMovie]);
    setCurrentMovieIndex(currentMovieIndex + 1);
  };

  const renderMovie = () => {
    const currentMovie = mockData[currentMovieIndex];
    return currentMovie ? (
      <img
        key={currentMovie.id}
        src={currentMovie.poster}
        alt={currentMovie.title}
        style={{ maxWidth: "300px", maxHeight: "300px" }}
      />
    ) : (
      <p>All movies have been rated.</p>
    );
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-3xl font-bold mb-10">Movie Rating App</h1>
      {renderMovie()}
      <div className="flex text-center space-x-10">
        <button onClick={handleDislike}>Dislike</button>
        <button onClick={handleLike}>Like</button>
      </div>
    </div>
  );
}
export default Homepage;
