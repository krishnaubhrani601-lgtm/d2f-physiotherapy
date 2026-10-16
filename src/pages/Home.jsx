import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import ReviewCard from "../components/ReviewCard";
import ScrollReveal from "../components/ScrollReveal";
import clinicData from "../data/clinicData";
import API_BASE from "../data/apiConfig";
import "./Home.css";

/**
 * Home Page:
 * - Hero section with clinic title, tagline, key stats, CTA buttons
 * - Short intro to clinic philosophy ("Dysfunction to Function")
 * - Highlights / key features (Patient-centric, Evidence-based, Hands-on approach)
 * - Services preview (fetches from API or fallback)
 * - Doctor preview
 * - Testimonials preview (fetches from API or fallback)
 * - Appointment CTA banner
 */
function Home() {
  const [services, setServices] = useState(clinicData.services.slice(0, 4));
  const [reviews, setReviews] = useState([]);
  const [loadingServices, setLoadingServices] = useState(true);

  // Fetch live services from backend with fallback
  useEffect(() => {
    let isMounted = true;
    fetch(`${API_BASE}/services`)
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setServices(data.slice(0, 4));
        }
      })
      .catch(() => {
        // Fallback already pre-set to static clinicData
      })
      .finally(() => {
        if (isMounted) setLoadingServices(false);
      });

    // Fetch live reviews from backend with fallback
    fetch(`${API_BASE}/reviews`)
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setReviews(data.slice(0, 3));
        }
      })
      .catch(() => {
        // Fallback sample reviews adhering strictly to medical safety rules
        if (isMounted) {
          setReviews([
            {
              reviewer_name: "Rahul Deshmukh",
              rating: 5,
              review_text:
                "Dr. Tanmai took the time to understand my back issue in detail. The exercises and posture advice were very helpful. Highly recommended clinic in Nashik.",
            },
            {
              reviewer_name: "Pooja Patil",
              rating: 5,
              review_text:
                "Clean clinic, polite attitude, and very attentive care. The personalized exercises helped me regain comfortable movement.",
            },
            {
              reviewer_name: "Amit Kulkarni",
              rating: 5,
              review_text:
                "Professional physiotherapy center. Thorough assessment done before starting any treatment. Feeling much better with steady progress.",
            },
          ]);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="home-page">
      {/* ── 1. Hero Section ── */}
      <section className="hero-section">
        <div className="container-custom">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <ScrollReveal direction="left">
                <div className="hero-content">
                  <div className="hero-badge">
                    <span className="hero-badge-dot"></span>
                    <span>{clinicData.tagline}</span>
                  </div>
                  <h1 className="hero-title">
                    Empowering Your Movement, <br />
                    <span className="text-gradient">Restoring Your Function.</span>
                  </h1>
                  <p className="hero-subtitle">
                    Welcome to {clinicData.fullName}. Located in New Pandit Colony, Nashik, we offer personalized physiotherapy and rehabilitation tailored to your specific needs.
                  </p>
                  <div className="hero-actions">
                    <Link to="/book-appointment" className="btn-primary-custom">
                      Book an Appointment
                    </Link>
                    <Link to="/services" className="btn-outline-custom">
                      Explore Services
                    </Link>
                  </div>
                  <div className="hero-stats">
                    <div className="stat-item">
                      <span className="stat-number">{clinicData.rating}.0 ★</span>
                      <span className="stat-label">Google Rating ({clinicData.reviewCount} Reviews)</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">Evidence-Based</span>
                      <span className="stat-label">Modern Rehab Techniques</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">Nashik</span>
                      <span className="stat-label">Convenient City Center</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <div className="col-lg-5">
              <ScrollReveal direction="right">
                <div className="hero-card-visual">
                  <div className="visual-circle circle-1"></div>
                  <div className="visual-circle circle-2"></div>
                  <div className="clinic-preview-card">
                    <div className="clinic-preview-badge">Featured Clinic</div>
                    <h3>D2F Physiotherapy</h3>
                    <p className="clinic-preview-doc">Led by Dr. Tanmai</p>
                    <div className="clinic-preview-divider"></div>
                    <ul className="clinic-preview-list">
                      <li>✓ Thorough Physical Assessment</li>
                      <li>✓ Individualized Treatment Plans</li>
                      <li>✓ Joint &amp; Soft Tissue Therapy</li>
                      <li>✓ Ergonomic &amp; Postural Guidance</li>
                    </ul>
                    <div className="clinic-preview-footer">
                      <span className="rating-pill">★ 5.0 Google Rating</span>
                      <Link to="/contact" className="learn-more-link">Visit Us →</Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Short Intro & Highlights ── */}
      <section className="section section-alt">
        <div className="container-custom">
          <SectionHeading
            title="Why Choose D2F Physiotherapy?"
            subtitle="Moving from dysfunction to function requires active partnership, clear assessment, and targeted exercises."
          />
          <div className="row g-4">
            <div className="col-md-4">
              <ScrollReveal delay={100}>
                <div className="highlight-card card-custom">
                  <div className="highlight-icon">🎯</div>
                  <h4>Assessment First</h4>
                  <p>
                    We never offer one-size-fits-all treatments. Every patient begins with a detailed physical examination to understand the root cause of movement limitations.
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <div className="col-md-4">
              <ScrollReveal delay={200}>
                <div className="highlight-card card-custom">
                  <div className="highlight-icon">🤲</div>
                  <h4>Hands-On &amp; Active Care</h4>
                  <p>
                    A balanced blend of skilled manual therapy techniques and guided corrective exercises that empower you to take an active role in your progress.
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <div className="col-md-4">
              <ScrollReveal delay={300}>
                <div className="highlight-card card-custom">
                  <div className="highlight-icon">🏡</div>
                  <h4>Home Routine Guidance</h4>
                  <p>
                    Rehabilitation continues beyond clinic walls. We provide clear, manageable home exercise guidelines so you can maintain consistent progress safely.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Services Preview ── */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Our Core Services"
            subtitle="Evidence-based physiotherapy interventions tailored to your unique anatomical and lifestyle needs."
          />
          {loadingServices ? (
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Loading clinic services...</p>
            </div>
          ) : (
            <div className="row g-4">
              {services.map((service, idx) => (
                <div key={service.id} className="col-md-6 col-lg-3">
                  <ServiceCard service={service} delay={idx * 100} />
                </div>
              ))}
            </div>
          )}
          <div className="text-center mt-5">
            <Link to="/services" className="btn-outline-custom">
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. Doctor Preview Section ── */}
      <section className="section section-alt">
        <div className="container-custom">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <ScrollReveal direction="left">
                <div className="doctor-visual-box">
                  <div className="doctor-avatar-circle">
                    <span className="doctor-initials">DT</span>
                  </div>
                  <div className="doctor-meta-card">
                    <h4>{clinicData.doctor.name}</h4>
                    <span className="doctor-role">{clinicData.doctor.title}</span>
                    <p className="doctor-loc">D2F Physiotherapy, Nashik</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <div className="col-lg-7">
              <ScrollReveal direction="right">
                <div className="doctor-preview-text">
                  <span className="badge-custom mb-3">Meet Your Physiotherapist</span>
                  <h2>Compassionate, Evidence-Driven Care</h2>
                  <p className="lead text-primary-dark">
                    "Helping patients move comfortably and confidently from dysfunction toward function."
                  </p>
                  <p>
                    {clinicData.doctor.about}
                  </p>
                  <p>
                    {clinicData.doctor.philosophy}
                  </p>
                  <div className="mt-4">
                    <Link to="/about-doctor" className="btn-primary-custom me-3">
                      Read Full Profile
                    </Link>
                    <Link to="/about-clinic" className="btn-outline-custom">
                      About the Clinic
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Testimonials Preview ── */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="What Our Patients Say"
            subtitle={`Rated ${clinicData.rating} out of 5 stars on Google based on ${clinicData.reviewCount}+ real patient experiences in Nashik.`}
          />
          <div className="row g-4">
            {reviews.map((rev, index) => (
              <div key={index} className="col-md-4">
                <ScrollReveal delay={index * 150}>
                  <ReviewCard review={rev} />
                </ScrollReveal>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/reviews" className="btn-outline-custom">
              Read All Google Reviews &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. Appointment CTA Banner ── */}
      <section className="cta-banner-section">
        <div className="container-custom">
          <ScrollReveal direction="scale">
            <div className="cta-banner">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h2>Take the First Step Toward Functional Movement</h2>
                  <p>
                    Consult Dr. Tanmai at D2F Physiotherapy in New Pandit Colony, Nashik. Early assessment helps address movement restrictions effectively.
                  </p>
                  <p className="cta-disclaimer">
                    * Recovery varies from person to person. Personalized treatment plans are designed following an in-person assessment.
                  </p>
                </div>
                <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                  <Link to="/book-appointment" className="btn-accent-custom me-2">
                    Request Appointment
                  </Link>
                  <a href={clinicData.contact.phoneLink} className="btn-outline-custom text-white border-white mt-2 mt-sm-0">
                    Call: {clinicData.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default Home;
