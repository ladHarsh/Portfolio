import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/Project.js";

dotenv.config();

const projects = [
  {
    title: "DesignMate AI",
    slug: "designmate-ai",
    shortDescription:
      "AI design review tool using Gemini 2.5 Flash to audit UI/UX for WCAG compliance and generate production HTML/Tailwind. Automated 40% of design reviews for 20+ designers.",
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
      {
        title: "HEURISTIC_VISION_AUDIT",
        description:
          "Uses Vision models to 'see' uploaded designs and generate a Senior-level critique based on Usability, Accessibility, and Visual Hierarchy.",
      },
      {
        title: "DETERMINISTIC_LAYOUT_SYNTHESIS",
        description:
          "Transforms abstract text requirements into strictly typed, responsive HTML/Tailwind components relative to industry best practices.",
      },
      {
        title: "ACCESSIBILITY_ENFORCER",
        description:
          "Auto-generates color palettes and typestyles that mathematically pass WCAG AA/AAA contrast ratios.",
      },
      {
        title: "TREND_ANALYSIS_ENGINE",
        description:
          "Aggregates current design patterns to ensure output styles match modern market standards (Glassmorphism, Bento Grids, etc.).",
      },
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
      "AI grading assistant using Llama-3-70B and LangChain RAG. Delivers 99% faster feedback with consistent scoring. Deployed for 50+ students across multiple classrooms.",
    problemStatement:
      "The academic feedback loop suffers from critical latency. Human evaluation is inherently unscalable, subjecting students to weeks of delay and subjective noise. In high-volume institutions, 'grading fatigue' causes variance in scoring standards, effectively breaking the reliability of the education protocol. The system needed a way to decouple 'Evaluation' from 'Human Time Constraints'.",
    solution:
      "SmartAssign operates as a 'Cognitive Supervisor Node' for educational workflows. Instead of manually parsing papers, it treats submissions as unstructured data streams. By pipelining Groq's Llama-3-70B through LangChain, it performs 'Semantic Audits' on student PDFs—generating ground-truth answer keys, executing vector-based comparisons, and synthesizing granular feedback with sub-second latency. It transforms grading from a manual chore into a deterministic, automated pipeline.",
    architecture:
      "I architected a Three-Tier Cognitive Pipeline. Ingestion: Multer/PDF-Parse buffers raw document streams. Inference Core: LangChain orchestrates a RAG (Retrieval-Augmented Generation) workflow, feeding context windows to the Llama-3 model running on Groq's LPUs for ultra-low latency. State Layer: MongoDB indexes assignments with relational pointers to classroom schemas, enabling O(log n) retrieval for analytics dashboards.",
    techStack: [
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Groq AI (Llama-3)",
      "LangChain",
      "Bootstrap 5",
      "Chart.js",
      "JWT",
      "Multer",
      "Nodemailer"
    ],
    engineStatus: {
      algorithm: "LLAMA-3-70B",
      metric: "75ms/TOKEN SPEED"
    },
    features: [
      {
        title: "ZERO_SHOT_AUDIT",
        description:
          "Deploys LLMs to audit student reasoning against ground truth schemas without prior fine-tuning.",
      },
      {
        title: "RECURSIVE_CHAINING",
        description:
          "Deconstructs complex prompts into atomic logic gates using Chain-of-Thought reasoning for granular scoring.",
      },
      {
        title: "VELOCITY_DASHBOARD",
        description:
          "Live telemetry visualization of learning curves and grade distribution via Chart.js.",
      },
      {
        title: "ASYNC_EVENT_BUS",
        description:
          "Non-blocking notification queues triggering instant alerts upon evaluation completion.",
      },
    ],
    outcome:
      "Eliminated the 'Grading Bottleneck' entirely. Reduced feedback latency by 99% (from weeks to seconds) while achieving absolute consistency in scoring criteria. The system proves that High-Level Cognitive Tasks (like evaluation) can be successfully offloaded to specialized AI agents.",
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
    category: "edtech",
    featured: true,
    order: 3,
  },
  {
    title: "Career Launch",
    slug: "career-launch",
    shortDescription:
      "ATS optimization tool using TF-IDF and cosine similarity to analyze resume-job fit. Provides keyword recommendations with 99% PDF parsing accuracy. Python + Streamlit.",
    problemStatement:
      "Hiring is no longer human. It is a mathematical filter. Companies deploy opaque classifiers to reject 98% of applicants before a person ever sees the file. Candidates are optimizing for humans while fighting machines. The only way to win is to expose the underlying rejection logic and engineer a payload that mathematically guarantees survival through the filter.",
    solution:
      "Career Launch is an ATS decompiler. It ingests job descriptions and resumes, projecting them into high-dimensional vector space to measure semantic distance. Instead of vague advice, it calculates the exact cosine similarity score used by hiring algorithms. It identifies the precise keywords missing from your feature vector and generates a patch strategy to maximize your acceptance probability.",
    architecture:
      "Built on a scikit-learn pipeline focusing on TF-IDF vectorization. The core logic handles multi-column PDF extraction via pdfplumber to prevent parsing errors common in standard tools. It constructs a sparse matrix of n-gram features from the target job description and computes the dot product against the candidate profile to derive a deterministic match score. Visualization handled by Plotly for granular metric breakdown.",
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
    engineStatus: {
      algorithm: "MULTI-DIM VECTOR",
      metric: "99% PARSE RATE"
    },
    features: [
      {
        title: "COSINE_SCORING_KERNEL",
        description:
          "Replaces confidence intervals with hardness 0-100% similarity metrics derived from vector dot products.",
      },
      {
        title: "VECTOR_SPACE_PROJECTION",
        description:
          "Maps candidate profiles into n-dimensional feature space to identify semantic proximity to job requirements.",
      },
      {
        title: "SEMANTIC_GAP_DETECTOR",
        description:
          "Categorizes missing keywords as 'False Negatives' or 'Hard Gaps' for actionable injection strategies.",
      },
      {
        title: "PRIVACY_ENCLAVE",
        description:
          "Executes all NLP operations in local memory or stateless sessions to ensure zero data retention.",
      },
    ],
    outcome:
      "Turns the job search into an engineering problem. Users stop guessing and start optimizing. By treating a resume as a data payload, candidates can force their application through the digital gatekeepers. It shifts the power dynamic from the system back to the applicant.",
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
      "Movie recommendation engine using content-based filtering with 4,803-dimensional vectors. O(1) lookup speed, zero user history required. Python + Scikit-learn + TMDB API.",
    problemStatement:
      "Modern streaming algorithms are broken. They rely on massive user history (Collaborative Filtering), creating 'Echo Chambers' and 'Cold Start' dead zones for new users. The system ignores the actual content of the film, prioritizing popularity metrics over semantic relevance. Requires a shift from behavioral tracking to intrinsic content analysis.",
    solution:
      "VibeStream operates as a 'Content DNA' analyzer. It bypasses user tracking entirely. By vectorizing 5,000+ metadata points (plot, cast, genre) into a high-dimensional feature space, it calculates the 'Semantic Velocity' between films. It treats movies as data nodes, using Cosine Similarity to identify mathematical neighbors in 4,803-dimensional space.",
    architecture:
      "Architected for O(1) inference speed. The NLP pipeline (CountVectorizer) pre-computes a 23M+ entry Similarity Matrix, caching it in memory for instant lookups. The Streamlit frontend acts as a stateless render layer, fetching real-time assets via TMDB API while the core logic remains purely mathematical and server-side.",
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
    engineStatus: {
      algorithm: "VECTOR COSINE",
      metric: "O(1) LOOKUP"
    },
    features: [
      {
        title: "SEMANTIC_DNA_PROFILING",
        description:
          "Deconstructs films into 5,000+ vector features to map narrative and tonal fingerprints.",
      },
      {
        title: "ZERO_HISTORY_INFERENCE",
        description:
          "Delivers highly relevant recommendations instantly without requiring a single byte of user history.",
      },
      {
        title: "VECTOR_SPACE_CACHING",
        description:
          "Pre-computed 4803x4803 similarity matrix enables constant-time O(1) query performance.",
      },
      {
        title: "HYBRID_METADATA_FUSION",
        description:
          "Synthesizes plot keywords, cast nodes, and directorial style into a unified similarity index.",
      },
    ],
    outcome:
      "Eliminated the 'Cold Start' problem. Proved that mathematically pure content analysis outperforms behavioral tracking for discovery. Delivers sub-100ms recommendations while preserving absolute user privacy. A stateless, high-velocity engine for cinematic exploration.",
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
      "Real-time language learning platform with video/text chat using Stream SDK and WebRTC. <50ms latency via edge routing. MERN stack + Zustand + React Query.",
    problemStatement:
      "Language acquisition fails without immersion. Standard tools isolate learners in asynchronous silos. The challenge was to replicate the immediacy of physical presence in a browser environment without the overhead of maintaining custom TURN/STUN infrastructure.",
    solution:
      "Cookie is a unified communication fabric. It orchestrates real-time data streams by offloading media transport to Stream's global edge network. This ensures high-fidelity, low-latency transmission for video and text. The system intelligently routes users based on linguistic compatibility, creating an instant 'Immersion Protocol' that bridges the gap between study and fluency.",
    architecture:
      "Built on an Event-Driven MERN Core. The React frontend maintains optimistic state via React Query, while the Node.js backend acts as a secure token authority. Media streams are handled by Stream SDK's distributed infrastructure, ensuring reliability. Authentication uses stateless HTTP-Only JWTs with bcrypt hashing for session integrity.",
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
      metric: "< 50ms LATENCY"
    },
    features: [
      {
        title: "EDGE_NETWORK_ROUTING",
        description:
          "Offloads heavy media transport to distributed edge nodes for sub-50ms global latency.",
      },
      {
        title: "LINGUISTIC_MATCHING_KERNEL",
        description:
          "Indexed MongoDB queries map native-to-target language pairs for optimal user pairing.",
      },
      {
        title: "STATELESS_JWT_AUTH",
        description:
          "Secure, scalable session management using short-lived tokens and HTTP-only cookies.",
      },
      {
        title: "REACTIVE_UI_SYNCHRONIZATION",
        description:
          "Zustand state manager handles real-time socket events for instant UI updates.",
      },
    ],
    outcome:
      "Eliminated infrastructure bottlenecks. Delivered enterprise-grade communication reliability with zero maintenance overhead. Proved that complex real-time systems can be architected by leveraging specialized, managed infrastructure layers.",
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
    title: "OtakuTrack",
    slug: "otakutrack",
    shortDescription:
      "Anime tracking platform with real-time analytics using MongoDB aggregation. RBAC system, optimistic UI via React Query, data visualizations. Deployed for 100+ users.",
    problemStatement:
      "Standard tracking tools are static data silos. They capture 'what' but ignore 'how'. Users lack insight into their own consumption velocity and are forced into unmoderated, chaotic forums. The requirement was to merge granular personal analytics with a structured, protected community layer.",
    solution:
      "OtakuTrack functions as a personal telemetry platform. It replaces static lists with dynamic data visualizations. The backend leverages MongoDB's Aggregation Framework to crunch millions of data points on-the-fly, serving real-time statistics about genre saturation and watch velocity. It wraps this data layer in a strict RBAC (Role-Based Access Control) shell, ensuring high-quality community interaction.",
    architecture:
      "Integrated MERN Monolith optimized for read-heavy operations. The Data Layer utilizes complex MongoDB Aggregation Pipelines ($project, $group, $lookup) to offload calculation from the node event loop. The Frontend implements Optimistic UI patterns via React Query for perceived zero-latency interactions. Security is enforced via custom JWT middleware handling granular permission scopes.",
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
        title: "REAL_TIME_AGGREGATION_PIPELINE",
        description:
          "Executes complex MongoDB $lookup and $group stages to compute user statistics in under 60ms.",
      },
      {
        title: "RBAC_GOVERNANCE_LAYER",
        description:
          "Cryptographic role enforcement (Admin/Mod/User) protecting community integrity via custom middleware.",
      },
      {
        title: "OPTIMISTIC_STATE_SYNC",
        description:
          "React Query implementation providing zero-latency UI feedback before server confirmation.",
      },
      {
        title: "DATA_VISUALIZATION_KERNEL",
        description:
          "Transforms raw watch history logs into interactive velocity charts and heatmaps via Recharts.",
      },
    ],
    outcome:
      "Transforms passive consumption into active data science. Users gain verifiable insights into their viewing habits. The RBAC system successfully successfully mitigated spam, creating a self-sustaining, high-quality community ecosystem.",
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
    order: 7,
  },
  {
    title: "AI Trip Planner",
    slug: "ai-trip-planner",
    shortDescription:
      "AI trip planner using Gemini 2.5 Flash to generate optimized itineraries with budget/time constraints. OpenStreetMap integration. Reduced planning from hours to <2s.",
    problemStatement:
      "Travel planning is an unoptimized logistics problem. Humans struggle to solve for multiple variables (budget, distance, open hours) simultaneously, leading to 'Analysis Paralysis'. Existing tools are static directories, not valid solvers.",
    solution:
      "The system functions as a deterministic constraint solver. It ingests abstract user intent (budget, days, interests) and projects it against real-time OpenStreetMap geospatial data. A Gemini 2.5 Flash reasoning core optimizes requirements into a coherent, routed schedule, effectively solving the Traveling Salesman Problem for leisure logistics.",
    architecture:
      "Hybrid Neuro-Symbolic Architecture. The 'Symbolic' layer (Leaflet.js + OSM) provides ground-truth vector tiles. The 'Neural' layer (Gemini 2.5 Flash) performs the logical reasoning to sequence these points. State is managed via React functional closures to ensure zero-drift updates.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini 2.5 Flash",
      "Leaflet.js",
      "OpenStreetMap",
      "Socket.io",
      "Tailwind CSS",
      "Framer Motion",
      "JWT"
    ],
    engineStatus: {
      algorithm: "GEMINI 2.5 FLASH",
      metric: "2s GENERATION"
    },
    features: [
      {
        title: "GEOSPATIAL_REASONING_CORE",
        description:
          "Merges abstract user intent with rigid latitude/longitude constraints to generate viable routes.",
      },
      {
        title: "CONSTRAINT_SATISFACTION_ENGINE",
        description:
          "Solving for budget, time, and rating thresholds simultaneously in < 2 seconds.",
      },
      {
        title: "OPEN_METADATA_FUSION",
        description:
          "Aggregates live point-of-interest data via OpenStreetMap Overpass API.",
      },
      {
        title: "DYNAMIC_ITINERARY_GENERATION",
        description:
          "Constructs day-by-day schedules optimized for proximity and 'flow'.",
      },
    ],
    outcome:
      "Reduced planning time from hours to minutes. By wrapping a simple conversational AI in a structured UI, it makes Generative AI immediately useful for complex logistics. The integration of Maps and AI text generation creates a 'Spatial Intelligence' experience for travelers.",
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
    order: 2,
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
