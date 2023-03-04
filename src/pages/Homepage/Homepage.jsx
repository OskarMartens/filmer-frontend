import Navbar from "../../components/Navbar";
import "../../App";
import "./Homepage.css";
import { useState, useEffect } from "react";
import likebutton48 from "../../assets/icons/icons8-checkmark-48.png";
import likebutton96 from "../../assets/icons/icons8-checkmark-96.png";
import cancelbutton48 from "../../assets/icons/icons8-cancel-48.png";
import cancelbutton96 from "../../assets/icons/icons8-cancel-96.png";

// function MovieCard({ movie, onLike, onDislike }) {
//   const [isLiked, setIsLiked] = useState(false);
//   const handleLike = () => {
//     onLike(movie);
//     document.querySelector(".movie-image").classList.add("like");
//     setTimeout(() => {
//       onDislike();
//       document.querySelector(".movie-image").classList.remove("like");
//     }, 800); // delay in milliseconds, should be longer than the transition duration
//   };

//   const handleDislike = () => {
//     onDislike();
//   };

//   useEffect(() => {
//     const image = document.querySelector(".movie-image");
//     isLiked ? image.classList.add("like") : image.classList.remove("like");
//   }, [isLiked]);

//   return movie ? (
//     <div className="border-solid border-2 border-red-400 border">
//       <img
//         key={movie.id}
//         src={movie.poster}
//         alt={movie.title}
//         className="movie-image"
//         style={{ maxWidth: "300px", maxHeight: "300px", transition: "transform 0.8s" }}
//       />
//       <div className="flex text-center space-x-10">
//         <button onClick={handleDislike}>Dislike</button>
//         <button onClick={handleLike}>Like</button>
//       </div>
//     </div>
//   ) : (
//     <p>All movies have been rated.</p>
//   );
// }

// function Homepage() {
//   const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
//   const [likedMovies, setLikedMovies] = useState([]);
//   const [dislikedMovies, setDislikedMovies] = useState([]);

//   const mockData = [
//     {
//       id: 1,
//       title: "Jaws",
//       poster: "../movie-posters/jaws.jpg",
//     },
//     {
//       id: 2,
//       title: "Gladiator",
//       poster: "../movie-posters/gladiator.jpg",
//     },
//     {
//       id: 3,
//       title: "Inception",
//       poster: "../movie-posters/inception.jpg",
//     },
//     {
//       id: 4,
//       title: "The Godfather",
//       poster: "../movie-posters/theGodfather.jpg",
//     },
//   ];

//   const handleLike = (movie) => {
//     setLikedMovies([...likedMovies, movie]);
//   };

//   const handleDislike = () => {
//     const currentMovie = mockData[currentMovieIndex];
//     setDislikedMovies([...dislikedMovies, currentMovie]);
//     setCurrentMovieIndex(currentMovieIndex + 1);
//   };

//   const currentMovie = mockData[currentMovieIndex];

//   return (
//     <div className="flex flex-col h-screen justify-center items-center">
//       <h1 className="static text-3xl font-bold mb-10">Movie Rating App</h1>
//       <MovieCard
//         movie={currentMovie}
//         onLike={handleLike}
//         onDislike={handleDislike}
//       />
//     </div>
//   );
// }
// export default Homepage;

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
    }, 800); // delay in milliseconds, should be longer than the transition duration
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
          className="movie-image"
          style={{ maxWidth: "400px", maxHeight: "400px" }}
        />
      </div>
    ) : (
      <p className="neon-text ml-10 mr-10 mt-10">Alla filmer har betygsatts</p>
    );
  };

  return (
<div className="flex h-screen w-full items-center justify-center flex-col bg-gray-900 bg-cover bg-bottom bg-no-repeat bg-stockholm">
  <h1 className="neon-text text-5xl pt-5 text-center">
    {mockData[currentMovieIndex]?.title}
  </h1>
  <div className="neon-border mb-10 items-center mt-7 justify-center aspect-2/3 backdrop-blur-sm max-w-screen-lg max-h-screen-lg lg:max-w-screen-xl lg:max-h-screen-xl">
    <div className="w-full h-full">
      {renderMovie()}
    </div>
  </div>
  <div className="absolute bottom-16 left-0 right-0 flex text-center justify-center space-x-10">
    <button onClick={handleDislike}>
      <img
        src={cancelbutton48}
        alt="Filmer"
        style={{ width: "50px", height: "50px" }}
      />
    </button>
    <button onClick={handleLike}>
      <img
        src={likebutton48}
        alt="Filmer"
        style={{ width: "50px", height: "50px" }}
      />
    </button>
  </div>
  <Navbar />
</div>
    // <div className="flex h-screen w-full items-center flex-col relative">
    //   <div className="absolute inset-0 bg-cover bg-bottom bg-no-repeat bg-stockholm blur-lg"></div>
    //   <div className="h-24 flex items-center justify-center w-full z-10">
    //     <h1
    //       className={`neon-text text-center ${
    //         mockData[currentMovieIndex]?.title.length > 35
    //           ? "text-lg"
    //           : "text-5xl"
    //       }`}
    //       style={{ maxWidth: "800px" }}
    //     >
    //       {mockData[currentMovieIndex]?.title}
    //     </h1>
    //   </div>
    //   <div
    //     className="neon-border items-center justify-center aspect-2/3 backdrop-blur-sm
    //   max-w-screen-lg max-h-screen-lg lg:max-w-screen-xl lg:max-h-screen-xl rounded-0"
    //   >
    //     {renderMovie()}
    //   </div>
    //   <div className="absolute bottom-28 left-0 right-0 flex text-center justify-center space-x-10">
    //     <button onClick={handleDislike}>
    //       <img
    //         src={cancelbutton48}
    //         alt="Filmer"
    //         style={{ width: "50px", height: "50px" }}
    //       />
    //     </button>
    //     <button onClick={handleLike}>
    //       <img
    //         src={likebutton48}
    //         alt="Filmer"
    //         style={{ width: "50px", height: "50px" }}
    //       />
    //     </button>
    //   </div>
    //   <Navbar />
    // </div>
  );
}
export default Homepage;
