import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import clinicData from "../data/clinicData";

/**
 * Our Care Process Page:
 * Step-by-step patient journey:
 * 1. Initial Assessment
 * 2. Personalized Plan
 * 3. Guided Treatment
 * 4. Progress Review
 * 5. Home Exercise Guidance
 */
function CareProcess() {
  return (
    <div className="care-process-page">
      {/* ── Page Header ── */}
      <div className="page-header">
        <div className="container-custom">
          <div className="breadcrumb-custom">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Our Care Process</span>
          </div>
          <h1>Our Care Process</h1>
          <p>Your step-by-step journey from dysfunction to function at D2F Clinic</p>
        </div>
      </div>

      {/* ── Process Steps ── */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="The Patient Journey"
            subtitle="A structured, collaborative approach designed to help you regain functional movement with confidence."
          />

          <div className="care-timeline my-5">
            {clinicData.careProcess.map((step, idx) => (
              <ScrollReveal key={step.step} delay={idx * 120}>
                <div className="row g-4 align-items-center mb-5 care-step-row">
                  <div className={`col-md-5 ${idx % 2 === 1 ? "order-md-2" : ""}`}>
                    <div className="card-custom p-4 p-md-5 h-100">
                      <div className="d-flex align-items-center mb-3">
                        <span className="badge-custom me-2">Step 0{step.step}</span>
                        <span className="fs-3">{step.icon}</span>
                      </div>
                      <h3 className="h4 mb-3">{step.title}</h3>
                      <p className="text-muted mb-0">{step.description}</p>
                    </div>
                  </div>
                  <div className="col-md-2 text-center d-none d-md-block">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center text-white fw-bold shadow-sm"
                      style={{
                        width: "60px",
                        height: "60px",
                        background: "linear-gradient(135deg, var(--clr-primary-500), var(--clr-primary-700))",
                        fontSize: "1.2rem",
                      }}
                    >
                      {step.step}
                    </div>
                  </div>
                  <div className={`col-md-5 ${idx % 2 === 1 ? "order-md-1" : ""}`}>
                    <div className="p-3">
                      <h5 className="text-primary fw-semibold mb-2">Key Focus</h5>
                      {step.step === 1 && (
                        <p className="small text-muted mb-0">
                          Comprehensive evaluation of posture, range of motion, muscle strength, and movement mechanics to identify the origin of impairment.
                        </p>
                      )}
                      {step.step === 2 && (
                        <p className="small text-muted mb-0">
                          Tailoring specific interventions, modalities, and exercises around your daily functional demands and ergonomic requirements.
                        </p>
                      )}
                      {step.step === 3 && (
                        <p className="small text-muted mb-0">
                          Hands-on manual therapy, joint mobilization, and supervised therapeutic exercises with careful attention to correct form.
                        </p>
                      )}
                      {step.step === 4 && (
                        <p className="small text-muted mb-0">
                          Periodic re-evaluations to observe functional progression, adjust exercise intensity, and celebrate incremental milestones.
                        </p>
                      )}
                      {step.step === 5 && (
                        <p className="small text-muted mb-0">
                          Empowering you with a sustainable home movement protocol so that functional benefits are maintained for long-term health.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* ── Safety & Timeline Notice ── */}
          <div className="disclaimer mt-5">
            <strong>Individual Variation Notice:</strong> Physical recovery is unique to every individual. Healing rates depend on personal health, injury history, tissue biology, and consistent follow-through with recommended home exercises. Dr. Tanmai will guide you through each stage based on ongoing assessment.
          </div>

          <div className="text-center mt-5">
            <Link to="/book-appointment" className="btn-primary-custom">
              Begin Your Journey — Book Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareProcess;
