import React from 'react'
// import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
       <section >
            <div className='nav-bar bg-light'>
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid mx-5">
                            {/* <img src={logo} alt="logoimg" /> */}
                            <button className="navbar-toggler" id='toggle-btn' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav me-auto h4 ul-nav ">
                                    <li className="nav-item ms-3">
                                        <a href='/' className="nav-link" style={{  color:" #164fca" }}
                                        >Home </a>
                                    </li>
                                  
                                </ul>
                                
                            </div>
                        </div>
                    </nav>
                    </div>
            </section>
    </>
  )
}

export default Navbar