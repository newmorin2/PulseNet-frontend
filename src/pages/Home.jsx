import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const appointments = [
    {
      id: 1,
      title: "General Checkup",
      doctor: "Dr. N. Patel",
      date: "Jan 18, 2026",
      statusClass: "completed"
    },
    {
      id: 2,
      title: "Heart Review",
      doctor: "Dr. L. Kim",
      date: "Feb 02, 2026",
      statusClass: "completed"
    },
    {
      id: 3,
      title: "Lab Follow-up",
      doctor: "Dr. A. Brown",
      date: "Feb 14, 2026",
      statusClass: "upcoming"
    }
  ];

  const careTeam = [
    { name: "Dr. N. Patel", role: "Primary Care" },
    { name: "Mina Cole", role: "Nurse" },
    { name: "Alex Road", role: "Care Coordinator" }
  ];

  return (
    <div className="app-shell">
      <Navbar />

      <main className="main-content">
        <section className="hero">
          <div className="card hero-card">
            <p className="hero-subtitle">Patient portal</p>
            <h1 className="hero-title">Welcome back, Sarah.</h1>
            <p className="hero-subtitle">
              You can review your recent visits, check your care team, and get ready for your next appointment from one simple screen.
            </p>
          </div>

          <div className="card profile-summary">
            <div className="profile-avatar">SJ</div>
            <h2 className="profile-name">Sarah Johnson</h2>
            <p className="profile-meta">DOB: 04/12/1988</p>
            <p className="profile-meta">Primary care: Dr. N. Patel</p>

            <div className="stats-grid">
              <div className="stat-card">
                <p className="stat-label">Visits</p>
                <p className="stat-value">12</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Next visit</p>
                <p className="stat-value">Feb 14</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Status</p>
                <p className="stat-value">Stable</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <h3 className="section-title">Quick actions</h3>
          </div>

          <div className="quick-actions">
            <Link className="quick-action-card" to="/appointments">
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
            <Link className="section-link" to="/appointments">
              View all
            </Link>
          </div>

          <div className="appointment-list">
            {appointments.map((appointment) => (
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
            <h3 className="section-title">Care team</h3>
          </div>

          <div className="care-team-list">
            {careTeam.map((person) => (
              <div key={person.name} className="card care-team-card">
                <p className="care-team-name">{person.name}</p>
                <p className="care-team-role">{person.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;