import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { testConnection } from './db.js';

// Route imports
import servicesRouter from './routes/services.js';
import appointmentsRouter from './routes/appointments.js';
import storiesRouter from './routes/stories.js';
import reviewsRouter from './routes/reviews.js';
import faqsRouter from './routes/faqs.js';
import contactRouter from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS so Vite frontend (e.g. port 5173) can access the API
app.use(cors());

// Middleware to parse incoming JSON payloads
app.use(express.json());

// Mount API routes
app.use('/api/services', servicesRouter);
app.use('/api/appointments', appointmentsRouter);
app.use('/api/stories', storiesRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/faqs', faqsRouter);
app.use('/api/contact', contactRouter);

// Root & Health check endpoints
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    clinic: 'D2F Physiotherapy Clinic',
    doctor: 'Dr. Tanmai',
    timestamp: new Date().toISOString(),
  });
});

app.get('/', (req, res) => {
  res.send('D2F Physiotherapy Clinic — Demo API Server is running.');
});

// Start listening and verify DB connection
app.listen(PORT, async () => {
  console.log(`====================================================`);
  console.log(`🚀 D2F Physiotherapy Demo Server listening on port ${PORT}`);
  console.log(`🌐 Base URL: http://localhost:${PORT}/api`);
  console.log(`====================================================`);
  await testConnection();
});
