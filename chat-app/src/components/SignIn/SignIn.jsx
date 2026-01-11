import React, { useEffect, useState } from 'react'
import { signIn, fetchUser } from '../../slices/userSlices'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import '../SignIn/SignIn.css'

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUser());
  }, [])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">Sign In</h2>

        <input
          type="text"
          placeholder="Email"
          value={email}
          className="auth-input"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          className="auth-input"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="auth-btn"
          onClick={() => {
            dispatch(signIn({ email, password }))
            navigate('/home');
          }}
        >
          Continue →
        </button>
      </div>
    </div>
  )
}
