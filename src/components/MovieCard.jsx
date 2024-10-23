import React, { useContext } from 'react'
import { AuthContextt } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';

const MovieCard = ({id,title,overview, poster_path,vote_average,posts,loading}) => {

const{currentUser}=useContext(AuthContextt)
 const navigate = useNavigate();
 

 if(loading){
  return <h2 style={{marginTop:'200px', color:'pink'}}>loading.....</h2>
}
  return (
    <div className="movie" id="container"
    onClick={()=>navigate("details/"+id)}
    
    >
      {/* img için base adrese endpoint olaraka dizideki poster_path eklenecek */}
      <img
        loading="lazy"
        src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
        alt="movie-card"
      />
      <div className="flex align-baseline justify-between p-1 text-white">
        <h5>{title}</h5>

        {/* kullanıcı login, register yada google ile giriş yaptıysa, AuthContext te currentUser oluşuyor, giriş yapıldıysa vote_average yi görebilsin */}

        {currentUser && (
          <span
            className={`tag ${
              vote_average > 7 ? "green" : vote_average > 6.8 ? "orange" : "red"
            } `}
          >
            {vote_average.toFixed(2)}
          </span>
        )}
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>

    </div>
  );
}

export default MovieCard