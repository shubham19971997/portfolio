import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div>
        <Link to='/'>
          <a className='navbar-heading'>Home</a>
        </Link>
      </div>
      <div>
        <Link to='/skills'>
          <a className='navbar-heading'>Skills</a>
        </Link>
      </div>
      <div>
        <Link to='/project'>
          <a className='navbar-heading'>Projects</a>
        </Link>
      </div>
      <div>
        <Link to='/contact'>
          <a className='navbar-heading'>Contact</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
