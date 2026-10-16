import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import clinicData from "../data/clinicData";
import API_BASE from "../data/apiConfig";

/**
 * Contact and Location Page:
 * - Clinic address, phone number, opening hours
 * - Embedded Google Map iframe
 * - Client-side validated contact form POSTing to Express /api/contact
 */
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null); // "success" | "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) errs.message = "Please enter your message.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitResult(null);
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitResult("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitResult("error");
      }
    } catch {
      setSubmitResult("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* ── Page Header ── */}
      <div className="page-header">
        <div className="container-custom">
          <div className="breadcrumb-custom">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Contact &amp; Location</span>
          </div>
          <h1>Contact &amp; Location</h1>
          <p>Find D2F Physiotherapy Clinic in Nashik or send us a direct message</p>
        </div>
      </div>

      {/* ── Main Contact & Details Section ── */}
      <section className="section">
        <div className="container-custom">
          <div className="row g-5">
            {/* Left: Contact Info & Hours */}
            <div className="col-lg-5">
              <ScrollReveal direction="left">
                <SectionHeading
                  title="Visit Our Clinic"
                  subtitle="We are conveniently located in New Pandit Colony, Nashik."
                  centered={false}
                />

                <div className="card-custom p-4 mb-4">
                  <div className="d-flex align-items-start mb-4">
                    <span className="fs-3 me-3 text-primary">📍</span>
                    <div>
                      <h5 className="mb-1">Address</h5>
                      <p className="text-muted small mb-0">{clinicData.address.full}</p>
                      <a
                        href={clinicData.address.googleMapsLink}
                        target="_blank"
                        rel="noreferrer"
                        className="small text-primary fw-semibold mt-2 d-inline-block text-decoration-none"
                      >
                        Open in Google Maps ↗
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-4">
                    <span className="fs-3 me-3 text-primary">📞</span>
                    <div>
                      <h5 className="mb-1">Phone Number</h5>
                      <p className="text-muted small mb-0">
                        <a href={clinicData.contact.phoneLink} className="text-decoration-none text-dark fw-semibold">
                          {clinicData.contact.phone}
                        </a>
                      </p>
                      <span className="text-muted small">Call for inquiries and timing confirmations</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <span className="fs-3 me-3 text-primary">⏰</span>
                    <div className="w-100">
                      <h5 className="mb-2">Operating Hours</h5>
                      <table className="table table-sm table-borderless small mb-0 text-muted">
                        <tbody>
                          {clinicData.hours.map((h, i) => (
                            <tr key={i}>
                              <td className="ps-0 py-1 fw-medium">{h.day}</td>
                              <td className="py-1 text-end">
                                <span className={h.open ? "text-success fw-semibold" : "text-danger"}>
                                  {h.time}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Validated Contact Form */}
            <div className="col-lg-7">
              <ScrollReveal direction="right">
                <SectionHeading
                  title="Send Us a Message"
                  subtitle="Have an inquiry about treatments or clinic appointments? Drop us a note below."
                  centered={false}
                />

                <div className="card-custom p-4 p-md-5">
                  {submitResult === "success" && (
                    <div className="alert alert-success text-center mb-4" role="alert">
                      ✅ Thank you! Your message has been received. We will respond promptly.
                    </div>
                  )}

                  {submitResult === "error" && (
                    <div className="alert alert-danger text-center mb-4" role="alert">
                      ⚠️ Could not send your message right now (Server is offline). Please call us at {clinicData.contact.phone}.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-3">
                      <label htmlFor="contact_name" className="form-label-custom">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact_name"
                        name="name"
                        className={`form-control-custom ${errors.name ? "is-invalid" : ""}`}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Anand Sharma"
                      />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="contact_email" className="form-label-custom">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="contact_email"
                        name="email"
                        className={`form-control-custom ${errors.email ? "is-invalid" : ""}`}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="anand@example.com"
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="contact_message" className="form-label-custom">
                        Your Message or Inquiry *
                      </label>
                      <textarea
                        id="contact_message"
                        name="message"
                        rows="5"
                        className={`form-control-custom ${errors.message ? "is-invalid" : ""}`}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we assist you with your physiotherapy needs?"
                      ></textarea>
                      {errors.message && <span className="form-error">{errors.message}</span>}
                    </div>

                    <button
                      type="submit"
                      className="btn-primary-custom w-100 justify-content-center"
                      disabled={submitting}
                    >
                      {submitting ? "Sending..." : "Submit Message"}
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Embedded Google Map ── */}
      <section className="section section-alt pt-0">
        <div className="container-custom">
          <SectionHeading
            title="Clinic Location on Google Maps"
            subtitle="Shop No-1, Bagul Bldg, Lane Number 5, behind Adgaonkar Sarees, Racca Colony, New Pandit Colony, Nashik"
          />
          <ScrollReveal direction="scale">
            <div className="map-container rounded-3 overflow-hidden shadow-sm border" style={{ height: "450px" }}>
              <iframe
                title="D2F Physiotherapy Clinic Location Map"
                src={clinicData.address.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default Contact;
