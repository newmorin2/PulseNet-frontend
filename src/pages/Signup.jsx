import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signupUser } from '../services/auth'
import Navbar from '../components/Navbar'

function Signup() {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()

  const handleSignup = async () => {
    try {
      setError('')
      setSuccess('')
      if (data.password !== data.password2) {
        setError('Passwords do not match')
        return
      }
      await signupUser(data)
      setSuccess('Account created successfully! Redirecting to login...')
      setTimeout(() => navigate('/login'), 2000)
    } catch (err) {
      setError(err.response?.data?.detail || 'Signup failed')
    }
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        <div className="auth-container">
          <div className="card auth-card">
            <h1 className="auth-title">Create Account</h1>
            <p className="auth-subtitle">Join PulseNet for better healthcare</p>

            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Choose a username"
                value={data.username}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={data.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Create a password"
                value={data.password}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password2">Confirm Password</label>
              <input
                id="password2"
                type="password"
                name="password2"
                placeholder="Confirm your password"
                value={data.password2}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <button className="btn-primary" onClick={handleSignup}>
              Create Account
            </button>

            <p className="auth-footer">
              Already have an account? <Link to="/login" className="auth-link">Sign in</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Signup