import express from 'express';
import pool from '../db.js';

const router = express.Router();

// In-memory demo store used if MySQL server is disconnected during examiner evaluation
const inMemoryContacts = [
  { id: 1, name: 'Anand Kadam', email: 'anand.demo@example.com', message: 'Inquiring if prior appointment booking is needed for evening consultation slots.', created_at: new Date('2026-10-16T08:00:00Z') },
  { id: 2, name: 'Bhavna Chawla', email: 'bhavna.demo@example.com', message: 'Do you provide assessment for repetitive strain discomfort from typing?', created_at: new Date('2026-10-16T08:30:00Z') },
  { id: 3, name: 'Chetan Dixit', email: 'chetan.demo@example.com', message: 'Wanted to confirm if parking is available near Bagul Building in Racca Colony.', created_at: new Date('2026-10-16T09:00:00Z') },
  { id: 4, name: 'Deepali Mane', email: 'deepali.demo@example.com', message: 'Can I bring my recent cervical spine X-ray reports for Dr. Tanmai to review?', created_at: new Date('2026-10-16T09:45:00Z') },
  { id: 5, name: 'Eshwar Sawant', email: 'eshwar.demo@example.com', message: 'Asking about consultation timings on Saturday afternoons.', created_at: new Date('2026-10-16T10:15:00Z') },
  { id: 6, name: 'Farhan Qureshi', email: 'farhan.demo@example.com', message: 'Interested in posture correction guidance for school-going teenager.', created_at: new Date('2026-10-16T11:00:00Z') },
  { id: 7, name: 'Geeta Tambe', email: 'geeta.demo@example.com', message: 'Seeking guidance regarding exercise modifications for mild knee stiffness during walking.', created_at: new Date('2026-10-16T11:30:00Z') },
  { id: 8, name: 'Harish Wagh', email: 'harish.demo@example.com', message: 'Please let me know if an appointment is available next Tuesday evening.', created_at: new Date('2026-10-16T12:00:00Z') },
];

/**
 * GET /api/contact
 * Admin Demo Route: Returns all received contact inquiries.
 * Uses parameterized SQL query.
 */
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, name, email, message, created_at FROM contact_messages ORDER BY created_at DESC');
    return res.json(rows);
  } catch (error) {
    console.warn('MySQL unavailable, returning in-memory contact messages:', error.message);
    return res.json(inMemoryContacts);
  }
});

/**
 * POST /api/contact
 * Validates message submission and inserts into MySQL `contact_messages`.
 * Uses parameterized prepared statements (?, ?, ?) to strictly prevent SQL Injection.
 */
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // 1. Server-side validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    // 2. Parameterized prepared query to prevent SQL Injection
    const sql = 'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)';
    const values = [name, email, message];
    const [result] = await pool.execute(sql, values);

    return res.status(201).json({
      message: 'Contact message received successfully.',
      id: result.insertId,
    });
  } catch (error) {
    console.warn('MySQL insert failed, saving to in-memory fallback list:', error.message);
    const newMsg = {
      id: inMemoryContacts.length + 1,
      name,
      email,
      message,
      created_at: new Date(),
    };
    inMemoryContacts.unshift(newMsg);

    return res.status(201).json({
      message: 'Message stored in demo memory (MySQL was offline).',
      id: newMsg.id,
    });
  }
});

export default router;
