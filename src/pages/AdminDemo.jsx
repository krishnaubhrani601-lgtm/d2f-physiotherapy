import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API_BASE from "../data/apiConfig";

/**
 * Admin Demo Page (/admin-demo):
 * College examiner presentation view displaying MySQL database records.
 * Prominent banner: "Demo data for project purposes only."
 * Shows:
 *  - Bootstrap table for Appointments
 *  - Bootstrap table for Contact Messages
 *  - Live fetch with fallback mock data when MySQL is disconnected
 */
function AdminDemo() {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLiveApi, setIsLiveApi] = useState(false);
  const [activeTab, setActiveTab] = useState("appointments");

  // Mock records for offline display so examiner can test UI even without MySQL started
  const mockAppointments = [
    {
      id: 1,
      patient_name: "Rohan Verma",
      phone: "90000 00001",
      email: "rohan.demo@example.com",
      service_name: "Musculoskeletal Physiotherapy",
      preferred_date: "2026-10-20",
      concern: "Lower back stiffness from desk work",
      status: "pending",
      created_at: "2026-10-16 09:30:00",
    },
    {
      id: 2,
      patient_name: "Priya Sharma",
      phone: "90000 00002",
      email: "priya.demo@example.com",
      service_name: "Sports Injury Rehabilitation",
      preferred_date: "2026-10-22",
      concern: "Overhead shoulder strain during tennis",
      status: "confirmed",
      created_at: "2026-10-16 10:15:00",
    },
    {
      id: 3,
      patient_name: "Arjun Nair",
      phone: "90000 00003",
      email: "arjun.demo@example.com",
      service_name: "Posture Correction",
      preferred_date: "2026-10-25",
      concern: "Upper thoracic tension and neck fatigue",
      status: "pending",
      created_at: "2026-10-16 11:00:00",
    },
  ];

  const mockContacts = [
    {
      id: 1,
      name: "Sneha Gokhale",
      email: "sneha.demo@example.com",
      message: "Inquiring about physiotherapy consultation timings on Saturdays.",
      created_at: "2026-10-16 08:45:00",
    },
    {
      id: 2,
      name: "Mahesh Patil",
      email: "mahesh.demo@example.com",
      message: "Do you provide ergonomic workstation guidance for home offices?",
      created_at: "2026-10-16 10:30:00",
    },
  ];

  const loadData = () => {
    setLoading(true);
    // Fetch live appointments from Express API
    fetch(`${API_BASE}/appointments`)
      .then((res) => {
        if (!res.ok) throw new Error("API offline");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setAppointments(data);
          setIsLiveApi(true);
        }
      })
      .catch(() => {
        setAppointments(mockAppointments);
        setIsLiveApi(false);
      })
      .finally(() => {
        setLoading(false);
      });

    // Fetch contact messages
    fetch(`${API_BASE}/contact`)
      .then((res) => {
        if (!res.ok) throw new Error("API offline");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setContacts(data);
        }
      })
      .catch(() => {
        setContacts(mockContacts);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="admin-demo-page" style={{ paddingTop: "var(--navbar-height)", minHeight: "85vh" }}>
      {/* ── Required Examiner Banner ── */}
      <div className="bg-warning text-dark py-3 px-4 border-bottom shadow-sm">
        <div className="container-custom d-flex justify-content-between align-items-center flex-wrap gap-2">
          <div className="d-flex align-items-center">
            <span className="fs-4 me-2">⚠️</span>
            <div>
              <strong>Demo data for project purposes only.</strong>
              <span className="d-block small">
                College Project Evaluation Dashboard — Demonstrating React frontend integration with Node/Express and MySQL backend.
              </span>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className={`badge ${isLiveApi ? "bg-success" : "bg-secondary"}`}>
              {isLiveApi ? "● MySQL Backend Connected" : "○ Fallback Data (Server Offline)"}
            </span>
            <button className="btn btn-dark btn-sm" onClick={loadData}>
              ↻ Refresh Live Data
            </button>
          </div>
        </div>
      </div>

      <div className="container-custom py-5">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <div>
            <h2 className="mb-1">Admin Database Dashboard</h2>
            <p className="text-muted small mb-0">
              Shows records stored in MySQL tables (`appointments` and `contact_messages`).
            </p>
          </div>
          <div className="d-flex gap-2">
            <button
              className={`btn btn-sm ${activeTab === "appointments" ? "btn-primary" : "btn-outline-secondary"}`}
              onClick={() => setActiveTab("appointments")}
            >
              Appointments ({appointments.length})
            </button>
            <button
              className={`btn btn-sm ${activeTab === "contacts" ? "btn-primary" : "btn-outline-secondary"}`}
              onClick={() => setActiveTab("contacts")}
            >
              Contact Inquiries ({contacts.length})
            </button>
          </div>
        </div>

        {/* ── Tab 1: Appointments Table ── */}
        {activeTab === "appointments" && (
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
              <h5 className="mb-0 text-primary">Appointment Requests Table (MySQL: `appointments`)</h5>
              <span className="badge bg-light text-dark border">
                Total: {appointments.length} Records
              </span>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover table-striped mb-0 align-middle">
                  <thead className="table-light">
                    <tr>
                      <th scope="col" style={{ width: "60px" }}>#ID</th>
                      <th scope="col">Patient Name</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Email</th>
                      <th scope="col">Service</th>
                      <th scope="col">Preferred Date</th>
                      <th scope="col">Concern / Symptoms</th>
                      <th scope="col">Status</th>
                      <th scope="col">Submitted At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="9" className="text-center py-4 text-muted">
                          Loading appointment records...
                        </td>
                      </tr>
                    ) : appointments.length === 0 ? (
                      <tr>
                        <td colSpan="9" className="text-center py-4 text-muted">
                          No appointment requests found in database.
                        </td>
                      </tr>
                    ) : (
                      appointments.map((apt) => (
                        <tr key={apt.id}>
                          <td className="fw-bold">{apt.id}</td>
                          <td>
                            <strong>{apt.patient_name}</strong>
                          </td>
                          <td>{apt.phone}</td>
                          <td>
                            <small className="text-muted">{apt.email}</small>
                          </td>
                          <td>
                            <span className="badge bg-info text-dark">
                              {apt.service_name || `Service #${apt.service_id}`}
                            </span>
                          </td>
                          <td>{apt.preferred_date ? String(apt.preferred_date).slice(0, 10) : "N/A"}</td>
                          <td>
                            <small className="text-secondary d-inline-block text-truncate" style={{ maxWidth: "220px" }}>
                              {apt.concern}
                            </small>
                          </td>
                          <td>
                            <span
                              className={`badge ${
                                apt.status === "confirmed"
                                  ? "bg-success"
                                  : apt.status === "completed"
                                  ? "bg-secondary"
                                  : "bg-warning text-dark"
                              }`}
                            >
                              {apt.status || "pending"}
                            </span>
                          </td>
                          <td>
                            <small className="text-muted">
                              {apt.created_at ? new Date(apt.created_at).toLocaleString() : "Just now"}
                            </small>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ── Tab 2: Contact Messages Table ── */}
        {activeTab === "contacts" && (
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
              <h5 className="mb-0 text-primary">Contact Messages Table (MySQL: `contact_messages`)</h5>
              <span className="badge bg-light text-dark border">
                Total: {contacts.length} Records
              </span>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover table-striped mb-0 align-middle">
                  <thead className="table-light">
                    <tr>
                      <th scope="col" style={{ width: "60px" }}>#ID</th>
                      <th scope="col">Sender Name</th>
                      <th scope="col">Email Address</th>
                      <th scope="col">Inquiry Message</th>
                      <th scope="col">Received At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="5" className="text-center py-4 text-muted">
                          Loading contact messages...
                        </td>
                      </tr>
                    ) : contacts.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center py-4 text-muted">
                          No messages found.
                        </td>
                      </tr>
                    ) : (
                      contacts.map((msg) => (
                        <tr key={msg.id}>
                          <td className="fw-bold">{msg.id}</td>
                          <td>
                            <strong>{msg.name}</strong>
                          </td>
                          <td>
                            <small className="text-muted">{msg.email}</small>
                          </td>
                          <td>{msg.message}</td>
                          <td>
                            <small className="text-muted">
                              {msg.created_at ? new Date(msg.created_at).toLocaleString() : "Recent"}
                            </small>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Technical Viva Explanation Box */}
        <div className="card bg-light border p-4 mt-5">
          <h5 className="text-primary mb-2">🎓 College Project Architecture Explanation</h5>
          <p className="small text-muted mb-2">
            <strong>Data Flow:</strong> React components submit HTTP POST requests via <code>fetch()</code> to the Express REST API (<code>/api/appointments</code>, <code>/api/contact</code>).
          </p>
          <p className="small text-muted mb-2">
            <strong>Security:</strong> All MySQL queries utilize parameterized prepared statements (e.g., <code>INSERT INTO appointments (...) VALUES (?, ?, ...)</code>) via the <code>mysql2/promise</code> pool to strictly prevent SQL Injection attacks.
          </p>
          <p className="small text-muted mb-0">
            <strong>Resilience:</strong> If MySQL is stopped or unconfigured during testing, the frontend displays clear mock fallback data without crashing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminDemo;
