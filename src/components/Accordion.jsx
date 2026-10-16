import { useState } from "react";
import "./Accordion.css";

/**
 * Accordion — Expandable FAQ-style component. Only one item can
 * be open at a time. Clicking an open item closes it.
 *
 * Props:
 *  - items: Array of { question, answer }
 */
function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-custom">
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${openIndex === index ? "accordion-item--open" : ""}`}
        >
          <button
            className="accordion-header"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span className="accordion-header__text">
              {item.question}
            </span>
            <span className="accordion-header__icon">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          <div className="accordion-body">
            <div className="accordion-body__inner">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
