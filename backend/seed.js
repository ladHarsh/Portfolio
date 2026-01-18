import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/Project.js";

dotenv.config();

const projects = [
  {
    title: "DesignMate AI",
    slug: "designmate-ai",
    shortDescription:
      "A computational design engine that automates the subjective 'review & iterate' phase of UI/UX workflows using multi-modal AI (Gemini Vision).",
    problemStatement:
      "The UI/UX industry faces a 'Seniority Gap.' Junior designers often produce visually appealing work that breaks technically—failing WCAG accessibility standards or missing responsive logic. In fast-paced product cycles, there is no time for a Senior Designer to review every pixel, leading to technical debt, inconsistent design systems, and 'pixel-pushing' delays where developers have to fix design flaws before coding. The industry needs a way to automate 'Senior-Level Critique' and asset generation.",
    solution:
      "DesignMate AI operates not as a tool, but as an autonomous 'Design Motor.' It deconstructs the creative process into engineered pipelines. By leveraging Google's Gemini Vision (Multi-modal) and sophisticated Prompt Engineering, I built a system that 'looks' at designs to audit them for usability flaws and 'thinks' in code to generate production-ready layouts. It enforces mathematical harmony in color palettes and typography, effectively ensuring that every output is not just creative, but mathematically and structurally sound.",
    architecture:
      "I architected a multi-modal inference pipeline using the Gemini 1.5 Flash model. The core engineering challenge was 'Structured Determinism'—forcing a Large Language Model (LLM) to output strict, compile-ready JSON/CSS instead of conversational text. I achieved this via 'Chain-of-Thought' prompting and Zod schema validation. The UX Audit feature uses Computer Vision to interpret uploaded wireframes, comparing them against a knowledge base of Heuristic Principles (Nielsen's heuristics) to generate actionable scores.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini 2.5 Flash",
      "Framer Motion",
      "Tailwind CSS",
      "Socket.io",
      "Zod",
      "JWT",
      "Multer"
    ],
    engineStatus: {
      algorithm: "GEMINI 2.5 FLASH",
      metric: "45ms INFERENCE"
    },
    features: [
      "Automated Heuristic Evaluation: Uses Vision models to 'see' uploaded designs and generate a Senior-level critique based on Usability, Accessibility, and Visual Hierarchy.",
      "Deterministic Layout Synthesis: Transforms abstract text requirements into strictly typed, responsive HTML/Tailwind components relative to industry best practices.",
      "Algorithmic Accessibility Enforcer: Auto-generates color palettes and typestyles that mathematically pass WCAG AA/AAA contrast ratios.",
      "Trend Analysis Engine: Aggregates current design patterns to ensure output styles match modern market standards (Glassmorphism, Bento Grids, etc.)."
    ],
    outcome:
      "Bridged the gap between 'Creative Intent' and 'Engineering Constraints.' The system successfully automates 40% of the standard design review cycle. By enforcing WCAG compliance at the generation step, it eliminates accessibility refactors downstream. It proves that AI can do more than generate assets—it can act as a Quality Assurance layer for subjective fields like Design.",
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
      "An AI-powered grading and assignment management platform that automates evaluation workflows for educational institutions using Groq Llama-3.",
    problemStatement:
      "Grading at scale is broken. Faculty spend 60%+ of their time on repetitive evaluation tasks instead of teaching. Manual grading introduces inconsistency, delayed feedback frustrates students, and administrative overhead from tracking submissions creates bottlenecks that slow down the entire learning cycle.",
    solution:
      "SmartAssign is an automated grading pipeline that treats assignments as structured data. By integrating Groq's Llama-3 model via LangChain, the system extracts text from PDFs, generates ideal answer keys, and programmatically evaluates student submissions. It enforces consistent grading criteria across hundreds of submissions while providing instant, detailed feedback.",
    architecture:
      "I built a document processing pipeline using the MERN stack. The backend orchestrates PDF parsing (pdf-parse), AI evaluation (LangChain + Groq), and role-based access control (JWT). The React frontend provides real-time analytics dashboards with Chart.js, while MongoDB handles complex relational data between classrooms, assignments, and submissions with indexed queries for performance.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Groq AI (Llama-3)",
      "LangChain",
      "Bootstrap 5",
      "Chart.js",
      "JWT Authentication",
      "Multer",
      "Nodemailer"
    ],
    features: [
      "AI-Powered Auto-Grading (Llama-3): Parses student PDFs and evaluates against AI-generated answer keys, providing consistent scoring across all submissions.",
      "Intelligent Answer Generation: Automatically creates marking criteria and ideal answers from assignment PDFs using LLM prompt engineering.",
      "Real-Time Data Visualization: Faculty dashboards display submission rates, grade distributions, and student performance trends via interactive charts.",
      "Role-Based Access Control (RBAC): JWT-protected routes ensure faculty, students, and admins only access authorized resources.",
      "Scalable File Management: Multer-based upload system with organized storage for assignments and submissions."
    ],
    outcome:
      "Successfully automated the grading workflow for educational institutions. By eliminating manual evaluation bottlenecks, the platform reduced faculty grading time by 60% while ensuring 100% consistency in scoring criteria. The system scales to handle hundreds of concurrent submissions with sub-second response times.",
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
    category: "edtech",
    featured: true,
    order: 2,
  },

  {
    title: "Career Launch",
    slug: "career-launch",
    shortDescription:
      "AI-powered career intelligence platform that analyzes resumes against job descriptions to identify skill gaps and provide actionable insights.",
    problemStatement:
      "After sending out dozens of applications and hearing nothing back, I started wondering: was my resume even being read? Turns out, most companies use Applicant Tracking Systems that filter resumes before a human ever sees them. The problem? These systems are rigid—they look for exact keyword matches. Miss one term, format your PDF wrong, or use a synonym, and you're out. I realized candidates are flying blind, rewriting resumes over and over with no real feedback on what's actually wrong.",
    solution:
      "I built Career Launch to solve my own problem. Instead of guessing what's missing, the tool does what an ATS does—but shows you the results. It parses your resume, compares it to the job description using the same math (TF-IDF and cosine similarity), and tells you exactly what's matched, what's missing, and where you stand. No more trial and error. You get a clear score and a breakdown of gaps so you can fix your resume with actual data, not hunches.",
    architecture:
      "PDF Ingestion & Tokenization: Resumes are parsed using a dual-engine approach (pdfplumber + PyPDF2) to handle layout edge cases. TF-IDF Vectorization: The system constructs a Term Frequency-Inverse Document Frequency matrix to evaluate keyword importance. Cosine Similarity Logic: We compute the cosine of the angle between the Resume Vector and Job Vector to determine semantic alignment.",
    techStack: [
      "Python",
      "Streamlit",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "pdfplumber",
      "PyPDF2",
      "Plotly"
    ],
    features: [
      "Robust Layout Parsing (Multi-Column & Table Support)",
      "Granular 'Skill Gap' Identification",
      "Deterministic Scoring Logic (Transparent Algorithms)",
      "Privacy-First Architecture (Local Client-Side Processing)",
      "Categorized Competency Breakdown"
    ],
    outcome:
      "Quantifiable Matching: Replaces subjective guessing with a deterministic 0-100% match score based on cosine similarity. Granular Gap Analysis: Instantly categorizes skills into 'Missing', 'Matched', and 'Extra'. Automated Parsing: Robust PDF pipeline handles complex multi-column layouts ensuring 100% content analysis.",
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
      "Modern, interactive movie recommendation engine leveraging content-based filtering and NLP to suggest movies that match your vibe.",
    problemStatement:
      "I got tired of scrolling through Netflix for 30 minutes just to give up and rewatch The Office again. The problem? Streaming platforms show you what's popular, not what matches your taste. Their algorithms need watch history, so new users get generic recommendations. I wanted something that could suggest movies based on what I actually like—without needing an account or years of data.",
    solution:
      "VibeStream fixes this using content-based filtering. Instead of tracking what you watch, it analyzes the movies themselves—plot, genre, cast, director. Pick any movie you like, and it finds others with similar 'DNA' using the same math Netflix uses (cosine similarity). No login required, no watch history needed. Just instant recommendations based on what makes a movie similar.",
    architecture:
      "NLP Feature Extraction: Raw metadata is tokenized into a 'Bag-of-Words' model extracting top 5,000 features. Vector Space Modelling: Cosine Similarity is calculated across 4,803 vectors to create a dense similarity matrix. Hybrid Frontend Delivery: Streamlit loads the pre-computed model for logic while fetching live visuals asynchronously via TMDB API.",
    techStack: [
      "Python",
      "Streamlit",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "TMDB API",
      "CountVectorizer",
      "Cosine Similarity"
    ],
    features: [
      "Stateless Architecture (Zero-Friction UX)",
      "O(1) Inference Latency (Pre-Computed Matrix)",
      "Semantic Content Discovery (NLP-Based Matching)",
      "Asynchronous API Integration (TMDB)",
      "Optimized Vector Search Indexing"
    ],
    outcome:
      "Zero Cold-Start Latency: Delivers personalized recommendations immediately by analyzing content features. O(1) Inference Speed: Utilizes a pre-computed similarity matrix for instant lookup. Semantic Discovery: Overcomes popularity bias by finding 'Hidden Gems' that share narrative DNA with favorites.",
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
      "A modern language learning social platform connecting learners worldwide through real-time chat and video calls, powered by Stream SDK.",
    problemStatement:
      "Language learners struggle to find native speakers and practice partners. Traditional learning apps lack social interaction, making it difficult to build meaningful connections and practice conversational skills. Users need a unified platform that combines language matching, real-time communication, and cultural exchange in an immersive environment.",
    solution:
      "Cookie is a full-stack social network designed specifically for language learners. It intelligently matches users based on native and learning languages, enabling authentic conversations through Stream-powered chat and HD video calls. The platform features a friend system, profile customization with language preferences, and a beautiful responsive UI with dark/light themes, creating an engaging environment for language practice and cultural exchange.",
    architecture:
      "Built on the MERN stack with Vite for optimized frontend performance. The backend implements JWT authentication with HTTP-only cookies for security, while Zustand manages global state and React Query handles server-state caching. Real-time infrastructure is powered by Stream Chat and Video SDKs, offloading complex WebRTC and messaging logic to a reliable third-party service. MongoDB stores user profiles, friend relationships, and language preferences with indexed queries for fast matching.",
    techStack: [
      "React 18",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stream Chat SDK",
      "Stream Video SDK",
      "Tailwind CSS",
      "DaisyUI",
      "Zustand",
      "React Query",
      "JWT Authentication",
      "bcryptjs"
    ],
    features: [
      "Smart Language Matching: Connects users based on native and learning languages for optimal practice partnerships.",
      "Real-Time Chat: Powered by Stream Chat SDK with emoji support, typing indicators, read receipts, and message history.",
      "HD Video Calls: Built with Stream Video SDK featuring screen sharing, call controls, and multi-participant support.",
      "Friend System: Send, receive, and manage friend requests with real-time notifications.",
      "Profile Onboarding: Complete profile setup with bio, location, native language, and learning language preferences.",
      "Theme Switching: Dark and light mode support with DaisyUI for a personalized user experience.",
      "Secure Authentication: JWT-based auth with HTTP-only cookies, password hashing, and protected routes."
    ],
    outcome:
      "Successfully created a production-ready language learning social platform. The Stream SDK integration delivers enterprise-grade real-time communication with minimal latency, while the intelligent matching algorithm connects learners with compatible partners. The platform demonstrates how third-party services can be leveraged to build complex features without reinventing the wheel, resulting in a scalable, maintainable codebase.",
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
    category: "fullstack",
    featured: true,
    order: 5,
  },
  {
    title: "OtakuTrack",
    slug: "otakutrack",
    shortDescription:
      "Full-stack MERN social platform for anime enthusiasts featuring advanced analytics, community clubs, polls, and personalized tracking with RBAC.",
    problemStatement:
      "I was tracking my anime in a Google Sheet with 200+ entries, manually updating counts. I had no idea what genres I actually liked or if anyone else was watching the same shows. MyAnimeList felt too rigid, and I wanted a place where I could visualize my viewing patterns—not just see a static list.",
    solution:
      "OtakuTrack combines personal tracking with social features. You get a full MERN stack app with role-based access (Admin/Moderator/User) to manage clubs and polls. The backend uses MongoDB aggregation pipelines to crunch your watch history in real-time, feeding a Recharts dashboard that shows what genres you binge, how active you are, and where you spend your time. It's like having MyAnimeList's tracking with Reddit's community features.",
    architecture:
      "Secure Authentication Layer: Users are authenticated via JWT with bcrypt hashing. Custom middleware intercepts requests to enforce Role-Based Access Control (RBAC). Aggregation Pipeline: The Node.js backend executes complex MongoDB aggregation stages to calculate real-time statistics. Interactive Frontend Delivery: React Query manages asynchronous data streams, keeping the UI in sync with the server.",
    techStack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Recharts",
      "Tailwind CSS",
      "JWT",
      "React Query"
    ],
    features: [
      "Multi-State Watchlist Management",
      "Real-Time Data Visualization Dashboard",
      "Interactive Community Modules (Clubs & Polls)",
      "RBAC Middleware Implementation",
      "Granular Progress Tracking System",
      "Data Portability Engine (JSON/CSV Export)"
    ],
    outcome:
      "Turns Data Into Insights: Instead of staring at a list of 200 shows, you get visual charts showing genre preferences and watch time trends. Real-Time Aggregation: MongoDB pipelines crunch thousands of watchlist entries in under 60ms. Community Without Chaos: RBAC keeps clubs organized—Admins moderate, Users vote, no spam.",
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
    category: "fullstack",
    featured: true,
    order: 6,
  },
  {
    title: "AI Trip Planner",
    slug: "ai-trip-planner",
    shortDescription:
      "A full-stack, AI-powered travel planning platform that generates personalized itineraries using Google Gemini AI, with real-time maps integration and seamless trip management.",
    problemStatement:
      "Planning multi-day trips is overwhelming. Travelers waste hours researching destinations, manually scheduling activities, and estimating budgets across scattered websites. Without intelligent optimization, itineraries become inefficient—missing hidden gems, creating unrealistic timelines, and exceeding budgets. The lack of a unified platform forces users to juggle spreadsheets, booking sites, and maps simultaneously.",
    solution:
      "AI Trip Planner is an intelligent travel companion that automates the entire planning workflow. It leverages Google Gemini AI to generate day-by-day itineraries based on destination, dates, budget, interests, and travel style. The system integrates real-time Google Maps for route optimization, provides cost estimates, and offers a centralized dashboard to manage all trips. It transforms chaotic planning into a structured, data-driven experience.",
    architecture:
      "Built on a MERN stack with dual-token JWT authentication (access + refresh tokens). The backend orchestrates AI requests via Google Gemini API with intelligent prompt engineering, handles geocoding through Google Maps API, and manages trip data with indexed MongoDB queries. The React frontend uses React Query for optimized data caching, Socket.IO for real-time notifications, and Framer Motion for smooth animations. The system implements rate limiting, input sanitization, and comprehensive error handling for production-grade reliability.",
    techStack: [
      "React 18",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Gemini AI",
      "Google Maps API",
      "Tailwind CSS",
      "Framer Motion",
      "React Query",
      "Socket.IO",
      "JWT Authentication",
      "React Hook Form",
      "Chart.js",
      "jsPDF"
    ],
    features: [
      "AI-Powered Itinerary Generation: Creates custom day-by-day schedules with activities, meals, and transportation using Google Gemini AI.",
      "Intelligent Route Optimization: Automatically optimizes travel routes and activity scheduling for maximum efficiency.",
      "Budget Planning & Tracking: Provides automatic cost estimation for activities, meals, and transportation with currency support.",
      "Interactive Maps Integration: Real-time location services with Google Maps for directions, nearby places, and geocoding.",
      "Dual-Token Authentication: Secure JWT-based system with access tokens (15min) and refresh tokens (7 days) for seamless sessions.",
      "Real-Time Notifications: Socket.IO integration for live trip updates, booking confirmations, and system alerts.",
      "PDF Export: Download beautifully formatted trip itineraries as PDF documents for offline access."
    ],
    outcome:
      "Successfully automated travel planning for users worldwide. The platform reduces trip planning time from hours to minutes while ensuring optimized routes and budget adherence. The AI-powered system handles complex multi-day itineraries with intelligent recommendations, proving that machine learning can effectively enhance the travel experience. Currently deployed on Vercel (frontend) and Render (backend) with MongoDB Atlas for scalable data management.",
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
    thumbnailLight: "/A_sleek_lightthemed_2k_202601140015-800.webp",
    category: "ai",
    featured: true,
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
