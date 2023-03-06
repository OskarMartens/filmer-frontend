import Navbar from "../../components/Navbar";
import "../../App";
import "./Homepage.css";
import { useState, useEffect } from "react";
import likebutton48 from "../../assets/icons/icons8-checkmark-48.png";
import likebutton96 from "../../assets/icons/icons8-checkmark-96.png";
import cancelbutton48 from "../../assets/icons/icons8-cancel-48.png";
import cancelbutton96 from "../../assets/icons/icons8-cancel-96.png";


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
      title: "The Godfather asdad adasd asdasd adsdasd",
      poster: "../movie-posters/theGodfather.jpg",
    },
  ];

  const handleLike = () => {
    const currentMovie = mockData[currentMovieIndex];
    setLikedMovies([...likedMovies, currentMovie]);
    document.querySelector(".movie-image").classList.add("like");
    setTimeout(() => {
      setCurrentMovieIndex(currentMovieIndex + 1);
      document.querySelector(".movie-image").classList.remove("like");
    }, 800);
  };

  const handleDislike = () => {
    const currentMovie = mockData[currentMovieIndex];
    setLikedMovies([...dislikedMovies, currentMovie]);
    document.querySelector(".movie-image").classList.add("dislike");
    setTimeout(() => {
      setCurrentMovieIndex(currentMovieIndex + 1);
      document.querySelector(".movie-image").classList.remove("dislike");
    }, 800);
  };

  const renderMovie = () => {
    const currentMovie = mockData[currentMovieIndex];
    return currentMovie ? (
      <div className="movie-container relative">
        <img
          key={currentMovie.id}
          src={currentMovie.poster}
          alt={currentMovie.title}
          className="movie-image object-cover w-full h-full"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    ) : (
      ""
    );
  };

  return (
    <div className="grid grid-cols-11 grid-rows-16 h-screen bg-gray-900 bg-cover bg-bottom bg-no-repeat bg-stockholm backdrop-blur-lg">
   <h1
    className={`flex justify-center text-center row-start-2 col-start-1 col-end-12 neon-text ${
      (mockData[currentMovieIndex]?.title || "").length > 35
        ? "text-2xl laptop-l:text-3xl"
        : "text-6xl"
    }`}
    style={{ maxWidth: "800px", margin: "0 auto" }}
  >
    {mockData[currentMovieIndex]?.title
      ? mockData[currentMovieIndex].title
          .split(" ")
          .map((word, i) =>
            i !== 0 && i % 4 === 0 ? [<br key={i} />, word] : " " + word
          )
      :  <h1 className="text-3xl laptop-l:text-5xl">
            Alla filmer har betygsatts
          </h1>}
  </h1>
      <div
        className="row-start-4 row-span-5 col-start-2 col-span-9
                      tablet:col-start-5 tablet:col-span-3
                      neon-border aspect-2/3 relative"
      >
        <div className="w-full h-full">{renderMovie()}</div>
      </div>
      <div className="absolute mt-2 inset-0 flex items-center justify-center top-2/3 w-full">
        <button onClick={handleDislike} className="red-neon-button mr-20">
          <img
            src={cancelbutton48}
            alt="Filmer"
            style={{ width: "60px", height: "60px" }}
          />
        </button>
        <button className="green-neon-button" onClick={handleLike}>
          <img
            src={likebutton48}
            alt="Like"
            style={{ width: "60px", height: "60px" }}
          />
        </button>
      </div>
      <Navbar />
    </div>
  );
}
export default Homepage;
