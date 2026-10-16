import { Link, useLocation } from "react-router-dom";
import "./FloatingCTA.css";

/**
 * FloatingCTA — Sticky bottom-right "Book Appointment" button.
 * Hidden on the /book-appointment and /admin-demo pages to prevent redundancy.
 */
function FloatingCTA() {
  const location = useLocation();

  // Don't show floating button on appointment booking or admin demo page
  if (location.pathname === "/book-appointment" || location.pathname === "/admin-demo") {
    return null;
  }

  return (
    <div className="floating-cta-container">
      <Link to="/book-appointment" className="floating-cta-btn" aria-label="Book an appointment">
        <span className="floating-cta-icon">📅</span>
        <span className="floating-cta-text">Book Appointment</span>
      </Link>
    </div>
  );
}

export default FloatingCTA;
