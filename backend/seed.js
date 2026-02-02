import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/Project.js";

dotenv.config();

const projects = [
  {
    title: "DesignMate AI",
    slug: "designmate-ai",
    shortDescription:
      "Enterprise-grade design intelligence platform using Gemini 2.5 Flash to enforce WCAG standards and generate deterministic UI resources.",
    problemStatement:
      "Designers rely on intuition and fragmented tools, leading to accessibility violations, inconsistent typography, and slower handoffs.",
    solution:
      "Built a 'Decision Support' intelligence layer using Gemini 2.5 Vision. Unlike raw generative AI, this uses structured 'Chain-of-Thought' prompting and Zod validation to audit designs, ensuring outputs (Layouts, Palettes, Fonts) are strictly WCAG AA/AAA compliant.",
    architecture:
      "Stateless REST API (Node/Express) handling multi-modal inputs. Gemini 2.5 Flash performs heuristic analysis. Sharp handles image preprocessing for vision tasks. PDFKit generates executive audit reports. Reddit API integration tracks real-time design trends.",
    techStack: [
      "Gemini 2.5 Flash",
      "Zod Schema",
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
      "Sharp",
      "PDFKit",
      "JWT"
    ],
    engineStatus: {
      algorithm: "GEMINI 2.5 FLASH",
      metric: "98% WCAG ACCURACY"
    },
    features: [
      {
        title: "UX Audit Bot",
        description:
          "Vision-based analysis detecting severity-graded usability issues and generating PDF reports.",
      },
      {
        title: "Deterministic Layout Engine",
        description:
          "Transforms requirements into responsive, component-based HTML/CSS layouts via structured prompting.",
      },
      {
        title: "Design System Intelligence",
        description:
          "Generates mathematically harmonious color palettes and font pairings that pass WCAG AA/AAA checks.",
      },
      {
        title: "Real-Time Trend Analytics",
        description:
          "Aggregates real-time signals from Reddit design communities to identify emerging UI patterns.",
      },
    ],
    outcome:
      "Reduced manual audit time by 90% via automated PDF reporting. Enforced 100% WCAG compliance on generated assets. Deployed a modular 'Human-in-the-loop' architecture used by 20+ designers.",
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
      "Human-in-the-loop grading assistant using Llama-3-70B (via Groq) to generate draft feedback for instructor review.",
    problemStatement:
      "Manual grading scales linearly with class size, leading to delayed feedback. Fully automated grading risks hallucinations and lacks 'teacher intuition'.",
    solution:
      "Engineered a decision-support system that drafts, rather than finalizes, feedback. Uses LangChain to abstract the AI provider (preventing vendor lock-in) and Llama-3-70B on Groq LPUs for rapid inference. The seamless 'Draft-Review-Approve' workflow ensures academic integrity.",
    architecture:
      "Stateless document pipeline parses PDFs into text without permanent storage. LangChain orchestrates RAG-like context injection. Asynchronous job queues handle non-deterministic LLM latency. Frontend polls for status updates to maintain responsiveness.",
    techStack: [
      "Llama-3-70B",
      "Groq SDK",
      "LangChain",
      "React",
      "Node.js",
      "MongoDB",
      "PDF Parsing",
      "Nodemailer"
    ],
    engineStatus: {
      algorithm: "LLAMA-3-70B",
      metric: "HUMAN-VERIFIED"
    },
    features: [
      {
        title: "Provider-Agnostic Design",
        description:
          "LangChain abstraction allows hot-swapping models (Groq/OpenAI/Local) without code changes.",
      },
      {
        title: "Stateless Processing",
        description:
          "Parses and processes documents in-memory during upload, minimizing storage costs and privacy risks.",
      },
      {
        title: "Draft-First Workflow",
        description:
          "Enforces a 'human-in-the-loop' reliability layer where no AI output is published without instructor approval.",
      },
      {
        title: "Semantic Evaluation",
        description:
          "Compares student arguments against instructor keys using contextual embeddings rather than keyword matching.",
      },
    ],
    outcome:
      "Reduced grading time by shifting effort from 'writing' to 'reviewing'. Maintained 100% human accountability for grades. Demonstrated responsible AI design in high-stakes domains.",
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
      "Zero-cost travel planning engine integrating Google Gemini AI with OpenStreetMap ecosystem for personalized routing.",
    problemStatement:
      "Travel apps often fragment the experience (planning vs navigation) and rely on expensive APIs that limit accessibility for hobbyist developers.",
    solution:
      "Built a centralized planning platform using 100% free/open-source services. Integrates Gemini for reasoning (itinerary generation) with the OpenStreetMap stack (Nominatim, Overpass, OSRM) for grounding AI suggestions in real geospatial data.",
    architecture:
      "React frontend visualizes routes via Leaflet. Backend orchestrates data fetching: resolving Gemini text outputs into concrete coordinates via Nominatim. Uses dual-token JWT auth and Socket.io for real-time updates.",
    techStack: [
      "Gemini AI",
      "React Query",
      "OpenStreetMap",
      "OSRM & Nominatim",
      "React Leaflet",
      "Node.js",
      "Socket.io",
      "MongoDB"
    ],
    engineStatus: {
      algorithm: "GEOSPATIAL AI",
      metric: "ZERO PAID APIS"
    },
    features: [
      {
        title: "Open-Source Stack",
        description:
          "Complete geospatial pipeline (Geocoding, Routing, Places) built entirely on free OSM services.",
      },
      {
        title: "Grounded AI Planning",
        description:
          "Gemini generates the 'Why' (User Preferences), OSM provides the 'Where' (Coordinates & Routing).",
      },
      {
        title: "Real-Time Optimization",
        description:
          "Socket.io enables live updates to itineraries as constraints or preferences change.",
      },
      {
        title: "Recall Architecture",
        description:
          "Dual-token (Access/Refresh) strategy ensures secure, persistent user sessions across devices.",
      },
    ],
    outcome:
      "Proved viable $0 cost architecture for complex geospatial apps. Unified planning and navigation into a single interface. Delivered <2s itinerary generation latency.",
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
      "Explainable resume matcher using a Hybrid Scoring Algorithm (TF-IDF + Skill Taxonomy) to provide transparent feedback.",
    problemStatement:
      "Candidates face 'black box' rejections from ATS systems without knowing which specific skills or keywords were missed.",
    solution:
      "Engineered a transparent matching engine. Instead of opaque neural classifications, it uses a weighted hybrid formula (60% Taxonomy Match, 40% Semantic Similarity) to provide actionable, line-by-line feedback on missing qualifications.",
    architecture:
      "Python-based processing pipeline. Uses `pdfplumber` for robust text extraction from complex PDF layouts. Scikit-learn computes vector similarity. Streamlit delivers the interactive visualization layer.",
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
      algorithm: "HYBRID TF-IDF",
      metric: "EXPLAINABLE SCORING"
    },
    features: [
      {
        title: "Hybrid Match Logic",
        description:
          "Combines rigid dictionary matching (for hard skills) with probabilistic text similarity (for context).",
      },
      {
        title: "Multi-Engine Parsing",
        description:
          "Uses `pdfplumber` with `PyPDF2` fallback to handle diverse resume formatting standards.",
      },
      {
        title: "Explainable Gaps",
        description:
          "Classifies findings into 'Matched', 'Missing', and 'Extra' to guide candidate improvement.",
      },
      {
        title: "Synonym Normalization",
        description:
          "Maps domain jargon (e.g., 'JS' -> 'JavaScript') to canonical terms before vectorization.",
      },
    ],
    outcome:
      "Democratized access to ATS logic. Candidates gained specific, actionable insights (e.g., 'Add React to skills section') rather than generic rejection emails.",
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
      "Privacy-first recommendation engine solving the 'Cold Start' problem via atomic feature vectorization.",
    problemStatement:
      "Standard collaborative filtering fails for new users (no history) and new platforms (data sparsity).",
    solution:
      "Implemented a pure Content-Based Filtering approach. Engineered 'atomic' features (e.g., treating 'Christopher Nolan' as a single token) to preserve semantic meaning. Pre-computes the entire similarity matrix for O(1) inference speed.",
    architecture:
      "Offline training pipeline (Jupyter) generates pickled artifacts (Similarity Matrix). Stateless Streamlit inference engine loads these artifacts into memory to serve instant recommendations without database lookups.",
    techStack: [
      "Scikit-learn",
      "CountVectorizer",
      "Cosine Similarity",
      "Python",
      "Streamlit",
      "Pandas",
      "Pickle"
    ],
    engineStatus: {
      algorithm: "CONTENT FILTERING",
      metric: "O(1) LATENCY"
    },
    features: [
      {
        title: "Atomic Tokenization",
        description:
          "Custom preprocessing treats directors and actors as single entities to improve vector quality.",
      },
      {
        title: "Zero-History Inference",
        description:
          "Delivers relevant results instantly for first-time users without tracking or cookies.",
      },
      {
        title: "Matrix Pre-Computation",
        description:
          "Trades RAM for speed: loads the entire item-item matrix into memory for sub-10ms lookup.",
      },
      {
        title: "Privacy by Design",
        description:
          "Requires absolutely no user data collection to function effectively.",
      },
    ],
    outcome:
      "Achieved sub-10ms recommendation latency. Solved the cold-start problem for Day 1 launches. Demonstrated understanding of vector space trade-offs (Sparsity vs Explainability).",
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
      "Language learning social network featuring managed WebRTC infrastructure for low-latency global communication.",
    problemStatement:
      "Building scalable real-time video/chat requires solving complex network topology (SFU/Mesh) and latency challenges.",
    solution:
      "Leveraged Stream SDK for edge-network media transport, ensuring sub-50ms latency. Augmented this with a custom Node.js/MongoDB backend for 'Language Match' logic, connecting users based on complementary native/learning language goals.",
    architecture:
      "Hybrid architecture: Stream handles heavy media traffic. Custom Express backend manages Identity (JWT), Social Graph, and Discovery logic. Frontend uses React Query for optimistic updates and smooth state management.",
    techStack: [
      "React",
      "Stream SDK",
      "Zustand",
      "TanStack Query",
      "Node.js",
      "MongoDB",
      "DaisyUI"
    ],
    engineStatus: {
      algorithm: "MANAGED WEBRTC",
      metric: "<50ms LATENCY"
    },
    features: [
      {
        title: "Global Edge Network",
        description:
          "Uses Stream's distributed infrastructure to route video/audio via the nearest node.",
      },
      {
        title: "Optimistic State UI",
        description:
          "React Query & Zustand ensure instant feedback for chat interactions, masking network latency.",
      },
      {
        title: "Language Discovery",
        description:
          "Backend query logic specifically matches 'Target Language' learners with 'Native' speakers.",
      },
      {
        title: "Secure Onboarding",
        description:
          "Complete auth flow with HTTP-Only cookies and profile customization steps.",
      },
    ],
    outcome:
      "Delivered production-grade video stability from day one. Focused engineering effort on unique 'Social Discovery' logic rather than reinventing the wheel on media transport.",
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
      "Full-stack media tracking application demonstrating deep mastery of MVC architecture and secured REST API design.",
    problemStatement:
      "Understanding the core lifecycle of data—from database to client state—is fundamental for any rigorous software engineer.",
    solution:
      "Built a 'Back-to-Basics' robust CRUD application. Focuses on architectural purity: strictly separated Controllers/Services/Routes, secure JWT implementation, and efficient React state management. Serves as a reliable reference implementation for full-stack patterns.",
    architecture:
      "Standard MERN MVC. Express backend acts as the single source of truth. React frontend consumes REST endpoints. Data integrity enforced via Mongoose Schemas. Security hardened with HTTP-Only cookies and Role-Based middlewares.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
      "Tailwind CSS"
    ],
    engineStatus: {
      algorithm: "REST API",
      metric: "MVC DESIGN"
    },
    features: [
      {
        title: "Architectural Purity",
        description:
          "Clean separation of concerns (Service Layer vs Controller Layer) for maintainability.",
      },
      {
        title: "Secure Auth Flow",
        description:
          "Implementation of industry-standard JWT Authentication with HttpOnly cookie storage.",
      },
      {
        title: "Responsive Dashboard",
        description:
          "Mobile-first UI design ensures seamless tracking on any device.",
      },
      {
        title: "Data Integrity",
        description:
          "Strict Mongoose schema validation prevents malformed data entry.",
      },
    ],
    outcome:
      "Established a solid full-stack foundation. Proved ability to design, build, and deploy a secure, functional web application from scratch without relying on ‘magic’ frameworks.",
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
  }
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
