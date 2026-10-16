import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import clinicData from "../data/clinicData";
import API_BASE from "../data/apiConfig";

/**
 * Services Page:
 * - Displays all clinic physiotherapy services as modern cards
 * - Fetches from Express API (/api/services) with automatic fallback
 * - Each card links to /services/:id for the full detail view
 */
function Services() {
  const [services, setServices] = useState(clinicData.services);
  const [loading, setLoading] = useState(true);
  const [errorNotice, setErrorNotice] = useState(false);

  useEffect(() => {
    let isMounted = true;
    fetch(`${API_BASE}/services`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load services");
        return res.json();
      })
      .then((data) => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setServices(data);
        }
      })
      .catch(() => {
        if (isMounted) setErrorNotice(true);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="services-page">
      {/* ── Page Header ── */}
      <div className="page-header">
        <div className="container-custom">
          <div className="breadcrumb-custom">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Services</span>
          </div>
          <h1>Physiotherapy Services</h1>
          <p>Comprehensive rehabilitation modalities for physical health and functional mobility</p>
        </div>
      </div>

      {/* ── Services Grid Section ── */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Tailored Rehabilitation Offerings"
            subtitle="Every rehabilitation protocol is adapted to the patient's biomechanics, lifestyle demands, and assessment findings."
          />

          {errorNotice && (
            <div className="alert alert-info text-center mb-4" role="alert">
              ℹ️ Displaying cached clinic services. (Backend server is offline or unreachable.)
            </div>
          )}

          {loading ? (
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Loading clinic services...</p>
            </div>
          ) : (
            <div className="row g-4">
              {services.map((service, index) => (
                <div key={service.id} className="col-md-6 col-lg-3">
                  <ServiceCard service={service} delay={index * 80} />
                </div>
              ))}
            </div>
          )}

          {/* ── Medical Disclaimer Box ── */}
          <div className="disclaimer mt-5">
            <strong>Medical Notice:</strong> Physiotherapy services and modality selections are determined solely following an in-person clinical assessment by Dr. Tanmai. We do not provide generic guarantees of recovery time. Every individual progresses at their own pace.
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
