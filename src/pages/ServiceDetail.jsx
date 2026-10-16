import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import clinicData from "../data/clinicData";
import API_BASE from "../data/apiConfig";

/**
 * ServiceDetail Page:
 * Reusable dynamic template driven by route parameter /services/:id
 * Fetches specific service or falls back to clinicData.
 * Contains detailed explanation, indications, and appointment CTA.
 */
function ServiceDetail() {
  const { id } = useParams();
  const serviceId = parseInt(id, 10);

  const [service, setService] = useState(
    clinicData.services.find((s) => s.id === serviceId) || clinicData.services[0]
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetch(`${API_BASE}/services`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted && Array.isArray(data)) {
          const found = data.find((s) => s.id === serviceId);
          if (found) setService(found);
        }
      })
      .catch(() => {
        // Fallback already assigned
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [serviceId]);

  if (!service) {
    return (
      <div className="container-custom section text-center" style={{ paddingTop: "120px" }}>
        <h2>Service Not Found</h2>
        <p>The requested physiotherapy service does not exist.</p>
        <Link to="/services" className="btn-primary-custom">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      {/* ── Page Header ── */}
      <div className="page-header">
        <div className="container-custom">
          <div className="breadcrumb-custom">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <span className="current">{service.name}</span>
          </div>
          <h1>{service.name}</h1>
          <p>Personalized physiotherapy care at D2F Clinic, Nashik</p>
        </div>
      </div>

      {/* ── Content Section ── */}
      <section className="section">
        <div className="container-custom">
          <div className="row g-5">
            {/* Left Column: Details */}
            <div className="col-lg-8">
              <div className="card-custom p-4 p-md-5 mb-4">
                <div className="d-flex align-items-center mb-4">
                  <span className="fs-1 me-3 p-3 rounded" style={{ background: "var(--clr-primary-50)" }}>
                    {service.icon || "🩺"}
                  </span>
                  <div>
                    <span className="badge-custom mb-1">Clinical Service</span>
                    <h2 className="mb-0">{service.name}</h2>
                  </div>
                </div>

                <h4 className="mt-4 mb-3">Service Overview</h4>
                <p className="lead text-muted">
                  {service.shortDesc || service.description}
                </p>

                <p>
                  At D2F Physiotherapy, our approach to {service.name.toLowerCase()} focuses on discovering the underlying mechanical root of discomfort rather than masking symptoms. Dr. Tanmai performs an in-depth clinical evaluation of joint mobility, tissue flexibility, and movement patterns to develop a personalized care protocol.
                </p>

                <h4 className="mt-4 mb-3">What Does an Assessment Include?</h4>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-start mb-2">
                    <span className="me-2 text-primary">✓</span>
                    <span>Detailed review of medical history, lifestyle factors, and physical demands.</span>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <span className="me-2 text-primary">✓</span>
                    <span>Range of motion (ROM) measurement and functional movement screening.</span>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <span className="me-2 text-primary">✓</span>
                    <span>Specific orthopedic and neurological provocation testing if indicated.</span>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <span className="me-2 text-primary">✓</span>
                    <span>Collaborative goal-setting for daily movement and functional independence.</span>
                  </li>
                </ul>

                <h4 className="mt-4 mb-3">Interventions &amp; Modalities</h4>
                <p>
                  Depending on your clinical assessment findings, interventions may incorporate manual therapy, joint mobilization, myofascial release, targeted strengthening, and functional neuromuscular re-education. Additionally, home exercise protocols are taught to reinforce clinic progress.
                </p>

                <div className="disclaimer mt-4">
                  <strong>Important Note:</strong> Recovery timelines vary from person to person depending on tissue state, overall health, and adherence to prescribed exercises. No specific recovery duration is guaranteed.
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="col-lg-4">
              <div className="card-custom p-4 position-sticky" style={{ top: "100px" }}>
                <h4 className="mb-3">Ready to Consult?</h4>
                <p className="small text-muted mb-4">
                  Schedule your physical assessment with Dr. Tanmai to discuss your condition.
                </p>
                <Link to="/book-appointment" className="btn-primary-custom w-100 justify-content-center mb-3">
                  Book an Appointment
                </Link>
                <a href={clinicData.contact.phoneLink} className="btn-outline-custom w-100 justify-content-center mb-4">
                  Call {clinicData.contact.phone}
                </a>

                <div className="border-top pt-3">
                  <h6 className="fw-bold mb-2">Clinic Hours</h6>
                  <p className="small text-muted mb-1">Monday – Saturday: 9:00 AM – 8:00 PM</p>
                  <p className="small text-muted mb-3">Sunday: Closed</p>

                  <h6 className="fw-bold mb-2">Clinic Address</h6>
                  <p className="small text-muted mb-0">{clinicData.address.full}</p>
                </div>

                <div className="mt-4 pt-3 border-top">
                  <Link to="/services" className="text-primary small fw-semibold text-decoration-none">
                    ← Back to All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetail;
