import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import "./App.css";

function DepartmentsPage() {
  return (
    <div className="page-card card">
      <h1 className="page-title">Departments</h1>
      <p className="page-text">This section will show the clinic departments soon.</p>
    </div>
  );
}

function AppointmentPage() {
  return (
    <div className="page-card card">
      <h1 className="page-title">Appointments</h1>
      <p className="page-text">This section will show appointment details later.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;