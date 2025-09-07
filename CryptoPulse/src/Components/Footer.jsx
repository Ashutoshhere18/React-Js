import React from 'react'

export default function Footer() {
  return (
   <div className="card text-center bg-dark text-white mt-5">
  <div className="card-header">
    <ul className="nav justify-content-center card-header-tabs">
      <li className="nav-item">
        <a className="nav-link active text-white" aria-current="true" href="#">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">
          About
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">
          Contact
        </a>
      </li>
    </ul>
  </div>
  <div className="card-body">
    <h5 className="card-title">CryptoPulse</h5>
    <p className="card-text">
      Stay updated with the latest cryptocurrency news, prices, and market trends.
    </p>
    <div className="d-flex justify-content-center gap-2">
      <a href="#" className="btn btn-primary btn-sm">
        Twitter
      </a>
      <a href="#" className="btn btn-info btn-sm text-white">
        Telegram
      </a>
      <a href="#" className="btn btn-danger btn-sm">
        YouTube
      </a>
    </div>
    <p className="mt-3 mb-0">&copy; 2025 CryptoPulse. All rights reserved.</p>
  </div>
</div>

  )
}
