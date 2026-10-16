import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import clinicData from "../data/clinicData";
import "./Navbar.css";

/**
 * Navbar Component with Slide-Out Side Drawer ("Coming out small page")
 * 
 * - Desktop Top Bar: Clean & uncluttered with brand, primary links, Book CTA,
 *   and a dedicated 3-line menu toggle ("☰ Menu").
 * - Slide-Out Side Drawer (Offcanvas): Opens smoothly from the right side,
 *   containing all sub-pages (Our Process, Stories, Reviews, Gallery, FAQ, Contact, Admin Demo).
 * - Solves link overflow completely across all viewport resolutions.
 */
function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close side drawer whenever route changes and scroll to top
  useEffect(() => {
    setDrawerOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Header scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);
  const closeDrawer = () => setDrawerOpen(false);

  // Main primary links visible in top header (desktop)
  const primaryLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/conditions", label: "Conditions" },
    { to: "/about-doctor", label: "About Doctor" },
    { to: "/contact", label: "Contact" },
  ];

  // All grouped links inside the slide-out drawer
  const drawerSections = [
    {
      title: "Clinic & Care",
      links: [
        { to: "/", label: "Home", icon: "🏠" },
        { to: "/about-doctor", label: "About Dr. Tanmai", icon: "🩺" },
        { to: "/about-clinic", label: "About the Clinic", icon: "🏥" },
        { to: "/care-process", label: "Our Care Process", icon: "🔄", badge: "Journey" },
      ],
    },
    {
      title: "Treatments & Conditions",
      links: [
        { to: "/services", label: "All Services", icon: "💪" },
        { to: "/conditions", label: "Conditions We Treat", icon: "📋" },
        { to: "/stories", label: "Treatment Stories", icon: "📖" },
      ],
    },
    {
      title: "Patient Experience",
      links: [
        { to: "/reviews", label: "Patient Reviews", icon: "⭐", badge: "5.0 ★" },
        { to: "/gallery", label: "Clinic Gallery", icon: "🖼️" },
        { to: "/faq", label: "Frequently Asked Questions", icon: "❓" },
        { to: "/contact", label: "Contact & Location", icon: "📍" },
      ],
    },
    {
      title: "Examiner & Project",
      links: [
        { to: "/admin-demo", label: "Admin Demo Dashboard", icon: "⚙️", badge: "MySQL Demo" },
      ],
    },
  ];

  return (
    <>
      {/* ── Main Sticky Top Navigation Bar ── */}
      <header className={`navbar-custom ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="container-custom navbar-inner">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand" onClick={closeDrawer}>
            <span className="navbar-brand__icon">D2F</span>
            <div className="navbar-brand__meta">
              <span className="navbar-brand__title">D2F Physiotherapy</span>
              <span className="navbar-brand__sub">by Dr. Tanmai</span>
            </div>
          </Link>

          {/* Primary Desktop Nav Links (neat, non-overflowing) */}
          <nav className="navbar-primary-nav d-none d-lg-flex" aria-label="Primary Navigation">
            {primaryLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `navbar-link ${isActive ? "navbar-link--active" : ""}`
                }
                end={link.to === "/"}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Controls: Book CTA + 3-Line Side Header Toggle */}
          <div className="navbar-controls">
            <Link
              to="/book-appointment"
              className="btn-primary-custom navbar-cta d-none d-sm-inline-flex"
            >
              Book Appointment
            </Link>

            {/* 3-Line Header Button (Triggers the slide-out side page) */}
            <button
              className={`drawer-trigger-btn ${drawerOpen ? "is-active" : ""}`}
              onClick={toggleDrawer}
              aria-label="Toggle navigation drawer"
              aria-expanded={drawerOpen}
            >
              <div className="hamburger-box">
                <span className="hamburger-line line-1"></span>
                <span className="hamburger-line line-2"></span>
                <span className="hamburger-line line-3"></span>
              </div>
              <span className="drawer-trigger-label d-none d-md-inline">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Backdrop Overlay ── */}
      <div
        className={`drawer-backdrop ${drawerOpen ? "drawer-backdrop--active" : ""}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* ── Slide-Out Side Drawer ("Coming Out Small Page") ── */}
      <aside
        className={`drawer-sidebar ${drawerOpen ? "drawer-sidebar--open" : ""}`}
        aria-label="Side Navigation Drawer"
      >
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-brand">
            <span className="drawer-brand__icon">D2F</span>
            <div>
              <h5 className="mb-0">D2F Physiotherapy</h5>
              <small className="text-muted">Dysfunction to Function</small>
            </div>
          </div>
          <button
            className="drawer-close-btn"
            onClick={closeDrawer}
            aria-label="Close menu drawer"
          >
            ✕
          </button>
        </div>

        {/* Drawer Content / Grouped Links */}
        <div className="drawer-body">
          {/* Quick Appointment Callout */}
          <div className="drawer-cta-card mb-4">
            <p className="small mb-2 fw-medium text-dark">Need an in-person physical assessment?</p>
            <Link
              to="/book-appointment"
              className="btn-primary-custom w-100 justify-content-center btn-sm"
              onClick={closeDrawer}
            >
              📅 Schedule Appointment
            </Link>
          </div>

          {/* Sections of Sub Pages */}
          {drawerSections.map((sec, idx) => (
            <div key={idx} className="drawer-section">
              <h6 className="drawer-section__title">{sec.title}</h6>
              <ul className="drawer-nav-list">
                {sec.links.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `drawer-nav-link ${isActive ? "drawer-nav-link--active" : ""}`
                      }
                      end={link.to === "/"}
                      onClick={closeDrawer}
                    >
                      <span className="drawer-nav-link__icon">{link.icon}</span>
                      <span className="drawer-nav-link__label">{link.label}</span>
                      {link.badge && (
                        <span className="drawer-nav-link__badge">{link.badge}</span>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Drawer Clinic Info Footer */}
          <div className="drawer-footer mt-4 pt-3 border-top">
            <p className="small text-muted mb-1">
              📍 <strong>Nashik Clinic:</strong> Shop No-1, Bagul Bldg, Racca Colony, New Pandit Colony.
            </p>
            <p className="small text-muted mb-2">
              📞 <strong>Phone:</strong>{" "}
              <a href={clinicData.contact.phoneLink} className="text-primary text-decoration-none">
                {clinicData.contact.phone}
              </a>
            </p>
            <p className="small text-muted mb-0">
              ⏰ Mon–Sat: 9:00 AM – 8:00 PM
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
