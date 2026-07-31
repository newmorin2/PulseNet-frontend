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
}

export default App
