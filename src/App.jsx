import './App.css'

const departments = [
  'General Medicine',
  'Cardiology',
  'Pediatrics',
  'Orthopedics',
  'Emergency Care',
  'Dermatology',
]

function App() {
  return (
    <main className="app-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="/">
          <span className="brand-mark">P</span>
          <span>
            <strong>PulseNet</strong>
            <small>Hospital</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#appointment">Appointment</a>
          <a href="#problem">Symptoms</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Patient care portal</p>
          <h1 id="hero-title">Book care and share symptoms with PulseNet.</h1>
          <p>
            A simple front desk experience for appointments and patient
            problem reports, combined into one hospital workflow.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#appointment">
              Book Appointment
            </a>
            <a className="secondary-link" href="#problem">
              Highlight Problem
            </a>
          </div>
        </div>

        <div className="hero-summary" aria-label="PulseNet service highlights">
          <div>
            <strong>24/7</strong>
            <span>Patient support</span>
          </div>
          <div>
            <strong>6</strong>
            <span>Departments</span>
          </div>
          <div>
            <strong>Fast</strong>
            <span>Doctor updates</span>
          </div>
        </div>
      </section>

      <section className="forms-section" aria-label="PulseNet patient forms">
        <form className="care-card" id="appointment">
          <div className="form-heading">
            <span className="status-dot blue"></span>
            <div>
              <p>Step 1</p>
              <h2>Book an Appointment</h2>
            </div>
          </div>

          <label>
            Full Name *
            <input type="text" name="fullName" placeholder="Enter your full name" />
          </label>
          <label>
            Email *
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Phone *
            <input type="tel" name="phone" placeholder="+254 700 000 000" />
          </label>
          <label>
            Select Department *
            <select name="department" defaultValue="">
              <option value="" disabled>
                -- Choose --
              </option>
              {departments.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </label>
          <label>
            Preferred Date *
            <input type="date" name="preferredDate" />
          </label>
          <label>
            Additional Notes
            <textarea
              name="notes"
              rows="4"
              placeholder="Any symptoms or requests..."
            ></textarea>
          </label>
          <button className="button blue-button" type="button">
            Confirm Appointment
          </button>
        </form>

        <form className="care-card" id="problem">
          <div className="form-heading">
            <span className="status-dot light-blue"></span>
            <div>
              <p>Step 2</p>
              <h2>Highlight Your Problems</h2>
            </div>
          </div>

          <label>
            Your Name *
            <input type="text" name="patientName" placeholder="Enter your name" />
          </label>
          <label>
            Email *
            <input type="email" name="patientEmail" placeholder="you@example.com" />
          </label>
          <label>
            Describe your symptoms or medical history *
            <textarea
              name="symptoms"
              rows="9"
              placeholder="e.g., chest pain, dizziness, previous surgery..."
            ></textarea>
          </label>
          <button className="button sky-button" type="button">
            Send to Doctor
          </button>
        </form>
      </section>

      <footer className="footer" id="contact">
        <strong>PulseNet Hospital</strong>
        <span>2026. Your health, our priority.</span>
      </footer>
    </main>
  )
}

export default App
