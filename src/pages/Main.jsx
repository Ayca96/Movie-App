import React, { useContext, useState } from "react";
import { MovieContextt } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";


const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {

  const { movies, loading, getirMovies } = useContext(MovieContextt);

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getirMovies(SEARCH_API + query);
  }

  const[currentPage,setCurrentPage]=useState(1)
 const[postsPerPage]=useState(6)

 // Get current post

const indexofLastPost= currentPage * postsPerPage
const indexOfFirstPost = indexofLastPost - postsPerPage
const currentPosts = movies.slice(indexOfFirstPost, indexofLastPost)

// Change Page

const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="bg-[#282c34] min-h-screen">
      <form onSubmit={handleSubmit} className="flex justify-center p-2" >
        <input
          type="search"
          className="w-80 h-8 rounded-md p-1 m-2 text-red-500" // Virgül kaldırıldı
          placeholder="Search a movie..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300" type="submit">
          Search
        </button>
      </form>

      <div className="flex justify-center flex-wrap">
        {/* loading true ise (apiden veriler gelmeden önce) loading resmi görünsün, false olduğunda movies cardlar */}

        {loading ? (
          <div
            className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600 mt-52 flex items-center justify-center"
            role="status"
          >
            <span className="sr-only">Yükleniyor...</span>
          </div>
        ) : (
          movies.map((movie) => <MovieCard posts={currentPosts} loading={loading} key={movie.id} {...movie} />)
        )}
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 bg-[#282c34] px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</button>
          <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-red-600">
              Showing Results
            </p>
          </div>
          <div>
         
            <Pagination postsPerPage={postsPerPage}
      totalPosts={movies.length}
      paginate={paginate}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
