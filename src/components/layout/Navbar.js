import React from 'react'
import { Link } from 'react-router-dom'
import LandingPageLinks from './LandingPageLinks'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">

          <div class="container">
            <Link to='/' className="navbar-brand">DesignHub</Link>
            <LandingPageLinks />
          </div>
          
      </nav>
    )
}

export default Navbar;