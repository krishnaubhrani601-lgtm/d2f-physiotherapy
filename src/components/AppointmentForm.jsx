import { useState } from "react";
import API_BASE from "../data/apiConfig";
import clinicData from "../data/clinicData";
import "./AppointmentForm.css";

/**
 * AppointmentForm — Validated form that POSTs to the backend API.
 * Fields: name, phone, email, service, preferred date, concern.
 * Full client-side validation before submission.
 * Shows a success message or friendly error on failure.
 */
function AppointmentForm() {
  const [formData, setFormData] = useState({
    patient_name: "",
    phone: "",
    email: "",
    service_id: "",
    preferred_date: "",
    concern: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null); // "success" | "error"

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validate all fields — returns true if valid
  const validate = () => {
    const newErrors = {};

    if (!formData.patient_name.trim()) {
      newErrors.patient_name = "Name is required.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.service_id) {
      newErrors.service_id = "Please select a service.";
    }

    if (!formData.preferred_date) {
      newErrors.preferred_date = "Please select a preferred date.";
    }

    if (!formData.concern.trim()) {
      newErrors.concern = "Please describe your concern briefly.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit form to API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitResult(null);

    if (!validate()) return;

    setSubmitting(true);

    try {
      const res = await fetch(`${API_BASE}/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitResult("success");
        setFormData({
          patient_name: "",
          phone: "",
          email: "",
          service_id: "",
          preferred_date: "",
          concern: "",
        });
      } else {
        setSubmitResult("error");
      }
    } catch {
      setSubmitResult("error");
    } finally {
      setSubmitting(false);
    }
  };

  // Get tomorrow's date as min for date picker
  const getTomorrow = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit} noValidate>
      {/* Success Message */}
      {submitResult === "success" && (
        <div className="success-message">
          ✅ Your appointment request has been submitted. We will contact you shortly to confirm.
        </div>
      )}

      {/* Error Message */}
      {submitResult === "error" && (
        <div className="error-message-box">
          ⚠️ Could not submit your request. The server may be offline. Please try again or call us at{" "}
          <a href={clinicData.contact.phoneLink}>{clinicData.contact.phone}</a>.
        </div>
      )}

      <div className="form-grid">
        {/* Name */}
        <div className="form-group">
          <label htmlFor="patient_name" className="form-label-custom">
            Full Name *
          </label>
          <input
            type="text"
            id="patient_name"
            name="patient_name"
            className={`form-control-custom ${errors.patient_name ? "is-invalid" : ""}`}
            value={formData.patient_name}
            onChange={handleChange}
            placeholder="Your full name"
          />
          {errors.patient_name && (
            <span className="form-error">{errors.patient_name}</span>
          )}
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone" className="form-label-custom">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={`form-control-custom ${errors.phone ? "is-invalid" : ""}`}
            value={formData.phone}
            onChange={handleChange}
            placeholder="10-digit number"
          />
          {errors.phone && (
            <span className="form-error">{errors.phone}</span>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email" className="form-label-custom">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control-custom ${errors.email ? "is-invalid" : ""}`}
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />
          {errors.email && (
            <span className="form-error">{errors.email}</span>
          )}
        </div>

        {/* Service */}
        <div className="form-group">
          <label htmlFor="service_id" className="form-label-custom">
            Service *
          </label>
          <select
            id="service_id"
            name="service_id"
            className={`form-control-custom ${errors.service_id ? "is-invalid" : ""}`}
            value={formData.service_id}
            onChange={handleChange}
          >
            <option value="">Select a service</option>
            {clinicData.services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
          {errors.service_id && (
            <span className="form-error">{errors.service_id}</span>
          )}
        </div>

        {/* Date */}
        <div className="form-group">
          <label htmlFor="preferred_date" className="form-label-custom">
            Preferred Date *
          </label>
          <input
            type="date"
            id="preferred_date"
            name="preferred_date"
            className={`form-control-custom ${errors.preferred_date ? "is-invalid" : ""}`}
            value={formData.preferred_date}
            onChange={handleChange}
            min={getTomorrow()}
          />
          {errors.preferred_date && (
            <span className="form-error">{errors.preferred_date}</span>
          )}
        </div>
      </div>

      {/* Concern (full width) */}
      <div className="form-group" style={{ marginTop: "var(--space-md)" }}>
        <label htmlFor="concern" className="form-label-custom">
          Describe Your Concern *
        </label>
        <textarea
          id="concern"
          name="concern"
          rows="4"
          className={`form-control-custom ${errors.concern ? "is-invalid" : ""}`}
          value={formData.concern}
          onChange={handleChange}
          placeholder="Briefly describe your pain, injury, or condition..."
        ></textarea>
        {errors.concern && (
          <span className="form-error">{errors.concern}</span>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn-primary-custom appointment-form__submit"
        disabled={submitting}
      >
        {submitting ? "Submitting..." : "Request Appointment"}
      </button>

      <p className="appointment-form__note">
        * We will call you to confirm the appointment. Your preferred date is a
        request, not a guaranteed booking.
      </p>
    </form>
  );
}

export default AppointmentForm;
