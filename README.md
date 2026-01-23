# 🚀 Professional Neural Portfolio

A high-performance, AI-driven portfolio website built with the MERN stack.

## 🏗 Project Structure

- `frontend/`: React + Vite application (deployed to Vercel)
- `backend/`: Node.js + Express API (deployed to Render/Railway)

## 🛠 Tech Stack

- **Frontend**: React 18, Tailwind CSS, Framer Motion, Lucide Icons, Axios.
- **Backend**: Node.js, Express, MongoDB (Mongoose), Nodemailer.
- **AI Integration**: Gemini Vision (DesignMate AI), Llama-3 (SmartAssign), etc.

## 🚀 Deployment Instructions

### 1. Backend (Render / Railway)
- Set up a new Web Service pointing to the `backend/` directory.
- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`
- **Environment Variables**:
  - `MONGODB_URI`: Your MongoDB connection string.
  - `PORT`: 5000 (standard).
  - `EMAIL_HOST`, `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO`: For contact form notifications.

### 2. Frontend (Vercel)
- Set up a new Project pointing to the `frontend/` directory.
- Root Directory: `frontend`
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- **Environment Variables**:
  - `VITE_API_URL`: Your deployed backend URL (e.g., `https://your-api.onrender.com`).

## 🧹 Maintenance Scripts

- **Image Optimization**: Run `node backend/optimize_images.js` to generate responsive WebP variants.
- **Database Seeding**: Run `node backend/seed.js` to clear and re-populate the projects database.

## 📝 License

MIT
