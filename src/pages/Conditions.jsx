import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import clinicData from "../data/clinicData";

/**
 * Conditions We Treat Page:
 * - Informational overview across categories: Musculoskeletal, Sports, Neurological,
 *   Post-Surgical, Posture & Ergonomics, and General Rehabilitation.
 * - Prominent medical awareness disclaimer required by instructions.
 */
function Conditions() {
  return (
    <div className="conditions-page">
      {/* ── Page Header ── */}
      <div className="page-header">
        <div className="container-custom">
          <div className="breadcrumb-custom">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Conditions We Treat</span>
          </div>
          <h1>Conditions We Treat</h1>
          <p>Educational overview of physical and functional challenges addressed at D2F Clinic</p>
        </div>
      </div>

      {/* ── Prominent Mandatory Medical Disclaimer ── */}
      <div className="container-custom mt-4">
        <div className="disclaimer p-4 rounded-3 border-start border-4 border-primary">
          <h5 className="mb-2 text-primary fw-bold">Medical Disclaimer</h5>
          <p className="mb-0">
            Information on this site is for general awareness and is not a substitute for professional medical advice. Always consult a qualified physiotherapist or physician for personalized diagnosis and clinical management. Recovery varies from person to person; no guaranteed outcomes or timeframes apply.
          </p>
        </div>
      </div>

      {/* ── Condition Categories ── */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Areas of Physical Therapy Focus"
            subtitle="Explore how targeted physiotherapy interventions assist in restoring movement across various conditions."
          />

          <div className="row g-4">
            {clinicData.conditions.map((cat, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <ScrollReveal delay={idx * 80}>
                  <div className="card-custom h-100 p-4">
                    <div className="d-flex align-items-center mb-3">
                      <span className="badge-custom">{cat.category}</span>
                    </div>
                    <h4 className="mb-3">{cat.category} Care</h4>
                    <ul className="list-unstyled mb-4">
                      {cat.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="d-flex align-items-center mb-2 text-muted">
                          <span className="text-primary me-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-3 border-top">
                      <Link to="/book-appointment" className="text-primary fw-semibold small text-decoration-none">
                        Request Assessment for this &rarr;
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>

          {/* ── Consultation Advice ── */}
          <div className="card-custom p-5 mt-5 text-center bg-light border-0">
            <h3 className="mb-3">Don't See Your Condition Listed?</h3>
            <p className="text-muted max-w-600 mx-auto mb-4" style={{ maxWidth: "650px" }}>
              Many movement limitations and muscular pains involve overlapping anatomical factors. Contact Dr. Tanmai directly to discuss your specific symptoms and explore appropriate therapy options.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/book-appointment" className="btn-primary-custom">
                Schedule Consultation
              </Link>
              <Link to="/contact" className="btn-outline-custom">
                Contact the Clinic
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Conditions;
