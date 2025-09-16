import React from 'react'

export default function About() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
      
        <div className="col-md-6 mb-4">
          <img 
            src="data:image/png;base64,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" 
            alt="About Us" 
            className="img-fluid rounded shadow"
          />
        </div>

     
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">About MyShop</h2>
          <p className="text-muted">
            Welcome to <strong>MyShop</strong>, your one-stop destination for amazing products at the best prices. 
            Our mission is to provide high-quality items, excellent customer service, and a smooth shopping experience.
          </p>
          <p className="text-muted">
            We started our journey with a small collection, and today, we are proud to offer a wide variety 
            of categories including beauty, fashion, electronics, and more. We believe shopping should 
            be fun, easy, and affordable for everyone.
          </p>
          <p className="fw-semibold">
            🚀 Our vision: To become your most trusted shopping partner.
          </p>
        </div>
      </div>

      
      <div className="row mt-5">
        <div className="col-md-4 text-center">
          <h5 className="fw-bold">✨ Quality</h5>
          <p className="text-muted">We carefully curate every product to ensure the highest quality standards.</p>
        </div>
        <div className="col-md-4 text-center">
          <h5 className="fw-bold">🤝 Trust</h5>
          <p className="text-muted">Thousands of happy customers trust us for their everyday shopping needs.</p>
        </div>
        <div className="col-md-4 text-center">
          <h5 className="fw-bold">⚡ Speed</h5>
          <p className="text-muted">Fast delivery and smooth shopping experience is our top priority.</p>
        </div>
      </div>
    </div>
  )
}
