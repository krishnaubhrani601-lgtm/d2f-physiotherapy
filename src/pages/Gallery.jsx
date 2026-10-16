import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import "./Gallery.css";

/**
 * Gallery Page:
 * Displays visual representations of clinic interior, consultation space,
 * rehabilitation equipment, and exercise zones based on the Maps listing.
 */
function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      category: "interior",
      title: "Clinic Reception & Consultation Area",
      description: "Clean, professional welcoming reception and dedicated patient waiting area at Bagul Building.",
      icon: "🛋️",
      tag: "Facility",
    },
    {
      id: 2,
      category: "equipment",
      title: "Manual Therapy & Treatment Table",
      description: "Ergonomic clinical examination plinth designed for detailed orthopedic and mobility assessments.",
      icon: "🛏️",
      tag: "Treatment",
    },
    {
      id: 3,
      category: "exercise",
      title: "Active Rehabilitation Zone",
      description: "Equipped with therapeutic exercise mats, foam rollers, and mobility tools for guided active movement.",
      icon: "🧘",
      tag: "Exercise",
    },
    {
      id: 4,
      category: "equipment",
      title: "Therapeutic Resistance Bands & Weights",
      description: "Graduated progressive resistance equipment for targeted muscle strengthening and joint stabilization.",
      icon: "🏋️",
      tag: "Strength",
    },
    {
      id: 5,
      category: "equipment",
      title: "Electrotherapy & Ultrasound Modalities",
      description: "Clinical electrotherapy modalities used for targeted pain modulation and soft-tissue therapy.",
      icon: "⚡",
      tag: "Modalities",
    },
    {
      id: 6,
      category: "exercise",
      title: "Balance & Proprioception Tools",
      description: "Wobble boards and stability trainers for ankle, knee, and dynamic equilibrium rehabilitation.",
      icon: "⚖️",
      tag: "Balance",
    },
    {
      id: 7,
      category: "interior",
      title: "Private Consultation Space",
      description: "Confidential assessment environment for in-depth discussion of personal medical history and goals.",
      icon: "📋",
      tag: "Consultation",
    },
    {
      id: 8,
      category: "exercise",
      title: "Posture & Ergonomic Screening Corner",
      description: "Specialized grid and posture analysis tools to evaluate spinal curvature and desk ergonomic strain.",
      icon: "🧍",
      tag: "Posture",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="gallery-page">
      {/* ── Page Header ── */}
      <div className="page-header">
        <div className="container-custom">
          <div className="breadcrumb-custom">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Clinic Gallery</span>
          </div>
          <h1>Clinic &amp; Equipment Gallery</h1>
          <p>Explore the therapeutic environment and rehabilitation facilities at D2F Clinic, Nashik</p>
        </div>
      </div>

      {/* ── Gallery Section ── */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Our Rehabilitation Environment"
            subtitle="Take a look inside D2F Physiotherapy Clinic, equipped for clinical assessment, hands-on treatment, and supervised exercises."
          />

          {/* Filter Buttons */}
          <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
            <button
              className={`btn ${activeCategory === "all" ? "btn-primary-custom" : "btn-outline-custom"} btn-sm`}
              onClick={() => setActiveCategory("all")}
            >
              All Areas
            </button>
            <button
              className={`btn ${activeCategory === "interior" ? "btn-primary-custom" : "btn-outline-custom"} btn-sm`}
              onClick={() => setActiveCategory("interior")}
            >
              Clinic Interior
            </button>
            <button
              className={`btn ${activeCategory === "equipment" ? "btn-primary-custom" : "btn-outline-custom"} btn-sm`}
              onClick={() => setActiveCategory("equipment")}
            >
              Equipment &amp; Modalities
            </button>
            <button
              className={`btn ${activeCategory === "exercise" ? "btn-primary-custom" : "btn-outline-custom"} btn-sm`}
              onClick={() => setActiveCategory("exercise")}
            >
              Active Exercise Area
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="row g-4">
            {filteredItems.map((item, idx) => (
              <div key={item.id} className="col-md-6 col-lg-3">
                <ScrollReveal delay={idx * 80}>
                  <div className="gallery-card card-custom h-100">
                    <div className="gallery-card-visual">
                      <span className="gallery-card-icon">{item.icon}</span>
                      <span className="gallery-card-tag">{item.tag}</span>
                    </div>
                    <div className="gallery-card-body p-4">
                      <h5 className="gallery-card-title mb-2">{item.title}</h5>
                      <p className="gallery-card-desc text-muted small mb-0">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>

          {/* Link to visit in person */}
          <div className="text-center mt-5">
            <p className="text-muted mb-3">
              Want to see our facilities in person? We welcome you to visit us in New Pandit Colony, Nashik.
            </p>
            <Link to="/contact" className="btn-primary-custom me-3">
              Get Directions
            </Link>
            <Link to="/book-appointment" className="btn-outline-custom">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
