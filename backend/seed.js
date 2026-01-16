import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/Project.js";

dotenv.config();

const projects = [
  {
    title: "DesignMate AI",
    slug: "designmate-ai",
    shortDescription:
      "A smart design assistant that helps UI/UX designers create accessible, developer-ready interfaces faster using Google Gemini AI.",
    problemStatement:
      "Frontend development often stalls because initial designs aren't production-ready. Junior designers frequently overlook strict WCAG accessibility standards and responsive constraints. This results in technical debt and repetitive 'pixel-pushing' cycles where developers have to manually fix contrast ratios and layout logic before they can start coding.",
    solution:
      "DesignMate AI is a technical enforcement layer for design. Instead of relying on manual reviews, it utilizes Google's Gemini Vision model to treat design files as data. The system programmatically enforces WCAG compliance, validates color contrast math, and generates strictly typed React boilerplate. It shifts the workflow from 'subjective design' to 'data-driven engineering'.",
    architecture:
      "I engineered a visual processing pipeline using a decoupled MERN architecture. Client inputs are sanitized via Zod schemas and processed in-memory (Multer) to avoid disk I/O latency. The Node.js backend manages the AI interaction using context-aware prompts and exponential backoff for rate limiting, ensuring robust performance. The frontend then hydrates the raw JSON response into interactive React components.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini 2.5 Flash",
      "Tailwind CSS",
      "Framer Motion",
      "JWT Authentication",
      "File Processing",
      "PDF Generation",
      "Zod Validation",
    ],
    features: [
      "AI Layout Generator: Transforms simple text descriptions into structured, developer-ready page layouts, eliminating the fear of the blank page.",
      "Automated UX Audit: Uploads design screenshots and receives a trusted, detailed report on usability flaws, accessibility errors, and improvements.",
      "Stress-Free Color & Typography: Automates the selection of WCAG-compliant color palettes and font pairings, reducing decision fatigue.",
      "Design Trend Intelligence: Analyzes real-time market data to suggest modern styles, keeping designs relevant and fresh.",
      "Enterprise-Grade Security: ensures client IP is protected with robust session management and role-based access control.",
      "Project History & Dashboard: Centralizes all audits and generated assets, creating a clear system of record for design iteration."
    ],
    outcome:
      "This platform successfully bridges the workflow gap between design and development. By automating the 'technical review' phase, it reduces design feedback loops by huge margins, allowing new designers to ship senior-level, accessible work. The system currently handles complex visual auditing tasks with sub-second processing, proving that AI can effectively mentor human creativity.",
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
      "Real-time social platform for instant messaging and video calling, connecting friends seamlessly.",
    problemStatement:
      "Users often juggle multiple apps for social networking, text messaging, and video calls. There is a need for a unified platform that offers high-quality real-time communication with a simplified, modern user experience.",
    solution:
      "Cookie integrates Stream's powerful Chat and Video SDKs into a cohesive MERN stack application. It provides a seamless experience for finding friends, chatting in real-time, and launching instant video calls, all wrapped in a modern, responsive interface.",
    architecture:
      "Built on the MERN stack (MongoDB, Express, React, Node.js) with Vite for high-performance frontend tooling. Authentication is secure using JWT and cookies. Global state is managed by Zustand and async data by React Query. Real-time infrastructure is offloaded to Stream API for reliability.",
    techStack: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stream API",
      "Tailwind CSS",
      "DaisyUI",
      "Zustand",
      "JWT"
    ],
    features: [
      "Real-time Chat & Video Calls",
      "Friend System (Requests, Friends List)",
      "Secure Authentication & Onboarding",
      "Real-time Notifications",
      "Dark/Light Theme Support",
      "Responsive UI with DaisyUI"
    ],
    outcome:
      "Developed a production-ready communication platform capable of handling real-time interactions with low latency. Successfully integrated third-party SDKs (Stream) to deliver enterprise-grade chat and video features.",
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
    order: 6,
  },
  {
    title: "AI Trip Planner",
    slug: "ai-trip-planner",
    shortDescription:
      "Full-stack travel platform generating personalized itineraries using Google Gemini AI, with real-time hotel and transport booking.",
    problemStatement:
      "Planning a trip involves juggling multiple platforms for flights, hotels, and itineraries, often leading to fragmented plans and stress. Travelers need a unified tool that intelligently orchestrates every aspect of their journey.",
    solution:
      "AI Trip Planner leverages Google Gemini AI to create bespoke day-by-day itineraries based on user preferences. It seamlessly integrates real-time data from Booking.com and Google Maps to offer immediate actions—booking hotels, finding transport, and exploring local spots—all in one place.",
    architecture:
      "A robust MERN stack application. The backend integrates Gemini AI for generative planning, RapidAPI for real-time booking data, and Google Maps API for geolocation. The frontend uses React with React Query for efficient data management and Framer Motion for a polished UX.",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Google Gemini AI",
      "Google Maps API",
      "RapidAPI",
      "Tailwind CSS",
      "React Query",
      "JWT"
    ],
    features: [
      "AI-Generated Personalized Itineraries",
      "Real-time Hotel Search & Booking",
      "Transport Booking (Flight/Train/Bus)",
      "Interactive Maps & Directions",
      "Trip Dashboard & Management",
      "PDF Export for Itineraries"
    ],
    outcome:
      "Created a seamless travel planning ecosystem. Reduced average trip planning time by ~70% through AI automation and centralized booking tools. Delivered a modern, responsive UI that simplifies complex travel logistics.",
    demoCredentials: [
      {
        role: "Traveler",
        email: "traveler@gmail.com",
        password: "travel123"
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
    order: 8,
  },
];

const seedProjects = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    await Project.deleteMany({});
    console.log("Cleared existing projects");

    await Project.insertMany(projects);
    console.log("Projects seeded successfully");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding projects:", error);
    process.exit(1);
  }
};

seedProjects();
