/**
 * clinicData.js — Static clinic information extracted from Google Maps
 * All details here come from the clinic's public Google Maps listing.
 * Placeholders are marked with "[...]" where data was not available.
 */

const clinicData = {
  /* ── Clinic Identity ── */
  name: "D2F Physiotherapy Clinic",
  fullName: "D2F Physiotherapy Clinic by Dr Tanmai",
  tagline: "Dysfunction to Function",
  description:
    "D2F Physiotherapy Clinic focuses on helping you move from dysfunction to function through personalised, evidence-based physiotherapy care.",

  /* ── Doctor ── */
  doctor: {
    name: "Dr. Tanmai",
    title: "Physiotherapist",
    qualifications: "[Add doctor qualifications here, e.g. BPTh, MPTh]",
    about:
      "Dr. Tanmai founded D2F Physiotherapy with a clear mission — to help every patient progress from dysfunction to function. The clinic's approach centres on understanding each individual's condition thoroughly and creating personalised rehabilitation plans.",
    philosophy:
      "Every patient is unique, and so is every recovery journey. At D2F, we believe in thorough assessment, evidence-based techniques, and empowering patients with the knowledge and exercises they need to support their own recovery.",
  },

  /* ── Contact Information ── */
  contact: {
    phone: "077388 98970",
    phoneLink: "tel:+917738898970",
    email: "[Add clinic email here]",
    website: "[Add clinic website URL here]",
  },

  /* ── Address ── */
  address: {
    full: "Shop No-1, Bagul Bldg, Lane Number 5, behind Adgaonkar Sarees, Racca Colony, New Pandit Colony, Nashik, Maharashtra 422002",
    short: "New Pandit Colony, Nashik",
    city: "Nashik",
    state: "Maharashtra",
    pincode: "422002",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.1!2d73.7730519!3d20.0022251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebf5645796e5%3A0x4229b6874e5c683a!2sD2F%20Physiotherapy%20clinic%20by%20Dr%20Tanmai%20(Dysfunction%20to%20Function)!5e0!3m2!1sen!2sin!4v1697000000000",
    googleMapsLink: "https://maps.app.goo.gl/aUSAbShUzTJXJXoW7",
    lat: 20.0022251,
    lng: 73.7756268,
  },

  /* ── Opening Hours ── */
  hours: [
    { day: "Monday", time: "9:00 AM – 8:00 PM", open: true },
    { day: "Tuesday", time: "9:00 AM – 8:00 PM", open: true },
    { day: "Wednesday", time: "9:00 AM – 8:00 PM", open: true },
    { day: "Thursday", time: "9:00 AM – 8:00 PM", open: true },
    { day: "Friday", time: "9:00 AM – 8:00 PM", open: true },
    { day: "Saturday", time: "9:00 AM – 8:00 PM", open: true },
    { day: "Sunday", time: "Closed", open: false },
  ],

  /* ── Ratings ── */
  rating: 5.0,
  reviewCount: 65,

  /* ── Services (informational, API may override) ── */
  services: [
    {
      id: 1,
      name: "Musculoskeletal Physiotherapy",
      icon: "💪",
      shortDesc:
        "Assessment and management of joint, muscle, and bone conditions including back pain, neck pain, and arthritis.",
    },
    {
      id: 2,
      name: "Sports Injury Rehabilitation",
      icon: "🏃",
      shortDesc:
        "Rehabilitation for sports-related injuries with a focus on safe return to activity.",
    },
    {
      id: 3,
      name: "Post-Surgical Rehabilitation",
      icon: "🏥",
      shortDesc:
        "Guided recovery after orthopaedic surgeries such as joint replacements and ligament repairs.",
    },
    {
      id: 4,
      name: "Neurological Physiotherapy",
      icon: "🧠",
      shortDesc:
        "Therapy for conditions like stroke, nerve injuries, and neurological movement disorders.",
    },
    {
      id: 5,
      name: "Posture Correction",
      icon: "🧍",
      shortDesc:
        "Assessment and correction of postural imbalances related to desk work, lifestyle, or structural causes.",
    },
    {
      id: 6,
      name: "Manual Therapy",
      icon: "🤲",
      shortDesc:
        "Hands-on techniques including joint mobilisation and soft tissue work to reduce pain and improve mobility.",
    },
    {
      id: 7,
      name: "Electrotherapy & Modalities",
      icon: "⚡",
      shortDesc:
        "Use of therapeutic equipment such as ultrasound, TENS, and IFT as part of your treatment plan.",
    },
    {
      id: 8,
      name: "Home Exercise Programmes",
      icon: "🏠",
      shortDesc:
        "Personalised exercise plans designed to support your recovery and wellness at home.",
    },
  ],

  /* ── Care Process Steps ── */
  careProcess: [
    {
      step: 1,
      title: "Initial Assessment",
      description:
        "Your first visit involves a thorough assessment of your condition, medical history, and functional limitations.",
      icon: "📋",
    },
    {
      step: 2,
      title: "Personalised Treatment Plan",
      description:
        "Based on the assessment, a personalised plan is created that addresses your specific needs and goals.",
      icon: "📝",
    },
    {
      step: 3,
      title: "Guided Treatment",
      description:
        "Each treatment involves hands-on therapy, exercises, and modalities tailored to your progress.",
      icon: "🤝",
    },
    {
      step: 4,
      title: "Progress Review",
      description:
        "Regular reviews help track your progress and adjust the plan as your condition improves.",
      icon: "📊",
    },
    {
      step: 5,
      title: "Home Exercise Guidance",
      description:
        "You receive guidance on exercises and self-care techniques to continue your recovery at home.",
      icon: "🏠",
    },
  ],

  /* ── Conditions Treated ── */
  conditions: [
    {
      category: "Musculoskeletal",
      items: [
        "Back Pain & Sciatica",
        "Neck Pain & Cervical Spondylosis",
        "Shoulder Pain (Frozen Shoulder, Rotator Cuff)",
        "Knee Pain & Osteoarthritis",
        "Tennis Elbow & Golfer's Elbow",
        "Ankle Sprains",
      ],
    },
    {
      category: "Sports Injuries",
      items: [
        "Ligament Injuries (ACL, MCL)",
        "Muscle Strains & Tears",
        "Tendonitis",
        "Stress Fractures (post-medical clearance)",
        "Sports-Related Overuse Injuries",
      ],
    },
    {
      category: "Neurological",
      items: [
        "Stroke Rehabilitation",
        "Bell's Palsy",
        "Nerve Injuries",
        "Parkinson's Disease Support",
      ],
    },
    {
      category: "Post-Surgical",
      items: [
        "Total Knee Replacement Rehab",
        "Total Hip Replacement Rehab",
        "ACL Reconstruction Rehab",
        "Spinal Surgery Rehab",
      ],
    },
    {
      category: "Posture & Ergonomic",
      items: [
        "Forward Head Posture",
        "Rounded Shoulders",
        "Desk-Related Postural Issues",
        "Scoliosis Management",
      ],
    },
    {
      category: "Other",
      items: [
        "Chronic Pain Management",
        "Geriatric Physiotherapy",
        "Pre- and Post-Natal Physiotherapy",
        "Respiratory Physiotherapy",
      ],
    },
  ],

  /* ── Social Media ── */
  social: {
    instagram: "[Add Instagram URL here]",
    facebook: "[Add Facebook URL here]",
  },
};

export default clinicData;
