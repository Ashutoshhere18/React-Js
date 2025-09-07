import React from 'react'

export default function Hero() {
  return (
    <div>
      <section className="py-5 text-center bg-light border-bottom">
  <div className="container">
    <h1 className="display-4 fw-bold text-dark">💰 CryptoPulse</h1>
    <p className="lead text-muted">
      Track top cryptocurrencies in real-time with live data from CoinGecko.
      Get prices, market caps, and daily changes at a glance.
    </p>
    <div className="d-flex justify-content-center gap-3">
      <a href="#markets" className="btn btn-warning btn-lg fw-bold text-dark">
        View Markets
      </a>
      <a href="#about" className="btn btn-outline-dark btn-lg fw-bold">
        Learn More
      </a>
    </div>
  </div>
</section>

    </div>
  )
}
