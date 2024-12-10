import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Landing from "./layout/landing";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            OMS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-primary">Login</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1>Welcome to OMS</h1>
          <p className="lead">
            Empower your organization with efficient management tools for
            departments, attendance, tasks, leaves, and salaries.
          </p>
          <button className="btn btn-light btn-lg mt-3">Register Your Organization</button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose Our OMS?</h2>
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <i className="bi bi-building fs-1 text-primary"></i>
              <h4 className="mt-3">Departmental Management</h4>
              <p>Organize your workforce with ease by creating departments and assigning roles.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-calendar-check fs-1 text-success"></i>
              <h4 className="mt-3">Attendance Management</h4>
              <p>Track employee attendance with detailed insights and daily reports.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-list-task fs-1 text-info"></i>
              <h4 className="mt-3">Task Management</h4>
              <p>Assign and monitor tasks efficiently to enhance productivity.</p>
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-4 text-center">
              <i className="bi bi-calendar2-minus fs-1 text-warning"></i>
              <h4 className="mt-3">Leave Management</h4>
              <p>Streamline leave requests and approvals with a few clicks.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-cash-stack fs-1 text-danger"></i>
              <h4 className="mt-3">Salary Management</h4>
              <p>Automate salary calculations and ensure timely payments.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-chat-left-dots fs-1 text-secondary"></i>
              <h4 className="mt-3">Group Communication</h4>
              <p>Enable seamless communication within departments and teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>© 2024 OMS. All rights reserved.</p>
        </div>
      </footer>
    </div>

  )
}

export default App
