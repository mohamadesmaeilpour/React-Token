import React from 'react'
import {Link} from "react-router-dom"
import '../style/NavBar.css';
import Reorder from '@mui/icons-material/Reorder';
import { useState } from "react"



function NavBar() {
  const [openLinks,setOpenLinks]=useState(false)

  const toggleNavbar=()=>{
    setOpenLinks(!openLinks)
  }
  return (
    <div className='navbar'>
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <div className="hiddenLink">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/about">About</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/about">About</Link>
        <button onClick={toggleNavbar}>
          <Reorder/>
        </button>

      </div>

    </div>
  )
}

export default NavBar
