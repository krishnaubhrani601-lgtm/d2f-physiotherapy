import { Link } from "react-router-dom";
import clinicData from "../data/clinicData";
import "./Footer.css";

/**
 * Footer — Site-wide footer with clinic info, quick links,
 * contact details, opening hours, and medical disclaimer.
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container-custom">
          <div className="footer-grid">
            {/* Column 1: About */}
            <div className="footer-col">
              <div className="footer-brand">
                <span className="footer-brand__icon">D2F</span>
                <h3 className="footer-brand__name">{clinicData.name}</h3>
              </div>
              <p className="footer-tagline">{clinicData.tagline}</p>
              <p className="footer-desc">{clinicData.description}</p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col__title">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-doctor">About Doctor</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/care-process">Our Process</Link></li>
                <li><Link to="/book-appointment">Book Appointment</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="footer-col">
              <h4 className="footer-col__title">Services</h4>
              <ul className="footer-links">
                {clinicData.services.slice(0, 6).map((s) => (
                  <li key={s.id}>
                    <Link to={`/services/${s.id}`}>{s.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="footer-col">
              <h4 className="footer-col__title">Contact Us</h4>
              <div className="footer-contact">
                <div className="footer-contact__item">
                  <span className="footer-contact__icon">📍</span>
                  <span>{clinicData.address.full}</span>
                </div>
                <div className="footer-contact__item">
                  <span className="footer-contact__icon">📞</span>
                  <a href={clinicData.contact.phoneLink}>
                    {clinicData.contact.phone}
                  </a>
                </div>
                <div className="footer-contact__item">
                  <span className="footer-contact__icon">🕐</span>
                  <span>Mon–Sat: 9:00 AM – 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="footer-disclaimer">
        <div className="container-custom">
          <p>
            <strong>Disclaimer:</strong> Information on this site is for general
            awareness and is not a substitute for professional medical advice.
            Please consult a qualified physiotherapist for diagnosis and
            treatment specific to your condition. Recovery varies from person to
            person.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container-custom footer-bottom__inner">
          <p>&copy; {currentYear} {clinicData.fullName}. All rights reserved.</p>
          <p className="footer-bottom__project">
            College Project — Built with React &amp; Express
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
