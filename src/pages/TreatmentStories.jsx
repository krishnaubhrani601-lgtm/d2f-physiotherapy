import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import StoryCard from "../components/StoryCard";
import ScrollReveal from "../components/ScrollReveal";
import API_BASE from "../data/apiConfig";

/**
 * TreatmentStories Page:
 * Displays patient journey stories as cards.
 * Fetches from /api/stories with clear fallback.
 * Strictly adheres to medical safety rules: no healing timelines,
 * no promises, no real personal identities, clearly labelled sample content.
 */
function TreatmentStories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback sample stories without forbidden timeline words (no week, day, month, session, days)
  const sampleStories = [
    {
      id: 1,
      title: "Overcoming Desk-Related Lumbar Discomfort",
      condition_category: "Musculoskeletal Care",
      story_text:
        "A software professional presented with persistent lower back stiffness resulting from long hours of sitting. Following a biomechanical assessment, Dr. Tanmai designed a program focusing on thoracic mobility, core stability, and ergonomic workstation changes. With consistent practice of prescribed exercises, the patient experienced meaningful improvements in daily sitting comfort and movement ease.",
    },
    {
      id: 2,
      title: "Regaining Shoulder Mobility After Sports Strain",
      condition_category: "Sports Rehabilitation",
      story_text:
        "A recreational badminton player experienced overhead shoulder discomfort and reduced reaching capacity. Dr. Tanmai conducted targeted rotator cuff testing and movement screening. A structured therapy protocol combining gentle joint mobilization and progressive resistance training enabled the patient to steadily rebuild shoulder stability and return to active sport.",
    },
    {
      id: 3,
      title: "Improving Knee Function in Degenerative Joint Health",
      condition_category: "Geriatric Rehabilitation",
      story_text:
        "An active senior sought assistance for knee stiffness that made navigating stairs challenging. Therapy centered on safe quadriceps strengthening, hamstring flexibility, and balance training. Through guided physical therapy and home exercise routines, the patient regained confidence while walking and climbing stairs.",
    },
    {
      id: 4,
      title: "Post-Operative Ligament Care & Stability",
      condition_category: "Post-Surgical Care",
      story_text:
        "Following knee surgery, a patient required supervised rehabilitation to restore range of motion and joint stability. Under Dr. Tanmai's guidance, progressive weight-bearing exercises and neuromuscular drills were introduced carefully. The patient steadily developed enhanced joint control and returned to everyday functional routines.",
    },
    {
      id: 5,
      title: "Addressing Chronic Neck & Upper Back Tension",
      condition_category: "Postural Correction",
      story_text:
        "A student presented with forward head posture and recurring neck fatigue. Therapy focused on deep neck flexor activation, scapular retraction exercises, and postural awareness training. The patient learned effective self-management habits to maintain upright alignment during study hours.",
    },
    {
      id: 6,
      title: "Rebuilding Ankle Stability After Recurrent Sprains",
      condition_category: "Sports Rehabilitation",
      story_text:
        "A runner troubled by frequent ankle rolling underwent comprehensive proprioceptive and balance assessment. A multi-stage program focusing on peroneal strengthening, single-leg balance boards, and calf mobility helped restore stability across uneven outdoor terrains.",
    },
  ];

  useEffect(() => {
    let isMounted = true;
    fetch(`${API_BASE}/stories`)
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setStories(data);
        } else {
          setStories(sampleStories);
        }
      })
      .catch(() => {
        if (isMounted) setStories(sampleStories);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="treatment-stories-page">
      {/* ── Page Header ── */}
      <div className="page-header">
        <div className="container-custom">
          <div className="breadcrumb-custom">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Treatment Stories</span>
          </div>
          <h1>Treatment Stories</h1>
          <p>Illustrative patient journeys from dysfunction to function</p>
        </div>
      </div>

      {/* ── Content Section ── */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Illustrative Rehabilitation Journeys"
            subtitle="The following stories are anonymized, representative clinical case studies demonstrating our rehabilitation approach."
          />

          <div className="alert alert-light border text-center p-3 mb-5" role="alert">
            <small className="text-muted">
              📌 <strong>Educational Note:</strong> Every recovery journey is unique. Recovery depends entirely on individual biomechanics, underlying health, and adherence to prescribed movement protocols. These case summaries illustrate clinical methodology without promising identical outcomes.
            </small>
          </div>

          {loading ? (
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Loading clinical stories...</p>
            </div>
          ) : (
            <div className="row g-4">
              {stories.map((story, idx) => (
                <div key={story.id || idx} className="col-md-6 col-lg-4">
                  <ScrollReveal delay={idx * 100}>
                    <StoryCard story={story} />
                  </ScrollReveal>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-5">
            <Link to="/book-appointment" className="btn-primary-custom">
              Discuss Your Case With Dr. Tanmai
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TreatmentStories;
