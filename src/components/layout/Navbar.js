import React from 'react'

const Navbar = () => {
    return (
        <nav>
        <div class="nav-wrapper blue darken-4">
          <a href="#" class="brand-logo">DesignHub</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a >Language Settings: English</a></li>
            <li><a >become a seller</a></li>
            <li><a >sign in</a></li>
            <li><a class="waves-effect waves-light btn">join</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;