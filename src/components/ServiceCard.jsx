import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import "./ServiceCard.css";

/**
 * ServiceCard — Displays a single service as a card with icon,
 * name, description, and a "Learn More" link.
 *
 * Props:
 *  - service: { id, name, icon, shortDesc }
 *  - delay: animation stagger delay in ms
 */
function ServiceCard({ service, delay = 0 }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="service-card card-custom">
        <div className="service-card__icon">{service.icon}</div>
        <h3 className="service-card__title">{service.name}</h3>
        <p className="service-card__desc">{service.shortDesc || service.description}</p>
        <Link to={`/services/${service.id}`} className="service-card__link">
          Learn More →
        </Link>
      </div>
    </ScrollReveal>
  );
}

export default ServiceCard;
