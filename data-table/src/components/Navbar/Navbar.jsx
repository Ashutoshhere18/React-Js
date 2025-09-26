import React from 'react'

export default function Navbar() {
  return (
  <div>

  <nav class="navbar navbar-light bg-light shadow-sm">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1 fw-bold">📦 Orders</span>
    </div>
  </nav>


  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
    <div class="container-fluid">
      <a class="navbar-brand d-none d-lg-block"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#orderNavbar"
        aria-controls="orderNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="orderNavbar">
        <div class="navbar-nav gap-3">
          <a class="nav-link active fw-semibold text-primary text-decoration-underline" href="#">
            All Orders <span class="badge bg-secondary">209</span>
          </a>
          <a class="nav-link" href="#">
            New Orders <span class="badge bg-success">3</span>
          </a>
          <a class="nav-link" href="#">
            Completed <span class="badge bg-primary">183</span>
          </a>
          <a class="nav-link text-danger" href="#">
            Cancelled <span class="badge bg-danger">16</span>
          </a>
          <a class="nav-link text-warning" href="#">
            Pending <span class="badge bg-warning text-dark">7</span>
          </a>
        </div>
      </div>
    </div>
  </nav>


  <div class="container-fluid bg-light py-3">
    <div class="d-flex flex-wrap gap-2 align-items-center">
      <input type="text" class="form-control w-auto" placeholder="🔍 Search orders..." />
      <button class="btn btn-outline-primary">Search</button>
      <button class="btn btn-outline-secondary">Filter</button>
      <button class="btn btn-primary">+ Add New</button>
    </div>
  </div>
</div>


  )
}
