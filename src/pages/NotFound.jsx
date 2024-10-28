import React from 'react'
import Foto from "../assets/icons/404-error-found-cat-is-sitting-holding-plug-from-outlet_626340-65.avif"
import "../App.css"

const NotFound = () => {
  return (
    <div className='notfoundImage'>
      <img src={Foto} alt="" width="100%" />
    </div>
  )
}

export default NotFound