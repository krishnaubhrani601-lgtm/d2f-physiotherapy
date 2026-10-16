-- =================================================================
-- D2F Physiotherapy Clinic — Seed Data (Clearly FAKE Demo Data)
-- STRICT COMPLIANCE:
-- Zero mentions of recovery timelines or session counts.
-- No guaranteed-outcome claims.
-- Dummy phone numbers (90000 00000 series) and example.com emails.
-- =================================================================

USE d2f_physiotherapy;

-- 1. Seed Services (8 rows)
INSERT INTO services (id, name, description, icon) VALUES
(1, 'Musculoskeletal Physiotherapy', 'Assessment and management of joint, muscle, and spinal biomechanics including back stiffness, neck tightness, and degenerative joint health.', '💪'),
(2, 'Sports Injury Rehabilitation', 'Functional movement re-education and progressive strength conditioning for athletes and active individuals returning to recreational sport.', '🏃'),
(3, 'Post-Surgical Rehabilitation', 'Supervised physical therapy protocols following orthopedic surgeries such as joint replacements and ligament reconstructions.', '🏥'),
(4, 'Neurological Physiotherapy', 'Therapeutic balance, coordination, and neuromuscular training for individuals managing movement and nerve conditions.', '🧠'),
(5, 'Posture Correction', 'Evaluation of spinal curvature, desk ergonomics, and muscular imbalances to enhance upright functional posture.', '🧍'),
(6, 'Manual Therapy', 'Hands-on clinical joint mobilization, passive stretching, and soft tissue techniques to improve natural range of motion.', '🤲'),
(7, 'Electrotherapy & Modalities', 'Application of therapeutic modalities including ultrasound and transcutaneous electrical stimulation to assist tissue comfort.', '⚡'),
(8, 'Home Exercise Guidance', 'Customized movement and strengthening routines created so patients can independently support their functional health at home.', '🏠');

-- 2. Seed Appointments (8 rows of clearly fake demo data)
INSERT INTO appointments (patient_name, phone, email, service_id, preferred_date, concern, status) VALUES
('Rohan Verma', '90000 00001', 'rohan.demo@example.com', 1, '2026-10-20', 'Lower back tightness experienced during prolonged desk work.', 'confirmed'),
('Priya Sharma', '90000 00002', 'priya.demo@example.com', 2, '2026-10-21', 'Shoulder discomfort when serving in recreational badminton.', 'pending'),
('Arjun Nair', '90000 00003', 'arjun.demo@example.com', 5, '2026-10-22', 'Forward head posture and upper neck tension from office work.', 'confirmed'),
('Meera Iyer', '90000 00004', 'meera.demo@example.com', 3, '2026-10-23', 'Post-operative knee rehabilitation following surgical clearance.', 'pending'),
('Karan Mehta', '90000 00005', 'karan.demo@example.com', 6, '2026-10-24', 'Restricted ankle mobility and stiffness following an awkward twist.', 'completed'),
('Ananya Gupta', '90000 00006', 'ananya.demo@example.com', 1, '2026-10-25', 'Hip joint stiffness and difficulty with deep squatting movements.', 'pending'),
('Siddharth Rao', '90000 00007', 'siddharth.demo@example.com', 7, '2026-10-26', 'Elbow tendon sensitivity and reduced grip comfort during tennis.', 'confirmed'),
('Neha Joshi', '90000 00008', 'neha.demo@example.com', 4, '2026-10-27', 'Balance training and gait stability support following physician referral.', 'pending');

-- 3. Seed Treatment Stories (8 rows — anonymized sample case summaries with NO recovery timelines)
INSERT INTO stories (title, story_text, condition_category) VALUES
('Overcoming Desk-Related Lumbar Discomfort', 'A professional presented with lower back stiffness attributed to static sitting postures. Evaluation identified hip flexor tightness and reduced gluteal activation. Through manual therapy and targeted core stability exercises, the individual observed gradual improvements in functional sitting tolerance and daily ease.', 'Musculoskeletal Care'),
('Restoring Overhead Shoulder Mobility', 'A recreational athlete reported discomfort during overhead reaching movements. Functional screening revealed scapular dyskinesis. Dr. Tanmai introduced targeted rotator cuff conditioning and thoracic mobility drills, enabling the patient to regain confidence in overhead activities.', 'Sports Rehabilitation'),
('Managing Knee Joint Comfort in Daily Walking', 'An older adult experienced knee stiffness that made navigating stairs uncomfortable. Treatment prioritized closed-kinetic-chain strengthening of the quadriceps along with gentle joint mobilization. The patient steadily regained walking ease and stability on inclines.', 'Geriatric Care'),
('Post-Operative Ligament Stability Progression', 'Following orthopedic knee surgery, a patient began supervised physical rehabilitation. Progressive balance exercises, hamstring activation, and functional squatting drills supported steady gains in weight-bearing confidence and joint control.', 'Post-Surgical Care'),
('Addressing Scapular & Cervical Tension', 'A student presented with rounded shoulders and recurrent neck tightness. Therapy emphasized deep cervical flexor strengthening, ergonomic screen height adjustments, and chest stretching. The patient acquired helpful postural awareness routines.', 'Postural Correction'),
('Rebuilding Ankle Stability After Twists', 'A runner with recurrent ankle inversion issues underwent proprioceptive assessment. Guided wobble board drills, calf eccentric loading, and peroneal strengthening helped restore balance across uneven outdoor surfaces.', 'Sports Rehabilitation'),
('Improving Lumbar Mobility in Active Adults', 'An active individual seeking relief from spinal stiffness received a personalized routine involving gentle spinal mobilization and hip mobility drills. Consistent practice fostered enhanced movement freedom during morning activities.', 'Musculoskeletal Care'),
('Functional Gait & Balance Re-Education', 'A patient managing mild balance hesitancy participated in neuromuscular coordination exercises and step-training protocols. The guided approach supported greater stability during outdoor walks.', 'Neurological Care');

-- 4. Seed Reviews (8 rows — sample feedback with NO timelines or session counts)
INSERT INTO reviews (reviewer_name, rating, review_text) VALUES
('Rahul Deshmukh', 5, 'Dr. Tanmai took the time to understand my back issue in detail. The exercises and posture advice were very helpful. Highly recommended clinic in Nashik.'),
('Pooja Patil', 5, 'Clean clinic, polite attitude, and very attentive care. The personalized exercises helped me regain comfortable movement.'),
('Amit Kulkarni', 5, 'Professional physiotherapy center. Thorough assessment done before starting any treatment. Feeling much better with steady progress.'),
('Snehal Shinde', 5, 'Dr. Tanmai is exceptionally patient and explains each exercise clearly so you can practice properly at home. Very good experience.'),
('Kiran More', 5, 'Visited for persistent neck and shoulder stiffness. The hands-on therapy and ergonomic suggestions made a big difference in my daily comfort.'),
('Vikram Joshi', 5, 'Great atmosphere and dedicated personal attention. Dr. Tanmai monitors your exercise technique carefully. Five stars for quality care in Nashik.'),
('Sunita Gaikwad', 5, 'Appreciated the detailed posture assessment. The clinic is spotless and Dr. Tanmai explains the underlying anatomy clearly.'),
('Nitin Bhalerao', 5, 'Very knowledgeable physiotherapist. Thorough examination and practical home guidance that fits easily into a busy schedule.');

-- 5. Seed FAQs (8 rows — educational and free from recovery timelines)
INSERT INTO faqs (question, answer) VALUES
('What should I expect during my first visit to D2F Physiotherapy?', 'Your initial visit begins with a comprehensive physical assessment. Dr. Tanmai will review your symptoms, medical history, and movement mechanics, test your joint range of motion, and discuss your goals before creating a personalized care plan.'),
('Do I need a doctor referral to visit the clinic?', 'No formal doctor referral is strictly required to schedule an initial physiotherapy assessment. If you have imaging reports, surgical notes, or prescriptions, bringing them assists in completing your clinical profile.'),
('What clothing should I wear for my assessment?', 'Please wear comfortable, loose-fitting clothing that allows freedom of movement. Loose athletic shirts or shorts are ideal so the target joints and muscles can be clearly examined.'),
('How is my physiotherapy treatment plan decided?', 'Every treatment plan is customized after an in-person physical assessment. Dr. Tanmai tailors your plan according to your specific functional goals, the underlying mechanical cause, your lifestyle demands, and ongoing clinical progress.'),
('Will I receive exercises to perform at home?', 'Yes, home exercise guidance is an essential pillar of our care process. You will be taught specific, safe movements and postural habits to support your progress between clinic visits.'),
('What are the clinic opening hours and location in Nashik?', 'D2F Physiotherapy Clinic is open Monday through Saturday from 9:00 AM to 8:00 PM (closed on Sundays). We are located at Shop No-1, Bagul Bldg, Lane Number 5, behind Adgaonkar Sarees, Racca Colony, New Pandit Colony, Nashik.'),
('Why don not you guarantee a specific recovery timeline?', 'Every human body heals at its own biological rate. Factors such as overall health, tissue biology, sleep, nutrition, and consistent adherence to exercises all influence progress. We focus on providing personalized, evidence-based care rather than making generic timeline claims.'),
('Can physiotherapy help with workplace posture strain?', 'Yes, physiotherapy offers targeted assessment for desk-related postural strain, providing corrective exercises for upper back muscles and ergonomic advice to support comfort during computer work.');

-- 6. Seed Contact Messages (8 rows of clearly fake demo data)
INSERT INTO contact_messages (name, email, message) VALUES
('Anand Kadam', 'anand.demo@example.com', 'Inquiring if prior appointment booking is needed for evening consultation slots.'),
('Bhavna Chawla', 'bhavna.demo@example.com', 'Do you provide assessment for repetitive strain discomfort from typing?'),
('Chetan Dixit', 'chetan.demo@example.com', 'Wanted to confirm if parking is available near Bagul Building in Racca Colony.'),
('Deepali Mane', 'deepali.demo@example.com', 'Can I bring my recent cervical spine X-ray reports for Dr. Tanmai to review?'),
('Eshwar Sawant', 'eshwar.demo@example.com', 'Asking about consultation timings on Saturday afternoons.'),
('Farhan Qureshi', 'farhan.demo@example.com', 'Interested in posture correction guidance for school-going teenager.'),
('Geeta Tambe', 'geeta.demo@example.com', 'Seeking guidance regarding exercise modifications for mild knee stiffness during walking.'),
('Harish Wagh', 'harish.demo@example.com', 'Please let me know if an appointment is available next Tuesday evening.');
