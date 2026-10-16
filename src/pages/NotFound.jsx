import { Link } from "react-router-dom";

/**
 * NotFound Page (404):
 * Displays when user navigates to an invalid route.
 * Offers quick links to return to Home, Services, or Contact.
 */
function NotFound() {
  return (
    <div
      className="not-found-page text-center"
      style={{
        paddingTop: "calc(var(--navbar-height) + 5rem)",
        paddingBottom: "6rem",
        minHeight: "75vh",
      }}
    >
      <div className="container-custom">
        <span style={{ fontSize: "5rem", display: "block", marginBottom: "1rem" }}>🩺</span>
        <h1 className="display-3 fw-bold text-primary mb-2">404</h1>
        <h2 className="mb-3">Page Not Found</h2>
        <p className="lead text-muted max-w-600 mx-auto mb-4" style={{ maxWidth: "550px" }}>
          We could not locate the page you were searching for. It may have been moved or the address might be mistyped.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/" className="btn-primary-custom">
            Return to Homepage
          </Link>
          <Link to="/services" className="btn-outline-custom">
            Explore Services
          </Link>
          <Link to="/contact" className="btn-outline-custom">
            Contact Clinic
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
