import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Fallback services in case MySQL table is empty or server is offline
const fallbackServices = [
  { id: 1, name: 'Musculoskeletal Physiotherapy', description: 'Assessment and management of joint, muscle, and spinal biomechanics including back stiffness, neck tightness, and degenerative joint health.', icon: '💪' },
  { id: 2, name: 'Sports Injury Rehabilitation', description: 'Functional movement re-education and progressive strength conditioning for athletes and active individuals returning to recreational sport.', icon: '🏃' },
  { id: 3, name: 'Post-Surgical Rehabilitation', description: 'Supervised physical therapy protocols following orthopedic surgeries such as joint replacements and ligament reconstructions.', icon: '🏥' },
  { id: 4, name: 'Neurological Physiotherapy', description: 'Therapeutic balance, coordination, and neuromuscular training for individuals managing movement and nerve conditions.', icon: '🧠' },
  { id: 5, name: 'Posture Correction', description: 'Evaluation of spinal curvature, desk ergonomics, and muscular imbalances to enhance upright functional posture.', icon: '🧍' },
  { id: 6, name: 'Manual Therapy', description: 'Hands-on clinical joint mobilization, passive stretching, and soft tissue techniques to improve natural range of motion.', icon: '🤲' },
  { id: 7, name: 'Electrotherapy & Modalities', description: 'Application of therapeutic modalities including ultrasound and transcutaneous electrical stimulation to assist tissue comfort.', icon: '⚡' },
  { id: 8, name: 'Home Exercise Guidance', description: 'Customized movement and strengthening routines created so patients can independently support their functional health at home.', icon: '🏠' },
];

/**
 * GET /api/services
 * Returns all clinic physiotherapy services.
 * Queries MySQL `services` table using parameterized query.
 */
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, name, description, icon FROM services ORDER BY id ASC');
    if (rows && rows.length > 0) {
      return res.json(rows);
    }
    return res.json(fallbackServices);
  } catch (error) {
    console.warn('Fallback to mock services (MySQL unavailable):', error.message);
    return res.json(fallbackServices);
  }
});

export default router;
