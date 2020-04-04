import React from 'react'

const LandingPageLinks = () => {
    return (
        <div class="container">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">

                    <li class="nav-item active">
                        <a class="nav-link" href="#!">Interview as UX Professional</a>
                    </li>

                    <li class="nav-item active">
                        <a class="nav-link" href="#!">Volunteer for beta testing</a>
                    </li>

                    <li class="nav-item">
                    <   button type="button" class="btn btn-outline-light">Subscribe to Us</button>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default LandingPageLinks;