import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
 // console.log("currentPath",currentPath)
  return (
    <div className='navbar'>
      <div className="gradient"></div>
      <div className='links'>
        <Link to="/"  className={currentPath === "/" ? "active" : ""}>Signup</Link>
        <Link to="/podcasts"  className={currentPath === "/podcasts" ? "active" : ""}>Podcasts</Link>
        <Link to="/create-a-podcast"   className={currentPath === "/create-a-podcast" ? "active" : ""}>Start a podcast</Link>
        <Link to="/profile" className={currentPath ==="/profile" ? "active" : ""}>profile</Link>

      </div>
      </div>
  )
}

export default Header