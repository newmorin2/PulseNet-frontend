import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/AuthContext'

const departments = [
  'General Medicine',
  'Cardiology',
  'Pediatrics',
  'Orthopedics',
  'Emergency Care',
  'Dermatology',
]

function Appointment() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [formData, setFormData] = useState({
    fullName: user?.username || '',
    email: user?.email || '',
    phone: '',
    department: '',
    preferredDate: '',
    notes: ''
  })

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        fullName: prev.fullName || user.username || '',
        email: prev.email || user.email || ''
      }))
    }
  }, [user])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const existing = JSON.parse(localStorage.getItem('appointments') || '[]')
    const newAppointment = {
      id: Date.now(),
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      department: formData.department,
      preferredDate: formData.preferredDate,
      notes: formData.notes,
      title: `${formData.department} Appointment`,
      doctor: 'Assigned doctor soon',
      date: formData.preferredDate,
      statusClass: 'upcoming'
    }

    localStorage.setItem('appointments', JSON.stringify([newAppointment, ...existing]))
    alert('Appointment request submitted! You can view it on the Home page.')
    navigate('/')
  }

  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        <section className="hero">
          <div className="card page-card">
            <p className="hero-subtitle">PulseNet Hospital</p>
            <h1 className="page-title">Book Your Appointment</h1>
            <p className="page-text">
              Schedule a convenient time to visit our specialized doctors and receive quality healthcare.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <h3 className="section-title">Appointment Details</h3>
          </div>

          <div className="forms-grid">
            <div className="card form-card">
              <h4 className="form-title">Personal Information</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+254 700 000 000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="department">Select Department *</label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">-- Choose a department --</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="preferredDate">Preferred Date *</label>
                  <input
                    id="preferredDate"
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Additional Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    placeholder="Any symptoms or special requests..."
                    rows="4"
                    value={formData.notes}
                    onChange={handleChange}
                    className="form-input"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary">
                  Confirm Appointment
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Appointment
