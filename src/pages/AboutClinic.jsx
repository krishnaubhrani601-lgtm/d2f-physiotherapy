import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import clinicData from "../data/clinicData";

/**
 * About the Clinic Page:
 * - Clinic story & founding concept ("Dysfunction to Function")
 * - Facility details & atmosphere (clean, welcoming, ergonomic)
 * - Clinic Core Values
 * - Quick preview link to photo gallery
 */
function AboutClinic() {
  const values = [
    {
      title: "Evidence-Based Practice",
      desc: "Our therapeutic choices are guided by recognized clinical literature and biomechanical principles.",
      icon: "📚",
    },
    {
      title: "Patient-Centered Care",
      desc: "We actively listen to your goals, daily routines, and lifestyle demands to tailor rehabilitation accordingly.",
      icon: "🎯",
    },
    {
      title: "Ethical & Transparent",
      desc: "Honest communication regarding your assessment findings, prognosis, and home care requirements.",
      icon: "🤝",
    },
    {
      title: "Education & Empowerment",
      desc: "We prioritize patient understanding so you can confidently safeguard your joint health for the future.",
      icon: "💡",
    },
  ];

  return (
    <div className="about-clinic-page">
      {/* ── Page Header ── */}
      <div className="page-header">
        <div className="container-custom">
          <div className="breadcrumb-custom">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">About the Clinic</span>
          </div>
          <h1>About D2F Physiotherapy</h1>
          <p>From Dysfunction to Function — Our Facility and Philosophy in Nashik</p>
        </div>
      </div>

      {/* ── Clinic Story ── */}
      <section className="section">
        <div className="container-custom">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <ScrollReveal direction="left">
                <span className="badge-custom mb-3">Our Founding Story</span>
                <h2>What Does "D2F" Stand For?</h2>
                <p className="lead text-primary-dark">
                  D2F represents the journey from <em>Dysfunction</em> to <em>Function</em>.
                </p>
                <p>
                  Whether caused by an acute sports injury, prolonged desk postures, post-surgical recovery, or age-related joint changes, physical dysfunction creates limitations in everyday life. D2F Physiotherapy Clinic was established by Dr. Tanmai in Nashik to provide focused, hands-on, and therapeutic exercise support aimed at helping patients regain natural, comfortable movement.
                </p>
                <p>
                  Located at Bagul Building in Racca Colony (behind Adgaonkar Sarees, New Pandit Colony), our clinic offers a calm, professional, and dedicated space designed for personalized rehabilitation.
                </p>
                <div className="mt-4">
                  <Link to="/services" className="btn-primary-custom me-3">
                    View Services
                  </Link>
                  <Link to="/contact" className="btn-outline-custom">
                    Find Location
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <div className="col-lg-6">
              <ScrollReveal direction="right">
                <div className="card-custom p-4 bg-light border-0 shadow-sm">
                  <div className="d-flex align-items-center mb-4">
                    <span className="fs-1 me-3">🏥</span>
                    <div>
                      <h4 className="mb-1">{clinicData.fullName}</h4>
                      <p className="text-muted small mb-0">{clinicData.address.full}</p>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="p-3 bg-white rounded shadow-xs border">
                        <span className="fw-bold d-block text-primary">★ {clinicData.rating}.0</span>
                        <span className="text-muted small">{clinicData.reviewCount} Google Reviews</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="p-3 bg-white rounded shadow-xs border">
                        <span className="fw-bold d-block text-primary">Mon – Sat</span>
                        <span className="text-muted small">9:00 AM – 8:00 PM</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 rounded" style={{ background: "var(--clr-primary-50)" }}>
                    <p className="small mb-0 text-primary-dark">
                      <strong>Focus Areas:</strong> Musculoskeletal care, Sports injury guidance, Post-surgical physical therapy, Ergonomic posture correction.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Clinic Facility & Atmosphere ── */}
      <section className="section section-alt">
        <div className="container-custom">
          <SectionHeading
            title="The Clinic Facility"
            subtitle="A clean, calm environment equipped for focused therapeutic exercises and hands-on treatment."
          />
          <div className="row g-4">
            <div className="col-md-4">
              <ScrollReveal delay={100}>
                <div className="card-custom text-center p-4 h-100">
                  <span className="fs-1 mb-3 d-block">🛋️</span>
                  <h4>Comfortable Consultation</h4>
                  <p className="text-muted small">
                    Dedicated private assessment areas allowing for comprehensive physical evaluation and detailed discussion of your movement health.
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <div className="col-md-4">
              <ScrollReveal delay={200}>
                <div className="card-custom text-center p-4 h-100">
                  <span className="fs-1 mb-3 d-block">🧘</span>
                  <h4>Active Exercise Space</h4>
                  <p className="text-muted small">
                    Space equipped with resistance bands, balance tools, and therapeutic mats for supervised functional movement training.
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <div className="col-md-4">
              <ScrollReveal delay={300}>
                <div className="card-custom text-center p-4 h-100">
                  <span className="fs-1 mb-3 d-block">🧼</span>
                  <h4>Hygiene &amp; Cleanliness</h4>
                  <p className="text-muted small">
                    Strict sanitation protocols maintained for treatment tables, rehabilitation equipment, and high-touch clinic surfaces.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Our Core Values"
            subtitle="The professional commitments that guide every consultation and therapy plan."
          />
          <div className="row g-4">
            {values.map((v, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <ScrollReveal delay={i * 100}>
                  <div className="card-custom p-4 h-100">
                    <span className="fs-2 mb-3 d-block">{v.icon}</span>
                    <h5 className="mb-2">{v.title}</h5>
                    <p className="text-muted small mb-0">{v.desc}</p>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/gallery" className="btn-outline-custom me-3">
              Explore Clinic Gallery &rarr;
            </Link>
            <Link to="/book-appointment" className="btn-primary-custom">
              Book Your Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutClinic;
