import '../App.css'

const departments = [
  'General Medicine',
  'Cardiology',
  'Pediatrics',
  'Orthopedics',
  'Emergency Care',
  'Dermatology',
]

function Appointment() {
  return (
    <main className="app-shell">
      <nav className="navbar">
        <a href="#appointment">Appointment</a>
      </nav>

      <section className="hero-section" aria-labelledby="hero-title">
        <p className="eyebrow">PulseNet Hospital</p>
        <h1 id="hero-title">Patient Appointment System</h1>
      </section>

      <section className="forms-section" aria-label="PulseNet patient forms">
        <form className="care-card" id="appointment">
          <div className="form-heading">
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
          <button className="button" type="button">
            Confirm Appointment
          </button>
        </form>

        <form className="care-card" id="problem">
          <div className="form-heading">
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
          <button className="button" type="button">
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

export default Appointment
