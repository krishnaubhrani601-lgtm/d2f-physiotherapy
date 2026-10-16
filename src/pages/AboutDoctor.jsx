import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import clinicData from "../data/clinicData";

/**
 * About the Doctor Page:
 * - Details Dr. Tanmai's background and philosophy of care
 * - Clearly marked placeholder for qualifications where unlisted on Google Maps
 * - Strictly factual without invented experience or fake awards
 */
function AboutDoctor() {
  return (
    <div className="about-doctor-page">
      {/* ── Page Header ── */}
      <div className="page-header">
        <div className="container-custom">
          <div className="breadcrumb-custom">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">About the Doctor</span>
          </div>
          <h1>About Dr. Tanmai</h1>
          <p>Lead Physiotherapist at D2F Physiotherapy Clinic, Nashik</p>
        </div>
      </div>

      {/* ── Main Doctor Section ── */}
      <section className="section">
        <div className="container-custom">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <ScrollReveal direction="left">
                <div className="card-custom text-center p-5">
                  <div className="doctor-avatar-circle mb-4 mx-auto" style={{ width: "160px", height: "160px", background: "linear-gradient(135deg, var(--clr-primary-500), var(--clr-primary-700))" }}>
                    <span style={{ fontSize: "3.5rem", fontWeight: "700", color: "#fff" }}>DT</span>
                  </div>
                  <h3 className="mb-1">{clinicData.doctor.name}</h3>
                  <p className="text-primary fw-semibold mb-2">{clinicData.doctor.title}</p>
                  <p className="badge-custom mb-3">Founder &amp; Chief Physiotherapist</p>
                  
                  <div className="border-top pt-3 text-start">
                    <p className="small mb-1">
                      <strong>Qualifications:</strong>
                    </p>
                    <p className="text-muted small">
                      {clinicData.doctor.qualifications}
                    </p>
                    <p className="small mb-1">
                      <strong>Location:</strong>
                    </p>
                    <p className="text-muted small">
                      {clinicData.address.short}
                    </p>
                    <p className="small mb-1">
                      <strong>Practice:</strong>
                    </p>
                    <p className="text-muted small">
                      D2F Physiotherapy (Dysfunction to Function)
                    </p>
                  </div>
                  
                  <Link to="/book-appointment" className="btn-primary-custom w-100 mt-4 justify-content-center">
                    Consult Dr. Tanmai
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="col-lg-7">
              <ScrollReveal direction="right">
                <div className="doctor-bio ps-lg-3">
                  <span className="badge-custom mb-3">Professional Profile</span>
                  <h2 className="mb-3">A Passion for Restoring Movement &amp; Function</h2>
                  <p className="lead text-muted">
                    At D2F Physiotherapy Clinic, Dr. Tanmai focuses on guiding individuals through evidence-based assessment, clinical rehabilitation, and proactive lifestyle education.
                  </p>

                  <h4 className="mt-4 mb-2">Our Philosophy of Care</h4>
                  <p>
                    {clinicData.doctor.philosophy}
                  </p>
                  <p>
                    The human body is an integrated kinetic chain. Rather than simply treating localized symptoms in isolation, Dr. Tanmai's clinical approach involves identifying underlying movement dysfunctions, joint mobility constraints, and muscle imbalances that contribute to discomfort.
                  </p>

                  <h4 className="mt-4 mb-2">Clinical Approach</h4>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-start mb-3">
                      <span className="me-2 text-primary fs-5">✓</span>
                      <div>
                        <strong>Thorough Biomechanical Evaluation:</strong> Comprehensive assessment of joint mechanics, muscle strength, posture, and movement patterns prior to designing any therapy plan.
                      </div>
                    </li>
                    <li className="d-flex align-items-start mb-3">
                      <span className="me-2 text-primary fs-5">✓</span>
                      <div>
                        <strong>Active Patient Partnership:</strong> Therapy is an active collaboration. Patients are educated on their condition and taught therapeutic movements they can practice independently.
                      </div>
                    </li>
                    <li className="d-flex align-items-start mb-3">
                      <span className="me-2 text-primary fs-5">✓</span>
                      <div>
                        <strong>Evidence-Based Techniques:</strong> Utilizing modern, proven physiotherapy modalities, joint mobilization, neuromuscular re-education, and structured exercise.
                      </div>
                    </li>
                  </ul>

                  <div className="disclaimer mt-4">
                    <strong>Medical Disclaimer:</strong> Information presented here is for patient awareness. Every individual's rehabilitation plan is formulated strictly after in-person clinical assessment. Recovery varies from person to person.
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutDoctor;
