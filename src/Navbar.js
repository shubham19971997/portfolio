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
        <Link to='/skills/2'>
          <a className='navbar-heading'>Skills</a>
        </Link>
      </div>
      <div>
        <Link to='/project/1'>
          <a className='navbar-heading'>Projects</a>
        </Link>
      </div>
      <div>
        <Link to='/contact/3'>
          <a className='navbar-heading'>Contact</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
