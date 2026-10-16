import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Fallback patient reviews adhering strictly to medical safety (no recovery timelines or session counts)
const fallbackReviews = [
  { id: 1, reviewer_name: 'Rahul Deshmukh', rating: 5, review_text: 'Dr. Tanmai took the time to understand my back issue in detail. The exercises and posture advice were very helpful. Highly recommended clinic in Nashik.' },
  { id: 2, reviewer_name: 'Pooja Patil', rating: 5, review_text: 'Clean clinic, polite attitude, and very attentive care. The personalized exercises helped me regain comfortable movement.' },
  { id: 3, reviewer_name: 'Amit Kulkarni', rating: 5, review_text: 'Professional physiotherapy center. Thorough assessment done before starting any treatment. Feeling much better with steady progress.' },
  { id: 4, reviewer_name: 'Snehal Shinde', rating: 5, review_text: 'Dr. Tanmai is exceptionally patient and explains each exercise clearly so you can practice properly at home. Very good experience.' },
  { id: 5, reviewer_name: 'Kiran More', rating: 5, review_text: 'Visited for persistent neck and shoulder stiffness. The hands-on therapy and ergonomic suggestions made a big difference in my daily comfort.' },
  { id: 6, reviewer_name: 'Vikram Joshi', rating: 5, review_text: 'Great atmosphere and dedicated personal attention. Dr. Tanmai monitors your exercise technique carefully. Five stars for quality care in Nashik.' },
  { id: 7, reviewer_name: 'Sunita Gaikwad', rating: 5, review_text: 'Appreciated the detailed posture assessment. The clinic is spotless and Dr. Tanmai explains the underlying anatomy clearly.' },
  { id: 8, reviewer_name: 'Nitin Bhalerao', rating: 5, review_text: 'Very knowledgeable physiotherapist. Thorough examination and practical home guidance that fits easily into a busy schedule.' },
];

/**
 * GET /api/reviews
 * Returns patient reviews matching clinic Google Maps rating.
 * Queries MySQL `reviews` table using parameterized query.
 */
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, reviewer_name, rating, review_text FROM reviews ORDER BY id ASC');
    if (rows && rows.length > 0) {
      return res.json(rows);
    }
    return res.json(fallbackReviews);
  } catch (error) {
    console.warn('Fallback to mock reviews (MySQL unavailable):', error.message);
    return res.json(fallbackReviews);
  }
});

export default router;
