import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

/**
 * db.js — MySQL Connection Pool Configuration
 * 
 * Uses mysql2/promise for async/await queries with prepared statements.
 * Prepared statements prevent SQL injection by separating SQL code from user inputs.
 */
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'd2f_physiotherapy',
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test MySQL connection on startup
export async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Connected to MySQL database:', process.env.DB_NAME || 'd2f_physiotherapy');
    connection.release();
    return true;
  } catch (error) {
    console.warn('⚠️  Could not connect to MySQL:', error.message);
    console.warn('👉 The Express API will use memory mock data fallback until MySQL is started.');
    return false;
  }
}

export default pool;
