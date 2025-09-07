import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
  <div className="container-fluid">
  
    <a className="navbar-brand fw-bold text-warning" href="#">
      💰 CryptoPulse
    </a>


    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarContent"
      aria-controls="navbarContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

   
    <div className="collapse navbar-collapse" id="navbarContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#markets">
            Markets
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
      </ul>

     
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Coin..."
          aria-label="Search"
        />
        <button className="btn btn-outline-warning fw-bold" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}
