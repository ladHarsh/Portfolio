import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/Project.js";

dotenv.config();

const projects = [
  {
    title: "DesignMate AI",
    slug: "designmate-ai",
    shortDescription:
      "AI-powered design review tool using Gemini Vision API to audit UI/UX for WCAG compliance and generate production-ready HTML/Tailwind code.",
    problemStatement:
      "Junior designers create visually appealing work that fails accessibility standards and responsive design requirements, requiring manual senior review.",
    solution:
      "Built a multi-modal AI system using Gemini 2.5 Flash Vision API to analyze design screenshots and generate structured feedback on usability, accessibility, and visual hierarchy. Implements prompt engineering with Zod schema validation to ensure deterministic JSON/CSS output.",
    architecture:
      "Multi-modal inference pipeline using Gemini 2.5 Flash. Implements chain-of-thought prompting with Zod schema validation for structured output. Frontend uses React with Socket.io for real-time feedback. Backend handles image uploads via Multer and manages user sessions with JWT authentication.",
    techStack: [
      "Gemini 2.5 Flash",
      "Zod",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Socket.io",
      "JWT",
      "Multer"
    ],
    engineStatus: {
      algorithm: "GEMINI 2.5 FLASH",
      metric: "45ms INFERENCE"
    },
    features: [
      {
        title: "Vision-Based UI/UX Audit",
        description:
          "Uses Gemini Vision API to analyze uploaded designs and generate senior-level critique based on usability, accessibility, and visual hierarchy.",
      },
      {
        title: "Production Code Generation",
        description:
          "Transforms text requirements into responsive HTML/Tailwind components with industry best practices.",
      },
      {
        title: "WCAG Compliance Checker",
        description:
          "Auto-generates color palettes and typography that pass WCAG AA/AAA contrast ratios.",
      },
      {
        title: "Design Trend Analysis",
        description:
          "Analyzes current design patterns to ensure output matches modern standards (Glassmorphism, Bento Grids).",
      },
    ],
    outcome:
      "Reduced design review time by providing instant WCAG compliance checks and production-ready code generation. Used by 20+ designers in testing phase. Eliminates accessibility refactors by enforcing compliance at generation step.",
    demoCredentials: [
      {
        role: "Designer",
        email: "designer@gmail.com",
        password: "design123"
      }
    ],
    liveUrl: "https://designmate-ai.vercel.app/",
    githubUrl: "https://github.com/ladHarsh/Designmate-AI",
    thumbnail: "/A_sleek_darkthemed_2k_202601132246-800.webp",
    thumbnailLight: "/A_premium_hyperrealistic_2k_202601141108-800.webp",
    category: "ai",
    featured: true,
    order: 1,
  },
  {
    title: "SmartAssign",
    slug: "smartassign",
    shortDescription:
      "AI grading assistant using Llama-3-70B and LangChain RAG to automatically evaluate student assignments with consistent scoring and detailed feedback.",
    problemStatement:
      "Manual grading creates week-long delays and inconsistent scoring standards, especially in high-volume classrooms.",
    solution:
      "Built an automated grading system using Groq's Llama-3-70B with LangChain RAG pipeline. Processes PDF submissions, compares against answer keys using vector similarity, and generates detailed feedback with rubric-based scoring.",
    architecture:
      "Three-tier pipeline: PDF ingestion via Multer and pdf-parse, LangChain RAG workflow with Llama-3-70B on Groq's LPUs for low-latency inference, MongoDB for assignment storage with aggregation pipelines for analytics. React frontend with Chart.js for grade visualization.",
    techStack: [
      "Groq AI (Llama-3-70B)",
      "LangChain",
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Chart.js",
      "JWT",
      "Multer",
      "Nodemailer"
    ],
    engineStatus: {
      algorithm: "LLAMA-3-70B",
      metric: "75ms/TOKEN"
    },
    features: [
      {
        title: "Automated LLM Grading",
        description:
          "Uses Llama-3-70B to evaluate student reasoning against ground truth without fine-tuning.",
      },
      {
        title: "RAG-Based Evaluation",
        description:
          "Implements retrieval-augmented generation for context-aware grading with granular scoring.",
      },
      {
        title: "Real-Time Analytics",
        description:
          "Live dashboard showing learning curves and grade distribution using Chart.js.",
      },
      {
        title: "Email Notifications",
        description:
          "Automated alerts sent to students upon evaluation completion via Nodemailer.",
      },
    ],
    outcome:
      "Reduced grading time from days to seconds while maintaining consistent evaluation criteria. Deployed for 50+ students across multiple classrooms. Provides detailed feedback that helps students understand mistakes.",
    videoUrl: "https://youtu.be/cqtb4iDCn2M",
    demoCredentials: [
      {
        role: "Faculty",
        email: "teacher1@gmail.com",
        password: "teacher123"
      },
      {
        role: "Student",
        email: "student1@gmail.com",
        password: "student123"
      }
    ],
    liveUrl: "https://smartassign.onrender.com/",
    githubUrl: "https://github.com/ladHarsh/SmartAssign",
    thumbnail: "/A_sleek_darkthemed_2k_202601132254-800.webp",
    thumbnailLight: "/A_sleek_lightthemed_2k_202601140004-800.webp",
    category: "ai",
    featured: true,
    order: 2,
  },
  {
    title: "AI Trip Planner",
    slug: "ai-trip-planner",
    shortDescription:
      "AI-powered trip planning tool using Gemini 2.5 Flash to generate optimized itineraries based on budget, time, and preferences with OpenStreetMap integration.",
    problemStatement:
      "Travel planning requires manually researching destinations, calculating routes, and balancing multiple constraints (budget, time, interests).",
    solution:
      "Built an AI trip planner that takes user preferences and generates day-by-day itineraries using Gemini 2.5 Flash. Integrates OpenStreetMap data for real-time location information and route visualization using Leaflet.js.",
    architecture:
      "React frontend with Leaflet.js for interactive maps. Node.js backend handles Gemini API calls for itinerary generation. OpenStreetMap Overpass API provides real-time POI data. MongoDB stores user trips and preferences. Socket.io enables real-time itinerary updates.",
    techStack: [
      "Gemini 2.5 Flash",
      "OpenStreetMap",
      "Leaflet.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Tailwind CSS",
      "JWT"
    ],
    engineStatus: {
      algorithm: "GEMINI 2.5 FLASH",
      metric: "2s GENERATION"
    },
    features: [
      {
        title: "AI Itinerary Generation",
        description:
          "Generates complete day-by-day schedules based on budget, time, and interest constraints.",
      },
      {
        title: "OpenStreetMap Integration",
        description:
          "Real-time location data and POI information via OSM Overpass API.",
      },
      {
        title: "Interactive Map Visualization",
        description:
          "Leaflet.js-powered maps showing routes and destinations with custom markers.",
      },
      {
        title: "Budget Optimization",
        description:
          "Calculates estimated costs and optimizes itinerary to fit user budget.",
      },
    ],
    outcome:
      "Reduced trip planning time from hours to under 2 seconds. Generates complete itineraries with budget breakdowns and optimized routes. Provides visual map representation for easy understanding.",
    demoCredentials: [
      {
        role: "Traveler",
        email: "demo@tripplanner.com",
        password: "demo123"
      }
    ],
    liveUrl: "https://trips-planner-blue.vercel.app/",
    githubUrl: "https://github.com/ladHarsh/AI-TripPlanner",
    thumbnail: "/A_sleek_darkthemed_2k_202601132323-800.webp",
    thumbnailLight: "/A_sleek_darkthemed_2k_202601140015-800.webp",
    category: "ai",
    featured: true,
    order: 3,
  },
  {
    title: "Career Launch",
    slug: "career-launch",
    shortDescription:
      "ATS optimization tool using TF-IDF and cosine similarity to analyze resume-job description match and provide keyword recommendations.",
    problemStatement:
      "Job applicants struggle to optimize resumes for Applicant Tracking Systems (ATS), leading to automatic rejections despite qualifications.",
    solution:
      "Built a resume analyzer using scikit-learn TF-IDF vectorization and cosine similarity to calculate match scores between resumes and job descriptions. Identifies missing keywords and provides actionable recommendations.",
    architecture:
      "Python-based NLP pipeline using scikit-learn for TF-IDF vectorization. pdfplumber handles multi-column PDF extraction. Cosine similarity calculation on sparse matrices for match scoring. Streamlit provides interactive UI with Plotly visualizations for keyword analysis.",
    techStack: [
      "Scikit-learn",
      "TF-IDF",
      "Python",
      "Streamlit",
      "Pandas",
      "pdfplumber",
      "Plotly"
    ],
    engineStatus: {
      algorithm: "TF-IDF COSINE",
      metric: "99% PARSE RATE"
    },
    features: [
      {
        title: "Resume-Job Similarity Scoring",
        description:
          "Calculates 0-100% match score using TF-IDF vectorization and cosine similarity.",
      },
      {
        title: "Keyword Gap Analysis",
        description:
          "Identifies missing keywords from job description and categorizes by importance.",
      },
      {
        title: "PDF Text Extraction",
        description:
          "Robust PDF parsing with multi-column support using pdfplumber.",
      },
      {
        title: "Interactive Visualizations",
        description:
          "Plotly charts showing keyword frequency and match score breakdown.",
      },
    ],
    outcome:
      "Provides quantitative match scores and specific keyword gaps to help candidates optimize resumes for ATS systems. Helps users understand exactly what's missing from their resume.",
    liveUrl: "https://career-launch.streamlit.app/",
    githubUrl: "https://github.com/ladHarsh/Career-Launch",
    thumbnail: "/A_sleek_darkthemed_2k_202601132317-800.webp",
    thumbnailLight: "/A_sleek_lightthemed_2k_202601140008-800.webp",
    category: "ai",
    featured: true,
    order: 4,
  },
  {
    title: "VibeStream",
    slug: "vibestream",
    shortDescription:
      "Content-based movie recommendation system using scikit-learn to analyze movie metadata and provide instant recommendations without user history.",
    problemStatement:
      "Traditional recommendation systems require extensive user history and create filter bubbles. New users face cold-start problems.",
    solution:
      "Built a content-based filtering system that analyzes movie metadata (plot, cast, genre, director) using CountVectorizer and cosine similarity. Pre-computes similarity matrix for instant recommendations.",
    architecture:
      "NLP pipeline using CountVectorizer to create feature vectors from 5000+ movie metadata points. Pre-computed similarity matrix cached in memory for O(1) lookups. Streamlit frontend fetches real-time movie data via TMDB API. Purely stateless architecture with no user tracking.",
    techStack: [
      "Scikit-learn",
      "Content-Based Filtering",
      "Python",
      "Streamlit",
      "Pandas",
      "TMDB API"
    ],
    engineStatus: {
      algorithm: "CONTENT FILTERING",
      metric: "O(1) LOOKUP"
    },
    features: [
      {
        title: "Content-Based Filtering",
        description:
          "Analyzes movie metadata (plot, cast, genre) to find similar films without user history.",
      },
      {
        title: "Instant Recommendations",
        description:
          "Pre-computed similarity matrix enables immediate recommendations without computation delay.",
      },
      {
        title: "TMDB Integration",
        description:
          "Real-time movie posters, ratings, and details via TMDB API.",
      },
      {
        title: "Zero User Tracking",
        description:
          "Completely stateless system that preserves user privacy.",
      },
    ],
    outcome:
      "Provides relevant recommendations instantly without requiring user history or login. Solves the cold-start problem for new users. Demonstrates that content analysis can work without behavioral tracking.",
    liveUrl: "https://vibestream.streamlit.app/",
    githubUrl: "https://github.com/ladHarsh/VibeStream",
    thumbnail: "/A_sleek_darkthemed_2k_202601132319-800.webp",
    thumbnailLight: "/A_sleek_lightthemed_2k_202601140010-800.webp",
    category: "ai",
    featured: false,
    order: 5,
  },
  {
    title: "Cookie",
    slug: "cookie-chat",
    shortDescription:
      "Real-time language learning platform with video/text chat using Stream SDK and WebRTC for low-latency communication.",
    problemStatement:
      "Language learners lack immersive practice opportunities with native speakers in real-time.",
    solution:
      "Built a real-time chat platform using Stream SDK for video/text communication. Implements language-based user matching to connect learners with native speakers for conversation practice.",
    architecture:
      "MERN stack with Stream SDK handling WebRTC media transport. React frontend with Zustand for state management and React Query for server state. Node.js backend provides JWT authentication and user matching logic. MongoDB stores user profiles with language preferences.",
    techStack: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stream SDK",
      "Tailwind CSS",
      "DaisyUI",
      "Zustand",
      "React Query",
      "JWT"
    ],
    engineStatus: {
      algorithm: "WEBRTC STREAM",
      metric: "<50ms LATENCY"
    },
    features: [
      {
        title: "Real-Time Video/Text Chat",
        description:
          "Stream SDK integration for high-quality video and text communication with sub-50ms latency.",
      },
      {
        title: "Language-Based Matching",
        description:
          "MongoDB queries match users based on native and target language preferences.",
      },
      {
        title: "JWT Authentication",
        description:
          "Secure session management using HTTP-only cookies and bcrypt password hashing.",
      },
      {
        title: "Responsive UI",
        description:
          "Tailwind CSS and DaisyUI components with real-time state updates via Zustand.",
      },
    ],
    outcome:
      "Enables real-time language practice with sub-50ms latency. Deployed with user authentication and language preference matching. Leverages managed infrastructure for reliable communication.",
    demoCredentials: [
      {
        role: "User 1",
        email: "user1@gmail.com",
        password: "user123"
      },
      {
        role: "User 2",
        email: "user2@gmail.com",
        password: "user123"
      }
    ],
    liveUrl: "https://cookie-a1fr.onrender.com",
    githubUrl: "https://github.com/ladHarsh/Cookie",
    thumbnail: "/A_sleek_darkthemed_2k_202601132321-800.webp",
    thumbnailLight: "/A_sleek_lightthemed_2k_202601140011-800.webp",
    category: "web",
    featured: false,
    order: 6,
  },
  {
    title: "OtakuTrack",
    slug: "otakutrack",
    shortDescription:
      "Anime tracking platform with real-time analytics dashboard using MongoDB aggregation pipelines and role-based access control.",
    problemStatement:
      "Anime fans lack tools to track viewing progress and analyze their watching patterns with meaningful insights.",
    solution:
      "Built a full-stack tracking platform with MongoDB aggregation pipelines for real-time statistics. Implements RBAC for community features and optimistic UI updates with React Query.",
    architecture:
      "MERN stack optimized for read-heavy operations. MongoDB aggregation pipelines ($project, $group, $lookup) for on-the-fly analytics. React Query for optimistic UI updates and cache management. Custom JWT middleware for role-based permissions (Admin/Moderator/User). Recharts for data visualization.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "React Query",
      "Recharts",
      "JWT",
      "Multer",
      "Axios"
    ],
    engineStatus: {
      algorithm: "MONGO AGGREGATION",
      metric: "60ms LATENCY"
    },
    features: [
      {
        title: "Real-Time Analytics",
        description:
          "MongoDB aggregation pipelines compute user statistics (genre distribution, watch velocity) in under 60ms.",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Custom JWT middleware enforces Admin/Moderator/User permissions for community features.",
      },
      {
        title: "Optimistic UI Updates",
        description:
          "React Query provides instant UI feedback before server confirmation.",
      },
      {
        title: "Data Visualizations",
        description:
          "Interactive charts and heatmaps showing viewing patterns via Recharts.",
      },
    ],
    outcome:
      "Deployed for 100+ users with real-time analytics, community discussions, and personalized viewing statistics. RBAC system maintains high-quality community interaction.",
    demoCredentials: [
      {
        role: "User",
        email: "user@otakutrack.com",
        password: "user123"
      }
    ],
    liveUrl: "https://otakutrack.onrender.com",
    githubUrl: "https://github.com/ladHarsh/OtakuTrack",
    thumbnail: "/IMG_20260115_232801-800.webp",
    thumbnailLight: "/IMG_20260115_232743-800.webp",
    category: "web",
    featured: false,
    order: 7,
  },
];

const seedProjects = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    // Drop all indexes except _id
    await Project.collection.dropIndexes();
    console.log("Dropped indexes");

    await Project.deleteMany({});
    console.log("Cleared existing projects");

    await Project.insertMany(projects);
    console.log("Projects seeded successfully");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding projects:", error.message);
    if (error.writeErrors) {
      error.writeErrors.forEach((err, index) => {
        console.error(`\nError ${index + 1}:`, err.err.errmsg);
        console.error("Document:", JSON.stringify(err.err.op, null, 2));
      });
    }
    process.exit(1);
  }
};

seedProjects();
