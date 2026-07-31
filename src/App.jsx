import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Appointment from './pages/Appointment'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Appointment />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Departments from "./pages/Departments";
import ProtectedRoute from "./components/ProtectedRoute";


function Home(){
  return <h1>Hospital Home</h1>
}

function App(){

return (

  <BrowserRouter>
  <Routes>

  <Route
    path="/login"
    element={<Login/>}
  />

  <Route
    path="/signup"
    element={<Signup/>}
  />

  <Route
    path="/"
    element={
  <ProtectedRoute>
    <Home/>
  </ProtectedRoute>

}
/>
   <Route
  path="/departments"
  element={
    <ProtectedRoute>
      <Departments />
    </ProtectedRoute>
  }
  />


  </Routes>
  </BrowserRouter>
)
}

export default App;