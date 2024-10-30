import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"
//!context alanı
export const MovieContextt=createContext()


const API_KEY = process.env.REACT_APP_TMDB_KEY;
const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;


const MovieContext = ({children}) => {

const [movies,setMovies]=useState([])
const [loading,setLoading]=useState(false)

const[currentPage,setCurrentPage]=useState(1)



  const itemsPerPage = 10; // Her sayfada kaç öğe gösterilecek
  const totalPage = movies.length / itemsPerPage
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = movies.slice(startIndex, endIndex);


useEffect(()=>{getirMovies(BASE_URL)},[])

const getirMovies=(API_ADDRESS)=>{
setLoading(true)
  axios.get(API_ADDRESS).then((res)=>
    setMovies(res.data.results)).catch((err)=>console.log(err)).finally(()=>setLoading(false))
}


  return (
    <MovieContextt.Provider value={{movies,loading,getirMovies,currentPage,displayedItems,totalPage,itemsPerPage,startIndex,endIndex,setCurrentPage}}>{children}</MovieContextt.Provider>
  )
}

export default MovieContext