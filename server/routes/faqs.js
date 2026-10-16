import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Fallback FAQs adhering strictly to medical safety
const fallbackFaqs = [
  { id: 1, question: 'What should I expect during my first visit to D2F Physiotherapy?', answer: 'Your initial visit begins with a comprehensive physical assessment. Dr. Tanmai will review your symptoms, medical history, and movement mechanics, test your joint range of motion, and discuss your goals before creating a personalized care plan.' },
  { id: 2, question: 'Do I need a doctor referral to visit the clinic?', answer: 'No formal doctor referral is strictly required to schedule an initial physiotherapy assessment. If you have imaging reports, surgical notes, or prescriptions, bringing them assists in completing your clinical profile.' },
  { id: 3, question: 'What clothing should I wear for my assessment?', answer: 'Please wear comfortable, loose-fitting clothing that allows freedom of movement. Loose athletic shirts or shorts are ideal so the target joints and muscles can be clearly examined.' },
  { id: 4, question: 'How is my physiotherapy treatment plan decided?', answer: 'Every treatment plan is customized after an in-person physical assessment. Dr. Tanmai tailors your plan according to your specific functional goals, the underlying mechanical cause, your lifestyle demands, and ongoing clinical progress.' },
  { id: 5, question: 'Will I receive exercises to perform at home?', answer: 'Yes, home exercise guidance is an essential pillar of our care process. You will be taught specific, safe movements and postural habits to support your progress between clinic visits.' },
  { id: 6, question: 'What are the clinic opening hours and location in Nashik?', answer: 'D2F Physiotherapy Clinic is open Monday through Saturday from 9:00 AM to 8:00 PM (closed on Sundays). We are located at Shop No-1, Bagul Bldg, Lane Number 5, behind Adgaonkar Sarees, Racca Colony, New Pandit Colony, Nashik.' },
  { id: 7, question: 'Why don not you guarantee a specific recovery timeline?', answer: 'Every human body heals at its own biological rate. Factors such as overall health, tissue biology, sleep, nutrition, and consistent adherence to exercises all influence progress. We focus on providing personalized, evidence-based care rather than making generic timeline claims.' },
  { id: 8, question: 'Can physiotherapy help with workplace posture strain?', answer: 'Yes, physiotherapy offers targeted assessment for desk-related postural strain, providing corrective exercises for upper back muscles and ergonomic advice to support comfort during computer work.' },
];

/**
 * GET /api/faqs
 * Returns frequently asked questions about consultations and physiotherapy.
 * Queries MySQL `faqs` table using parameterized query.
 */
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, question, answer FROM faqs ORDER BY id ASC');
    if (rows && rows.length > 0) {
      return res.json(rows);
    }
    return res.json(fallbackFaqs);
  } catch (error) {
    console.warn('Fallback to mock FAQs (MySQL unavailable):', error.message);
    return res.json(fallbackFaqs);
  }
});

export default router;
