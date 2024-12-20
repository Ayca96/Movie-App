import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios"
const MovieDetail = () => {

const {id}= useParams()

const[filmdetail, setFilmDetail]=useState("")

const {title, poster_path, overview, vote_average, release_date, vote_count}=filmdetail
console.log(filmdetail);


  const API_KEY = process.env.REACT_APP_TMDB_KEY;

   const movieDetailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  
  const Image =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";


useEffect(() => {
  axios.get(movieDetailUrl).then((res) => setFilmDetail(res.data));
}, [movieDetailUrl]);

const [showTrailer, setShowTrailer] = useState(false); // Fragmanı göster/gizle durumu

const toggleTrailer = () => {
  setShowTrailer(!showTrailer); // Durumu tersine çevir
};

  return (
    <div className="md:container bg-[#A06148] mt-10 px-10 mx-auto py-5">
      <h1 className="text-center dark:text-white text-3xl">{title}</h1>

      <div className="md:container flex justify-center px-10">
        <div className="flex flex-col lg:flex-row max-w-6xl rounded-lg bg-gray-100 shadow-lg">
          <img
            className=" lg:w-1/3 h-96 lg:h-[600px] object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={poster_path ? baseImageUrl + poster_path : Image}
            alt="poster"
          />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Overview 🍟🎞️
              </h5>
              <p className="text-gray-700 text-base mb-4">{overview}</p>
            </div>
            <ul className="bg-gray-100 rounded-lg border border-gray-400 text-gray-900">
              <li className="px-6 py-2 border-b border-gray-400 w-full rounded-t-lg">
                {"🎉 Release Date : " + release_date}
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full">
                {"❤️ Rate : " + vote_average}
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full">
                {" 👍Total Vote : " + vote_count}
              </li>
              <li className="px-6 py-2 border-gray-400 w-full rounded-t-lg">
                <Link
                  to={-1}
                  className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4 mr-5"
                >
                  Go Back
                </Link>
               <button
                onClick={toggleTrailer}
                className="text-red-600 "> {showTrailer ? 'Hide Trailer' : 'Trailer '}</button>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
      {/* {showTrailer && (
        <div className="trailer-container">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${movie.trailerId}`} // trailerId'yi dinamik olarak ekleyin
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )} */}
    </div>
  );
};

export default MovieDetail;
