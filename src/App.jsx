import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

// Page Components
import Home from "./pages/Home";
import AboutDoctor from "./pages/AboutDoctor";
import AboutClinic from "./pages/AboutClinic";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Conditions from "./pages/Conditions";
import CareProcess from "./pages/CareProcess";
import BookAppointment from "./pages/BookAppointment";
import TreatmentStories from "./pages/TreatmentStories";
import Reviews from "./pages/Reviews";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import AdminDemo from "./pages/AdminDemo";
import NotFound from "./pages/NotFound";

/**
 * App Component:
 * - Central router configuration for all 15 distinct routes
 * - Persistent shared Navbar and Footer across all pages
 * - Floating sticky "Book Appointment" CTA button
 */
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Global Navigation Bar */}
      <Navbar />

      {/* Main Content Router */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-doctor" element={<AboutDoctor />} />
          <Route path="/about-clinic" element={<AboutClinic />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/conditions-we-treat" element={<Conditions />} />
          <Route path="/care-process" element={<CareProcess />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/stories" element={<TreatmentStories />} />
          <Route path="/treatment-stories" element={<TreatmentStories />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-demo" element={<AdminDemo />} />
          {/* 404 Catch-All Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Sticky Floating CTA */}
      <FloatingCTA />

      {/* Site-wide Footer */}
      <Footer />
    </div>
  );
}

export default App;
