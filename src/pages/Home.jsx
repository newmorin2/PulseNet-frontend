import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/AuthContext'

function Home() {
  const { user } = useAuth()
  const [savedAppointments, setSavedAppointments] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('appointments')
    if (stored) {
      setSavedAppointments(JSON.parse(stored))
    }
  }, [])

  const displayName =
    user?.username || user?.email?.split('@')[0] || 'Patient'
  const initials = displayName
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('') || 'P'

  const userAppointments = user?.email
    ? savedAppointments.filter((appointment) => appointment.email === user.email)
    : savedAppointments

  const appointments = [
    {
      id: 1,
      title: 'General Checkup',
      doctor: 'Dr. N. Patel',
      date: 'Jan 18, 2026',
      statusClass: 'completed'
    },
    {
      id: 2,
      title: 'Heart Review',
      doctor: 'Dr. L. Kim',
      date: 'Feb 02, 2026',
      statusClass: 'completed'
    },
    {
      id: 3,
      title: 'Lab Follow-up',
      doctor: 'Dr. A. Brown',
      date: 'Feb 14, 2026',
      statusClass: 'upcoming'
    }
  ]

  const allAppointments = [
    ...userAppointments.map((appointment) => ({
      id: appointment.id,
      title: appointment.title || `${appointment.department} Appointment`,
      doctor: appointment.doctor || 'Assigned doctor soon',
      date: appointment.preferredDate || appointment.date || 'TBD',
      statusClass: appointment.statusClass || 'upcoming'
    })),
    ...appointments
  ]

  const careTeam = [
    { name: "Dr. N. Patel", role: "Primary Care" },
    { name: "Mina Cole", role: "Nurse" },
    { name: "Alex Road", role: "Care Coordinator" }
  ];

  const medications = [
    { name: "Vitamin D", time: "Morning" },
    { name: "Blood Pressure Tablet", time: "Evening" }
  ];

  return (
    <div className="app-shell">
      <Navbar />

      <main className="main-content">
        <section className="hero">
          <div className="card hero-card">
            <p className="hero-subtitle">Patient page</p>
            <h1 className="hero-title">Hey {displayName}, here is your dashboard.</h1>
            <p className="hero-subtitle">
              You can see your appointments, your care team, and your next steps from one place.
            </p>
          </div>

          <div className="card profile-summary">
            <div className="profile-avatar">{initials}</div>
            <h2 className="profile-name">{displayName}</h2>
            {user?.email && <p className="profile-meta">{user.email}</p>}
            <p className="profile-meta">Signed in with PulseNet</p>

            <div className="reminder-card">
              <p className="reminder-title">Upcoming reminder</p>
              <p className="reminder-text">Check your next appointment details on the appointments page.</p>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <p className="stat-label">Appointments</p>
                <p className="stat-value">{userAppointments.length || '0'}</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Quick action</p>
                <p className="stat-value">Book a visit</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Account</p>
                <p className="stat-value">Patient</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <h3 className="section-title">Quick actions</h3>
          </div>

          <div className="quick-actions">
            <Link className="quick-action-card" to="/appointment">
              <span className="quick-action-title">Book visit</span>
              <span className="quick-action-text">Choose a date for your next checkup</span>
            </Link>
            <Link className="quick-action-card" to="/departments">
              <span className="quick-action-title">View departments</span>
              <span className="quick-action-text">See the services available to you</span>
            </Link>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <h3 className="section-title">Past appointments</h3>
            <Link className="section-link" to="/appointment">
              View all
            </Link>
          </div>

          <div className="appointment-list">
            {allAppointments.map((appointment) => (
              <div key={appointment.id} className="card appointment-card">
                <div className="appointment-left">
                  <h4 className="appointment-title">{appointment.title}</h4>
                  <p className="appointment-details">{appointment.doctor}</p>
                  <p className="appointment-details">{appointment.date}</p>
                </div>
                <span className={`badge ${appointment.statusClass}`}>
                  {appointment.statusClass}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <h3 className="section-title">Today at a glance</h3>
          </div>

          <div className="summary-grid">
            <div className="card summary-card">
              <p className="summary-title">Medication</p>
              <ul className="summary-list">
                {medications.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    <strong>{item.time}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card summary-card">
              <p className="summary-title">Care team</p>
              <div className="care-team-list">
                {careTeam.map((person) => (
                  <div key={person.name} className="care-team-card">
                    <p className="care-team-name">{person.name}</p>
                    <p className="care-team-role">{person.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;