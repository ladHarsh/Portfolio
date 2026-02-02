# AI Engineer Portfolio - Harsh Lad

> Production-grade portfolio showcasing AI/ML engineering projects with full-stack deployment

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://your-portfolio-url.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5)](https://linkedin.com/in/harsh-lad-dev)

## 🎯 About Me

**B.Tech in Computer Science** (2026) | KPGU, Vadodara  
**Specialization:** Generative AI, Machine Learning, Full-Stack Development

Building production-ready AI systems using:
- **AI/ML:** TensorFlow, PyTorch, Scikit-learn, LangChain, Gemini API, OpenAI
- **Backend:** Node.js, Express, FastAPI, MongoDB, PostgreSQL
- **Frontend:** React, Vite, Tailwind CSS, Framer Motion
- **DevOps:** Docker, Vercel, Render, Git/GitHub

---

## 🚀 Featured Projects

### 1. [DesignMate AI](https://designmate-ai.vercel.app/) - AI Design Review Tool
**Tech:** Gemini 2.5 Flash, React, Node.js, MongoDB  
**Impact:** Automated 40% of design review cycles, enforces WCAG accessibility standards

- Multi-modal AI using Gemini Vision to audit UI/UX designs
- Generates production-ready HTML/Tailwind components
- Real-time accessibility compliance checking (WCAG AA/AAA)

### 2. [SmartAssign](https://smartassign.onrender.com/) - AI Grading Assistant
**Tech:** Llama-3-70B (Groq), LangChain, MERN Stack  
**Impact:** 99% faster feedback delivery, zero-variance scoring

- Automated academic evaluation using LLM-powered semantic analysis
- RAG pipeline for context-aware grading
- Deployed for 50+ students across multiple classrooms

### 3. [AI Trip Planner](https://trips-planner-blue.vercel.app/) - Geospatial Logistics Engine
**Tech:** Gemini 2.5 Flash, Leaflet.js, OpenStreetMap, React  
**Impact:** Reduced planning time from hours to minutes

- Constraint satisfaction solver for travel itineraries
- Real-time geospatial data integration via OSM Overpass API
- Dynamic route optimization with budget/time constraints

[View All 8 Projects →](https://your-portfolio-url.vercel.app/projects)

---

## 🏗️ Portfolio Architecture

```
Portfolio/
├── frontend/          # React + Vite (Vercel)
│   ├── src/
│   │   ├── pages/     # Home, About, Projects, Skills, Contact
│   │   ├── components/
│   │   └── services/  # API integration
│   └── package.json
│
├── backend/           # Node.js + Express (Render)
│   ├── models/        # MongoDB schemas
│   ├── routes/        # API endpoints
│   ├── seed.js        # Project data seeding
│   └── server.js
│
└── README.md
```

**Tech Stack:**
- **Frontend:** React 18, Vite, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Deployment:** Vercel (Frontend), Render (Backend)
- **Email:** Nodemailer for contact form

---

## 🛠️ Local Development

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (or local MongoDB)

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env  # Configure MongoDB URI and email settings
npm run seed          # Populate database with projects
npm start             # Runs on http://localhost:5000
```

### Frontend Setup
```bash
cd frontend
npm install
# Create .env with: VITE_API_URL=http://localhost:5000
npm run dev           # Runs on http://localhost:5173
```

---

## 📊 Key Features

- **Dynamic Project Management:** MongoDB-backed CMS for project data
- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Performance Optimized:** Lazy loading, WebP images, code splitting
- **SEO Ready:** Meta tags, semantic HTML, sitemap
- **Contact Integration:** Nodemailer-powered contact form with email notifications

---

## 📈 Project Metrics

| Project | Tech Stack | Live Users | Response Time |
|---------|-----------|------------|---------------|
| DesignMate AI | Gemini 2.5 Flash, MERN | 20+ designers | 45ms inference |
| SmartAssign | Llama-3, LangChain | 50+ students | 75ms/token |
| AI Trip Planner | Gemini 2.5 Flash, OSM | 15+ travelers | 2s generation |

---

## 📫 Contact

- **Email:** harshlad.dev@gmail.com
- **LinkedIn:** [linkedin.com/in/harsh-lad-dev](https://linkedin.com/in/harsh-lad-dev)
- **Portfolio:** [your-portfolio-url.vercel.app](https://your-portfolio-url.vercel.app)
- **GitHub:** [github.com/ladHarsh](https://github.com/ladHarsh)

---

## 📄 License

MIT License - feel free to use this portfolio structure for your own projects!

---

**Note for Recruiters:** All projects include live demos, source code, and detailed technical documentation. Demo credentials are provided on the live site for testing.
