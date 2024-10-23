import React, { useContext, useState } from 'react'
import "../App.css"
import { useParams, Link } from 'react-router-dom';
import { MovieContextt } from '../context/MovieContext';
import MovieCard from './MovieCard';

const Pagination = () => {
  const {movies,loading}=useContext(MovieContextt)
  const { pageNumber } = useParams();
  const currentPage = pageNumber ? parseInt(pageNumber, 10) : 1;

  const itemsPerPage = 10; // Her sayfada kaç öğe gösterilecek
  
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = movies.slice(startIndex, endIndex); // Sayfalama yapılmış veriler
console.log(displayedItems);


  if (loading) return <p>Loading...</p>;

  return (
    <div>
  
    { <div className="flex justify-center flex-wrap">
        {/* loading true ise (apiden veriler gelmeden önce) loading resmi görünsün, false olduğunda movies cardlar */}

        {loading ? (
          <div
            className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600 mt-52 flex items-center justify-center"
            role="status"
          >
            <span className="sr-only">Yükleniyor...</span>
          </div>
        ) : (
          displayedItems.map((movie) => <MovieCard loading={loading} key={movie.id} {...movie} />)
        )}
      </div> }
    <div className="pagination">
      {currentPage > 1 && (
        <Link to={`/page/${currentPage - 1}`} className="pagination-link">
          Previous
        </Link>
      )}
      {currentPage < Math.ceil(movies.length / itemsPerPage) && (
        <Link to={`/page/${currentPage + 1}`} className="pagination-link">
          Next
        </Link>
      )}
    </div>
  </div>
);
};


export default Pagination