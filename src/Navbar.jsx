import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <>

            {/* <div className="container-fluid nav_bg dark">
                <div className="row">
                    <div className="col-10 mx-auto"> */}


                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <NavLink exact className="navbar-brand" to="/"> P.S. Services</NavLink>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>


                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <NavLink exact activeClassName = "menu_active" className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeClassName = "menu_active" className="nav-link" to="/services">Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeClassName = "menu_active" className="nav-link" to="about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeClassName = "menu_active" className="nav-link" to="contact">Contact US</NavLink>
                                    </li>
                                </ul>

                            </div>
                        </nav>

                    {/* </div>
                </div>

            </div> */}

        </>
    )
}

export default Navbar;