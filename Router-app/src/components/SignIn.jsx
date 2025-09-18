import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ width: "350px" }}>
        <h3 className="text-center mb-4 fw-bold">🔑 Sign In</h3>
        
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input 
              type="text" 
              className="form-control" 
              id="username" 
              placeholder="Enter Username..."
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Enter Password..."
            />
          </div>

          <button 
            type="button" 
            className="btn btn-primary w-100"
            onClick={() => navigate("/")}
          >
            Sign In
          </button>
        </form>

        {/* Extra links */}
        <div className="text-center mt-3">
          <p className="small">
            Don’t have an account? <a href="#">Register</a>
          </p>
          <p className="small">
            <a href="#">Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  )
}
