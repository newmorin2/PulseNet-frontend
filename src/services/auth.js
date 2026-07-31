import api from './api'

export const loginUser = async (username, password) => {
  const response = await api.post('/token/', { username, password })
  return response.data
}

export const signupUser = async (userData) => {
  const response = await api.post('/signup/', userData)
  return response.data
}

export const getAuthToken = () => {
  return localStorage.getItem('access')
}

export const setAuthToken = (token) => {
  localStorage.setItem('access', token)
}

export const clearAuthToken = () => {
  localStorage.removeItem('access')
}
