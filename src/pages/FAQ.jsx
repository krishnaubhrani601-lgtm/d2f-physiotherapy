import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import Accordion from "../components/Accordion";
import ScrollReveal from "../components/ScrollReveal";
import API_BASE from "../data/apiConfig";

/**
 * FAQ Page:
 * Expandable accordion addressing common patient questions.
 * Fetches from /api/faqs with fallback.
 * Strictly avoids promising recovery timelines or session counts.
 */
function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback FAQs adhering strictly to medical safety
  const fallbackFaqs = [
    {
      question: "What should I expect during my first visit to D2F Physiotherapy?",
      answer:
        "Your initial visit begins with a comprehensive physical assessment. Dr. Tanmai will review your symptoms, medical history, and daily movement patterns, test your joint range of motion, and discuss your personal rehabilitation goals before creating a personalized care plan.",
    },
    {
      question: "Do I need a doctor's referral to visit the clinic?",
      answer:
        "No formal referral is strictly required to schedule an initial physiotherapy assessment. However, if you have had recent surgery, medical imaging, or prescriptions from an orthopedic specialist, bringing those documents helps us understand your complete medical background.",
    },
    {
      question: "What clothing should I wear for my assessment?",
      answer:
        "Please wear comfortable, loose-fitting clothing that allows freedom of movement. For neck and shoulder concerns, a sleeveless top or loose shirt is helpful; for knee or hip concerns, shorts or track pants are recommended to allow clear visual assessment.",
    },
    {
      question: "How is my physiotherapy treatment plan decided?",
      answer:
        "Every treatment plan is customized after an in-person physical assessment. Dr. Tanmai tailors your plan according to your specific functional goals, the underlying mechanical cause, your lifestyle demands, and ongoing clinical progress.",
    },
    {
      question: "Will I receive exercises to perform at home?",
      answer:
        "Yes, home exercise guidance is an essential pillar of our care process. You will be taught specific, safe movements and postural habits to support your progress between clinic visits.",
    },
    {
      question: "What are the clinic opening hours and location in Nashik?",
      answer:
        "D2F Physiotherapy Clinic is open Monday through Saturday from 9:00 AM to 8:00 PM (closed on Sundays). We are located at Shop No-1, Bagul Bldg, Lane Number 5, behind Adgaonkar Sarees, Racca Colony, New Pandit Colony, Nashik.",
    },
    {
      question: "Why don't you guarantee a specific recovery timeline?",
      answer:
        "Every human body heals at its own biological rate. Factors such as overall health, tissue biology, sleep, nutrition, and consistent adherence to exercises all influence progress. We focus on providing personalized, evidence-based care rather than making generic timeline claims.",
    },
  ];

  useEffect(() => {
    let isMounted = true;
    fetch(`${API_BASE}/faqs`)
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setFaqs(data);
        } else {
          setFaqs(fallbackFaqs);
        }
      })
      .catch(() => {
        if (isMounted) setFaqs(fallbackFaqs);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="faq-page">
      {/* ── Page Header ── */}
      <div className="page-header">
        <div className="container-custom">
          <div className="breadcrumb-custom">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Frequently Asked Questions</span>
          </div>
          <h1>Frequently Asked Questions</h1>
          <p>Answers to common questions about consultations, assessments, and clinic visits</p>
        </div>
      </div>

      {/* ── FAQ Section ── */}
      <section className="section">
        <div className="container-custom" style={{ maxWidth: "860px" }}>
          <SectionHeading
            title="Common Questions Answered"
            subtitle="Everything you need to know before visiting D2F Physiotherapy Clinic."
          />

          {loading ? (
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Loading FAQs...</p>
            </div>
          ) : (
            <ScrollReveal>
              <Accordion items={faqs} />
            </ScrollReveal>
          )}

          {/* ── Still Have Questions Card ── */}
          <div className="card-custom p-4 p-md-5 mt-5 text-center bg-light border-0">
            <h4 className="mb-2">Still Have Questions?</h4>
            <p className="text-muted small mb-4">
              Our team is happy to assist you with inquiries regarding appointments, directions, or clinical services.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/contact" className="btn-primary-custom">
                Contact Us Directly
              </Link>
              <Link to="/book-appointment" className="btn-outline-custom">
                Request Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
