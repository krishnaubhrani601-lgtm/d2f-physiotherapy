import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import AppointmentForm from "../components/AppointmentForm";
import ScrollReveal from "../components/ScrollReveal";
import clinicData from "../data/clinicData";

/**
 * BookAppointment Page:
 * - Validated appointment booking form that POSTs to Express backend
 * - Clinic address and timing sidebar
 * - FAQ snippet on what to expect for first visit
 */
function BookAppointment() {
  return (
    <div className="book-appointment-page">
      {/* ── Page Header ── */}
      <div className="page-header">
        <div className="container-custom">
          <div className="breadcrumb-custom">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Book Appointment</span>
          </div>
          <h1>Schedule an Appointment</h1>
          <p>Request an in-person assessment with Dr. Tanmai at D2F Clinic in Nashik</p>
        </div>
      </div>

      {/* ── Main Form Section ── */}
      <section className="section">
        <div className="container-custom">
          <div className="row g-5">
            {/* Form Column */}
            <div className="col-lg-7">
              <ScrollReveal direction="left">
                <SectionHeading
                  title="Appointment Request"
                  subtitle="Fill out the details below. Our clinic will contact you to confirm the time slot."
                  centered={false}
                />
                <AppointmentForm />
              </ScrollReveal>
            </div>

            {/* Sidebar Column */}
            <div className="col-lg-5">
              <ScrollReveal direction="right">
                <div className="card-custom p-4 mb-4">
                  <h4 className="mb-3">Clinic Information</h4>
                  <div className="d-flex align-items-start mb-3">
                    <span className="me-2 fs-5">📍</span>
                    <div>
                      <strong>Address:</strong>
                      <p className="small text-muted mb-0">{clinicData.address.full}</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <span className="me-2 fs-5">📞</span>
                    <div>
                      <strong>Phone:</strong>
                      <p className="small text-muted mb-0">
                        <a href={clinicData.contact.phoneLink} className="text-decoration-none">
                          {clinicData.contact.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <span className="me-2 fs-5">⏰</span>
                    <div>
                      <strong>Consultation Timings:</strong>
                      <p className="small text-muted mb-0">Monday – Saturday: 9:00 AM – 8:00 PM</p>
                      <p className="small text-muted mb-0">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="card-custom p-4 bg-light border-0">
                  <h5 className="mb-3 text-primary-dark">What to Bring on Your First Visit</h5>
                  <ul className="small text-muted mb-0 ps-3">
                    <li className="mb-2">Any prior medical imaging reports (X-rays, MRI, CT scans).</li>
                    <li className="mb-2">Doctor prescription or surgical discharge summary if applicable.</li>
                    <li className="mb-2">Comfortable, loose-fitting clothing to facilitate physical examination.</li>
                    <li>List of current medications or health conditions.</li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookAppointment;
