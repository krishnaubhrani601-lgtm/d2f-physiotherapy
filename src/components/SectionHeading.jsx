import ScrollReveal from "./ScrollReveal";
import "./SectionHeading.css";

/**
 * SectionHeading — Reusable heading component used at the top of
 * every page section. Provides consistent styling with optional
 * subtitle text and centered/left alignment.
 *
 * Props:
 *  - title: main heading text
 *  - subtitle: optional descriptive text below heading
 *  - centered: if true (default), center-aligns the heading
 *  - light: if true, uses white text (for dark backgrounds)
 */
function SectionHeading({ title, subtitle, centered = true, light = false }) {
  return (
    <ScrollReveal>
      <div
        className={`section-heading ${centered ? "text-center" : ""} ${
          light ? "section-heading--light" : ""
        }`}
      >
        <h2 className="section-heading__title">{title}</h2>
        <div className="section-heading__bar"></div>
        {subtitle && (
          <p className="section-heading__subtitle">{subtitle}</p>
        )}
      </div>
    </ScrollReveal>
  );
}

export default SectionHeading;
