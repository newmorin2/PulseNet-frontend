import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { loginUser, setAuthToken } from '../services/auth'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login: loginContext } = useAuth()

  const handleLogin = async () => {
    try {
      setError('')
      const data = await loginUser(username, password)
      setAuthToken(data.access)
      loginContext(data.access, { username })
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.detail || 'Login failed')
    }
  }

  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        <div className="auth-container">
          <div className="card auth-card">
            <h1 className="auth-title">Welcome Back</h1>
            <p className="auth-subtitle">Sign in to your PulseNet account</p>

            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
              />
            </div>

            <button className="btn-primary" onClick={handleLogin}>
              Sign In
            </button>

            <p className="auth-footer">
              Don't have an account? <Link to="/signup" className="auth-link">Sign up</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login