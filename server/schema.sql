-- =================================================================
-- D2F Physiotherapy Clinic — Database Schema
-- College Project Demo Database
-- =================================================================

CREATE DATABASE IF NOT EXISTS d2f_physiotherapy;
USE d2f_physiotherapy;

-- 1. Services Table
DROP TABLE IF EXISTS appointments;
DROP TABLE IF EXISTS services;
CREATE TABLE services (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  icon VARCHAR(50) DEFAULT '🩺'
);

-- 2. Appointments Table
CREATE TABLE appointments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  patient_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  service_id INT,
  preferred_date DATE NOT NULL,
  concern TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE SET NULL
);

-- 3. Treatment Stories Table
DROP TABLE IF EXISTS stories;
CREATE TABLE stories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  story_text TEXT NOT NULL,
  condition_category VARCHAR(100) NOT NULL
);

-- 4. Reviews Table
DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  reviewer_name VARCHAR(255) NOT NULL,
  rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  review_text TEXT NOT NULL
);

-- 5. FAQs Table
DROP TABLE IF EXISTS faqs;
CREATE TABLE faqs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question VARCHAR(255) NOT NULL,
  answer TEXT NOT NULL
);

-- 6. Contact Messages Table
DROP TABLE IF EXISTS contact_messages;
CREATE TABLE contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
