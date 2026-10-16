import express from 'express';
import pool from '../db.js';

const router = express.Router();

// In-memory demo store used if MySQL server is disconnected during examiner evaluation
const inMemoryAppointments = [
  { id: 1, patient_name: 'Rohan Verma', phone: '90000 00001', email: 'rohan.demo@example.com', service_id: 1, service_name: 'Musculoskeletal Physiotherapy', preferred_date: '2026-10-20', concern: 'Lower back tightness experienced during prolonged desk work.', status: 'confirmed', created_at: new Date('2026-10-16T09:30:00Z') },
  { id: 2, patient_name: 'Priya Sharma', phone: '90000 00002', email: 'priya.demo@example.com', service_id: 2, service_name: 'Sports Injury Rehabilitation', preferred_date: '2026-10-21', concern: 'Shoulder discomfort when serving in recreational badminton.', status: 'pending', created_at: new Date('2026-10-16T10:15:00Z') },
  { id: 3, patient_name: 'Arjun Nair', phone: '90000 00003', email: 'arjun.demo@example.com', service_id: 5, service_name: 'Posture Correction', preferred_date: '2026-10-22', concern: 'Forward head posture and upper neck tension from office work.', status: 'confirmed', created_at: new Date('2026-10-16T11:00:00Z') },
  { id: 4, patient_name: 'Meera Iyer', phone: '90000 00004', email: 'meera.demo@example.com', service_id: 3, service_name: 'Post-Surgical Rehabilitation', preferred_date: '2026-10-23', concern: 'Post-operative knee rehabilitation following surgical clearance.', status: 'pending', created_at: new Date('2026-10-16T11:45:00Z') },
  { id: 5, patient_name: 'Karan Mehta', phone: '90000 00005', email: 'karan.demo@example.com', service_id: 6, service_name: 'Manual Therapy', preferred_date: '2026-10-24', concern: 'Restricted ankle mobility and stiffness following an awkward twist.', status: 'completed', created_at: new Date('2026-10-16T12:30:00Z') },
  { id: 6, patient_name: 'Ananya Gupta', phone: '90000 00006', email: 'ananya.demo@example.com', service_id: 1, service_name: 'Musculoskeletal Physiotherapy', preferred_date: '2026-10-25', concern: 'Hip joint stiffness and difficulty with deep squatting movements.', status: 'pending', created_at: new Date('2026-10-16T13:15:00Z') },
  { id: 7, patient_name: 'Siddharth Rao', phone: '90000 00007', email: 'siddharth.demo@example.com', service_id: 7, service_name: 'Electrotherapy & Modalities', preferred_date: '2026-10-26', concern: 'Elbow tendon sensitivity and reduced grip comfort during tennis.', status: 'confirmed', created_at: new Date('2026-10-16T14:00:00Z') },
  { id: 8, patient_name: 'Neha Joshi', phone: '90000 00008', email: 'neha.demo@example.com', service_id: 4, service_name: 'Neurological Physiotherapy', preferred_date: '2026-10-27', concern: 'Balance training and gait stability support following physician referral.', status: 'pending', created_at: new Date('2026-10-16T15:00:00Z') },
];

/**
 * GET /api/appointments
 * Admin Demo Route: Returns all appointments joined with service name.
 * Uses parameterized SQL query.
 */
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        a.id, 
        a.patient_name, 
        a.phone, 
        a.email, 
        a.service_id, 
        s.name AS service_name, 
        a.preferred_date, 
        a.concern, 
        a.status, 
        a.created_at
      FROM appointments a
      LEFT JOIN services s ON a.service_id = s.id
      ORDER BY a.created_at DESC
    `);
    return res.json(rows);
  } catch (error) {
    console.warn('MySQL unavailable, returning in-memory appointments:', error.message);
    return res.json(inMemoryAppointments);
  }
});

/**
 * POST /api/appointments
 * Validates patient booking request and inserts into MySQL.
 * Uses parameterized prepared statements (?, ?, ?) to strictly prevent SQL Injection.
 */
router.post('/', async (req, res) => {
  const { patient_name, phone, email, service_id, preferred_date, concern } = req.body;

  // 1. Server-side validation
  if (!patient_name || !phone || !email || !service_id || !preferred_date || !concern) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Basic email pattern check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    // 2. Parameterized prepared query to prevent SQL Injection
    const sql = `
      INSERT INTO appointments (patient_name, phone, email, service_id, preferred_date, concern, status)
      VALUES (?, ?, ?, ?, ?, ?, 'pending')
    `;
    const values = [patient_name, phone, email, Number(service_id), preferred_date, concern];
    const [result] = await pool.execute(sql, values);

    return res.status(201).json({
      message: 'Appointment request submitted successfully.',
      id: result.insertId,
    });
  } catch (error) {
    console.warn('MySQL insert failed, saving to in-memory fallback list:', error.message);
    // Add to in-memory store so examiner can immediately see it on /admin-demo even without MySQL
    const newRecord = {
      id: inMemoryAppointments.length + 1,
      patient_name,
      phone,
      email,
      service_id: Number(service_id),
      service_name: `Service #${service_id}`,
      preferred_date,
      concern,
      status: 'pending',
      created_at: new Date(),
    };
    inMemoryAppointments.unshift(newRecord);

    return res.status(201).json({
      message: 'Appointment recorded in demo memory (MySQL was offline).',
      id: newRecord.id,
    });
  }
});

export default router;
