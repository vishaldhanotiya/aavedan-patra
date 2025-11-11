import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center p-4">
      <div className="text-center" style={{ maxWidth: '600px' }}>
        <h1 className="display-4 fw-bold mb-4">Aavedanpatra.in is Coming Soon</h1>
        <p className="lead mb-4">
          Your one-stop platform for <strong>government scheme applications</strong>, <strong>job application assistance</strong>, <strong>resume help</strong>, and <strong>education & career guidance</strong>—all in your language.
        </p>

        <div className="text-start mb-4">
          <h3 className="mb-3">Features you can expect:</h3>
          <ul className="list-group list-group-flush fs-5">
            <li className="list-group-item">📝 Guided application assistance for jobs, schemes, & certificates</li>
            <li className="list-group-item">📃 Comprehensive, multilingual government schemes blog in Hindi & English</li>
            <li className="list-group-item">💼 Job portal with expert resume building and interview tips</li>
            <li className="list-group-item">🎓 Education & internship guides with scholarship information</li>
            <li className="list-group-item">🌐 Support for Hindi, English, Tamil, Telugu, Malayalam, and more</li>
            <li className="list-group-item">🚀 AI-assisted form filling combined with human verification</li>
            <li className="list-group-item">📊 Interactive tools such as eligibility checkers and calculators</li>
            <li className="list-group-item">🔒 Trusted, secure, and user-friendly experience</li>
          </ul>
        </div>

        <p className="mb-4 fst-italic">
          Stay tuned! We're working hard to launch soon and empower millions with easy access to government services, jobs, and education.
        </p>

        <form className="d-flex justify-content-center" >
          <input
            type="email"
            className="form-control me-2"
            placeholder="Enter your email to get notified"
            aria-label="Email"
            required
          />
          <button type="submit" className="btn btn-primary">Notify Me</button>
        </form>

        <footer className="mt-5 text-muted small">
          © 2025 Aavedanpatra.in | All rights reserved
        </footer>
      </div>
    </div>
  );
}
