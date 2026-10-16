import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Fallback sample stories adhering strictly to medical safety (zero forbidden recovery timelines)
const fallbackStories = [
  { id: 1, title: 'Overcoming Desk-Related Lumbar Discomfort', condition_category: 'Musculoskeletal Care', story_text: 'A professional presented with lower back stiffness attributed to static sitting postures. Evaluation identified hip flexor tightness and reduced gluteal activation. Through manual therapy and targeted core stability exercises, the individual observed gradual improvements in functional sitting tolerance and daily ease.' },
  { id: 2, title: 'Restoring Overhead Shoulder Mobility', condition_category: 'Sports Rehabilitation', story_text: 'A recreational athlete reported discomfort during overhead reaching movements. Functional screening revealed scapular dyskinesis. Dr. Tanmai introduced targeted rotator cuff conditioning and thoracic mobility drills, enabling the patient to regain confidence in overhead activities.' },
  { id: 3, title: 'Managing Knee Joint Comfort in Daily Walking', condition_category: 'Geriatric Care', story_text: 'An older adult experienced knee stiffness that made navigating stairs uncomfortable. Treatment prioritized closed-kinetic-chain strengthening of the quadriceps along with gentle joint mobilization. The patient steadily regained walking ease and stability on inclines.' },
  { id: 4, title: 'Post-Operative Ligament Stability Progression', condition_category: 'Post-Surgical Care', story_text: 'Following orthopedic knee surgery, a patient began supervised physical rehabilitation. Progressive balance exercises, hamstring activation, and functional squatting drills supported steady gains in weight-bearing confidence and joint control.' },
  { id: 5, title: 'Addressing Scapular & Cervical Tension', condition_category: 'Postural Correction', story_text: 'A student presented with rounded shoulders and recurrent neck tightness. Therapy emphasized deep cervical flexor strengthening, ergonomic screen height adjustments, and chest stretching. The patient acquired helpful postural awareness routines.' },
  { id: 6, title: 'Rebuilding Ankle Stability After Twists', condition_category: 'Sports Rehabilitation', story_text: 'A runner with recurrent ankle inversion issues underwent proprioceptive assessment. Guided wobble board drills, calf eccentric loading, and peroneal strengthening helped restore balance across uneven outdoor surfaces.' },
  { id: 7, title: 'Improving Lumbar Mobility in Active Adults', condition_category: 'Musculoskeletal Care', story_text: 'An active individual seeking relief from spinal stiffness received a personalized routine involving gentle spinal mobilization and hip mobility drills. Consistent practice fostered enhanced movement freedom during morning activities.' },
  { id: 8, title: 'Functional Gait & Balance Re-Education', condition_category: 'Neurological Care', story_text: 'A patient managing mild balance hesitancy participated in neuromuscular coordination exercises and step-training protocols. The guided approach supported greater stability during outdoor walks.' },
];

/**
 * GET /api/stories
 * Returns anonymized representative treatment case studies.
 * Queries MySQL `stories` table using parameterized query.
 */
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, title, story_text, condition_category FROM stories ORDER BY id ASC');
    if (rows && rows.length > 0) {
      return res.json(rows);
    }
    return res.json(fallbackStories);
  } catch (error) {
    console.warn('Fallback to mock stories (MySQL unavailable):', error.message);
    return res.json(fallbackStories);
  }
});

export default router;
