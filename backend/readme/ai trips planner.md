# 🌍 AI Trip Planner

> **A full-stack, AI-powered travel planning platform built with the MERN stack**

AI Trip Planner is an intelligent travel companion that leverages **Google Gemini AI** to generate personalized itineraries, integrates real-time maps, and provides a seamless user experience for planning, managing, and exploring trips.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://trips-planner-blue.vercel.app)
[![Backend](https://img.shields.io/badge/backend-render-blue)](https://trips-planner.onrender.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## ✨ Features

### 🤖 AI-Powered Trip Planning
- **Smart Itinerary Generation**: Generate custom day-by-day itineraries using Google Gemini AI
- **Personalized Recommendations**: Based on destination, dates, budget, travel style, interests, and group size
- **Intelligent Optimization**: AI-powered route optimization and activity scheduling
- **Budget Planning**: Automatic cost estimation for activities, meals, and transportation
- **Multi-day Support**: Plan trips from 1 to 30+ days with detailed daily schedules

### 🗺️ Interactive Maps & Navigation
- **Real-time Location Services**: Integrated with Google Maps and OpenStreetMap
- **Route Planning**: Get directions and optimize travel routes
- **Nearby Places**: Discover attractions, restaurants, and points of interest
- **Location Saving**: Save favorite destinations and create custom location lists
- **Geocoding**: Convert addresses to coordinates and vice versa

### 👤 User Management & Authentication
- **Secure Authentication**: JWT-based dual-token system (access + refresh tokens)
- **User Profiles**: Customizable profiles with preferences and travel history
- **Session Management**: Persistent login with "Remember Me" functionality
- **Account Security**: Password hashing, account lockout after failed attempts, and rate limiting
- **Multi-device Support**: Manage sessions across multiple devices

### 📱 Modern User Interface
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **Dark Mode Ready**: Full dark mode support (planned)
- **Interactive Components**: Dynamic forms, modals, tooltips, and notifications
- **Real-time Updates**: Live notifications via Socket.IO
- **PDF Export**: Download trip itineraries as beautifully formatted PDFs

### 🔐 Security & Performance
- **Enterprise-grade Security**: Helmet.js, CORS, XSS protection, and input sanitization
- **Rate Limiting**: Prevent abuse with intelligent rate limiting
- **Data Validation**: Comprehensive input validation on both client and server
- **Error Handling**: Graceful error handling with detailed logging
- **Performance Optimization**: Compression, caching, and optimized database queries

---

## 🛠️ Tech Stack

### **Frontend**
| Technology | Purpose |
|-----------|---------|
| **React 18** | UI framework with hooks and context |
| **React Router v6** | Client-side routing |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Smooth animations and transitions |
| **React Query (TanStack)** | Data fetching, caching, and state management |
| **React Hook Form** | Performant form handling with validation |
| **Axios** | HTTP client with interceptors |
| **Socket.IO Client** | Real-time bidirectional communication |
| **React Icons** | Comprehensive icon library |
| **Chart.js** | Data visualization |
| **Leaflet / Google Maps** | Interactive maps |
| **jsPDF** | PDF generation |

### **Backend**
| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web application framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | MongoDB object modeling |
| **JWT** | Secure authentication tokens |
| **bcryptjs** | Password hashing |
| **Google Gemini AI** | AI-powered itinerary generation |
| **Socket.IO** | Real-time communication |
| **Winston** | Advanced logging |
| **Helmet** | Security headers |
| **Express Validator** | Input validation |
| **Morgan** | HTTP request logging |
| **Compression** | Response compression |
| **PM2** | Process management (production) |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v6.0.0 or higher) or **yarn**
- **MongoDB** - Local installation or [MongoDB Atlas](https://www.mongodb.com/atlas) account
- **Git** - [Download](https://git-scm.com/)

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/ladHarsh/AI-TripPlanner.git
cd AI-TripPlanner
```

### 2. Install Dependencies

```bash
# Install all dependencies (root, server, and client)
npm run install-all

# Or install manually
npm install                    # Root dependencies
cd server && npm install       # Server dependencies
cd ../client && npm install    # Client dependencies
```

### 3. Environment Configuration

Create a `.env` file in the `server` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/ai-trip-planner
MONGODB_URI_PROD=your_mongodb_atlas_uri_here

# JWT Secrets (Generate strong random strings)
JWT_ACCESS_SECRET=your_super_secure_access_secret_min_32_chars
JWT_REFRESH_SECRET=your_super_secure_refresh_secret_min_32_chars
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_EXPIRY=7d

# Google Gemini AI (Required for AI features)
GEMINI_API_KEY=your_gemini_api_key_here

# CORS Configuration
ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
CLIENT_URL=http://localhost:3000

# Optional: Google Maps API
GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Email Configuration (Optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=AI Trip Planner <noreply@yourdomain.com>

# Security
BCRYPT_ROUNDS=14
MAX_LOGIN_ATTEMPTS=5
LOCKOUT_DURATION=900000

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

Create a `.env` file in the `client` directory (optional):

```env
# API Configuration
REACT_APP_API_URL=http://localhost:5000/api

# Optional: Google Maps
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

### 4. Get API Keys

#### **Google Gemini AI** (Required - FREE)
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key and add to `.env`: `GEMINI_API_KEY=your_key_here`
5. Free tier includes 60 requests/minute

#### **MongoDB Atlas** (Recommended for Production)
1. Visit [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Get your connection string
4. Add to `.env`: `MONGODB_URI_PROD=mongodb+srv://...`

#### **Google Maps API** (Optional)
1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Maps JavaScript API
3. Create credentials (API Key)
4. Add to `.env`: `GOOGLE_MAPS_API_KEY=your_key_here`

---

## 💻 Running the Application

### Development Mode

**Option 1: Run both frontend and backend simultaneously** (Recommended)
```bash
# From the root directory
npm run dev
```

**Option 2: Run separately**
```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm start
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **Health Check**: http://localhost:5000/api/health

### Production Build

```bash
# Build the client
cd client
npm run build

# Start the server
cd ../server
NODE_ENV=production npm start
```

---

## 📁 Project Structure

```
AI-TripPlanner/
├── client/                          # React Frontend
│   ├── public/
│   │   ├── index.html              # HTML template
│   │   └── manifest.json           # PWA manifest
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   │   ├── auth/              # Login, Register, ProtectedRoute
│   │   │   ├── common/            # Button, Input, Modal, Card, etc.
│   │   │   ├── layout/            # Header, Footer, Sidebar, Navbar
│   │   │   ├── maps/              # Map components
│   │   │   └── trip/              # Trip-related components
│   │   ├── contexts/              # React Context providers
│   │   │   ├── AuthContext.js    # Authentication state
│   │   │   └── NotificationContext.js  # Real-time notifications
│   │   ├── hooks/                 # Custom React hooks
│   │   │   ├── useApi.js         # API integration hook
│   │   │   ├── useAuth.js        # Authentication hook
│   │   │   └── useDebounce.js    # Debounce hook
│   │   ├── pages/                 # Main application pages
│   │   │   ├── Home.js           # Landing page
│   │   │   ├── Dashboard.js      # User dashboard
│   │   │   ├── TripPlanner.js    # AI trip planning interface
│   │   │   ├── TripDetails.js    # Trip detail view
│   │   │   ├── Maps.js           # Interactive maps
│   │   │   ├── Login.js          # Login page
│   │   │   ├── Register.js       # Registration page
│   │   │   └── Profile.js        # User profile
│   │   ├── services/              # API service layer
│   │   │   └── api.js            # Axios configuration & API calls
│   │   ├── App.js                # Main app component
│   │   ├── index.js              # React entry point
│   │   └── index.css             # Global styles
│   ├── package.json
│   └── tailwind.config.js
│
├── server/                          # Node.js Backend
│   ├── controllers/                # Route controllers
│   │   ├── aiController.js        # AI itinerary generation
│   │   ├── authControllerNew.js   # Authentication logic
│   │   ├── mapsController.js      # Maps & location services
│   │   └── tripController.js      # Trip CRUD operations
│   ├── middleware/                 # Express middleware
│   │   ├── auth.js               # JWT authentication
│   │   ├── logging.js            # Winston logger
│   │   └── security.js           # Security headers & rate limiting
│   ├── models/                     # Mongoose schemas
│   │   ├── User.js               # User model
│   │   └── Trip.js               # Trip model
│   ├── routes/                     # Express routes
│   │   ├── ai.js                 # AI endpoints
│   │   ├── authNew.js            # Auth endpoints
│   │   ├── maps.js               # Maps endpoints
│   │   ├── trips.js              # Trip endpoints
│   │   └── users.js              # User endpoints
│   ├── scripts/                    # Utility scripts
│   ├── services/                   # External service integrations
│   │   └── geminiService.js      # Google Gemini AI integration
│   ├── utils/                      # Helper utilities
│   │   └── tokens.js             # JWT token management
│   ├── server.js                  # Express app & server setup
│   ├── healthcheck.js            # Health check endpoint
│   ├── .env.example              # Environment template
│   └── package.json
│
├── .gitignore                      # Git ignore rules
├── package.json                    # Root package.json
└── README.md                       # This file
```

---

## 🔌 API Endpoints

### Authentication (`/api/auth`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/register` | Register new user | ❌ |
| POST | `/login` | User login | ❌ |
| POST | `/refresh` | Refresh access token | ❌ |
| POST | `/logout` | User logout | ✅ |
| POST | `/logout-all` | Logout from all devices | ✅ |
| GET | `/me` | Get current user profile | ✅ |
| PUT | `/profile` | Update user profile | ✅ |
| POST | `/change-password` | Change password | ✅ |

### AI Trip Planning (`/api/ai`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/generate-itinerary` | Generate AI itinerary | ✅ |
| POST | `/optimize-itinerary` | Optimize existing itinerary | ✅ |
| POST | `/travel-suggestions` | Get travel suggestions | ✅ |
| POST | `/destination-insights` | Get destination insights | ✅ |
| GET | `/recommendations` | Get personalized recommendations | ✅ |
| POST | `/recommendations/refresh` | Refresh recommendations | ✅ |

### Trip Management (`/api/trips`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all user trips | ✅ |
| POST | `/` | Create new trip | ✅ |
| GET | `/:id` | Get trip by ID | ✅ |
| PUT | `/:id` | Update trip | ✅ |
| DELETE | `/:id` | Delete trip | ✅ |
| GET | `/public` | Get public trips | ❌ |
| POST | `/:id/clone` | Clone trip | ✅ |
| GET | `/stats` | Get trip statistics | ✅ |
| GET | `/upcoming` | Get upcoming trips | ✅ |
| GET | `/past` | Get past trips | ✅ |
| GET | `/recent` | Get recent trips | ✅ |

### Maps & Location (`/api/maps`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/places/nearby` | Get nearby places | ✅ |
| GET | `/places/search` | Search places | ✅ |
| GET | `/directions` | Get directions | ✅ |
| GET | `/geocode` | Geocode address | ✅ |
| GET | `/reverse-geocode` | Reverse geocode | ✅ |
| POST | `/save-location` | Save location | ✅ |
| GET | `/saved-locations` | Get saved locations | ✅ |
| DELETE | `/saved-locations/:id` | Delete saved location | ✅ |

### User Management (`/api/users`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all users (admin) | ✅ Admin |
| GET | `/:id` | Get user by ID | ✅ |
| PUT | `/:id` | Update user | ✅ |
| DELETE | `/:id` | Delete user | ✅ |
| GET | `/stats` | Get user statistics | ✅ |
| PUT | `/preferences` | Update preferences | ✅ |
| POST | `/avatar` | Upload avatar | ✅ |

---

## 🎨 Key Features Explained

### AI Itinerary Generation
The AI Trip Planner uses Google's Gemini AI to create intelligent, personalized itineraries:

```javascript
// Example request to generate itinerary
POST /api/ai/generate-itinerary
{
  "destination": "Paris, France",
  "startDate": "2024-06-01",
  "endDate": "2024-06-05",
  "budget": 2000,
  "currency": "USD",
  "travelers": 2,
  "interests": ["culture", "food", "history"],
  "travelStyle": "moderate",
  "accommodationType": "hotel"
}

// AI generates day-by-day itinerary with:
// - Activities with timing and duration
// - Restaurant recommendations
// - Transportation suggestions
// - Cost estimates
// - Location coordinates
// - Safety tips
```

### Dual-Token Authentication
Secure authentication using access and refresh tokens:

- **Access Token**: Short-lived (15 minutes), stored in memory
- **Refresh Token**: Long-lived (7 days), stored in HTTP-only cookie
- **Automatic Refresh**: Seamless token renewal without user intervention
- **Multi-device Support**: Track and manage sessions across devices

### Real-time Notifications
Socket.IO integration for live updates:

- Trip updates and changes
- Booking confirmations
- System notifications
- Multi-user collaboration (planned)

---

## 🔒 Security Features

- **JWT Authentication**: Secure, stateless authentication
- **Password Hashing**: bcryptjs with 14 salt rounds
- **Account Lockout**: Automatic lockout after 5 failed login attempts
- **Rate Limiting**: Prevent brute force and DDoS attacks
- **Input Validation**: Server-side validation using express-validator
- **XSS Protection**: Sanitize user inputs
- **CORS**: Configured for specific origins
- **Helmet**: Security headers
- **MongoDB Sanitization**: Prevent NoSQL injection
- **HPP Protection**: HTTP Parameter Pollution prevention

---

## 🚀 Deployment

### Frontend (Vercel)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Set **Root Directory**: `client`
   - Set **Build Command**: `npm run build`
   - Set **Output Directory**: `build`
   - Add environment variable:
     - `REACT_APP_API_URL`: Your backend URL (e.g., `https://your-api.onrender.com/api`)

3. **Deploy**
   - Vercel will automatically deploy on every push to main

### Backend (Render)

1. **Create Web Service on Render**
   - Connect your GitHub repository
   - Set **Root Directory**: `server`
   - Set **Build Command**: `npm install`
   - Set **Start Command**: `node server.js`

2. **Environment Variables**
   Add all required environment variables from `.env.example`:
   ```
   NODE_ENV=production
   MONGODB_URI=your_mongodb_atlas_uri
   JWT_ACCESS_SECRET=your_secret
   JWT_REFRESH_SECRET=your_secret
   GEMINI_API_KEY=your_key
   ALLOWED_ORIGINS=https://your-vercel-app.vercel.app
   CLIENT_URL=https://your-vercel-app.vercel.app
   ```

3. **Deploy**
   - Render will automatically deploy

### Database (MongoDB Atlas)

1. **Create Cluster**
   - Sign up at [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a free M0 cluster

2. **Network Access**
   - Add IP: `0.0.0.0/0` (allow from anywhere)

3. **Database User**
   - Create a database user with read/write permissions

4. **Connection String**
   - Get connection string and add to Render environment variables

---

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run client tests
cd client && npm test

# Run server tests
cd server && npm test
```

---

## 📊 Performance Optimization

- **Code Splitting**: React lazy loading for routes
- **Image Optimization**: Lazy loading and responsive images
- **Caching**: React Query for intelligent data caching
- **Compression**: Gzip compression on server responses
- **Database Indexing**: Optimized MongoDB queries
- **CDN**: Static assets served via CDN (Vercel)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Coding Standards
- Follow ESLint configuration
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed

---

## 🐛 Known Issues & Roadmap

### Known Issues
- [ ] PDF export needs styling improvements
- [ ] Mobile responsiveness on some components
- [ ] Dark mode implementation pending

### Roadmap
- [ ] Payment integration (Stripe)
- [ ] Hotel booking integration
- [ ] Flight booking integration
- [ ] Multi-language support
- [ ] Offline mode with PWA
- [ ] Social sharing features
- [ ] Trip collaboration (multiple users)
- [ ] Admin dashboard
- [ ] Analytics and insights

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Harsh Lad**
- GitHub: [@ladHarsh](https://github.com/ladHarsh)
- Email: harshlad.dev@gmail.com

---

## 🙏 Acknowledgments

- **Google Gemini AI** for intelligent itinerary generation
- **MongoDB** for flexible database solutions
- **Vercel** for seamless frontend hosting
- **Render** for reliable backend hosting
- **React** and **Node.js** communities for excellent documentation
- All open-source contributors

---

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/ladHarsh/AI-TripPlanner/issues) page
2. Create a new issue with detailed information
3. Contact: harshlad.dev@gmail.com

---

## ⭐ Show Your Support

If you find this project helpful, please give it a ⭐ on GitHub!

---

**Happy Traveling! 🌍✈️🗺️**

Made with ❤️ by Harsh Lad
