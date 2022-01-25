import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
      <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/project">Projects</Link>
          <Link to="/contact">Contact</Link>
      </div>
  )
}

export default Navbar;
