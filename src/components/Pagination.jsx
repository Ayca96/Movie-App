import React, { useState } from 'react'
import "../App.css"

const Pagination = ({ postsPerPage,totalPosts,paginate}) => {
  const pageNumbers=[];
  for(let i =1; i<=Math.ceil(totalPosts/postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const[activePage,setActivePage]=useState(1)

  const handlePageClick = (number) =>{
    setActivePage(number)
    paginate(number)
  }
  

  return <div>
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number)=>(
          <li key={number} className={`page-item ${activePage === number ? "active" : ""}`}>
            <a 
            href='!#'
            className='page-link'
            onClick={()=>{handlePageClick(number)
            paginate(number)
            }}>{number}</a>
        
          </li>
        ))}
      </ul>
    </nav>
  </div>
   
}

export default Pagination