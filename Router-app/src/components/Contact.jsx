import React from 'react'

export default function Contact() {
  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-center mb-4">Contact Us</h2>
      <p className="text-center text-muted mb-5">
        Have questions, feedback, or need help? Fill out the form below and we’ll get back to you shortly.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Write your message"></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <div className="row mt-5 text-center">
        <div className="col-md-4">
          <h6 className="fw-bold">📍 Address</h6>
          <p className="text-muted">123 MyShop Street, Mumbai, India</p>
        </div>
        <div className="col-md-4">
          <h6 className="fw-bold">📞 Phone</h6>
          <p className="text-muted">+91 98765 43210</p>
        </div>
        <div className="col-md-4">
          <h6 className="fw-bold">✉️ Email</h6>
          <p className="text-muted">support@myshop.com</p>
        </div>
      </div>
    </div>
  )
}
