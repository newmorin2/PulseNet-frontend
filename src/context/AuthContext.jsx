import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()
const TOKEN_STORAGE_KEY = 'access'
const USER_STORAGE_KEY = 'currentUser'

const getStoredUser = () => {
  const stored = localStorage.getItem(USER_STORAGE_KEY)
  if (!stored) return null
  try {
    return JSON.parse(stored)
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getStoredUser())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY)
    const storedUser = getStoredUser()

    if (token && storedUser) {
      setUser({ ...storedUser, token })
    } else if (token) {
      setUser({ token })
    } else {
      setUser(null)
    }
    setIsLoading(false)
  }, [])

  const login = (token, userInfo = {}) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, token)
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userInfo))
    setUser({ ...userInfo, token })
  }

  const logout = () => {
    localStorage.removeItem(TOKEN_STORAGE_KEY)
    localStorage.removeItem(USER_STORAGE_KEY)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
