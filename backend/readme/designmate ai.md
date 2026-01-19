# DesignMate AI 🎨🤖

> **AI-Powered Design Intelligence Platform** - Revolutionizing UI/UX design with Google Gemini AI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green.svg)](https://www.mongodb.com/)
[![AI](https://img.shields.io/badge/AI-Google%20Gemini-orange.svg)](https://ai.google.dev/)

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Technology Stack](#️-technology-stack)
- [Project Architecture](#-project-architecture)
- [Quick Start](#-quick-start)
- [Detailed Features](#-detailed-features)
- [API Documentation](#-api-documentation)
- [Database Models](#-database-models)
- [Authentication & Security](#-authentication--security)
- [Deployment](#-deployment)
- [Development Guide](#-development-guide)
- [Contributing](#-contributing)

## 📋 Overview

**DesignMate AI** is a comprehensive, full-stack design intelligence platform that leverages the power of Google Gemini AI to provide intelligent design recommendations, automated analysis, and smart suggestions for UI/UX designers. Built with the MERN stack (MongoDB, Express.js, React, Node.js), it offers a seamless experience for designers to enhance their workflow with AI-powered tools.

### 🎯 Mission

To empower designers with cutting-edge AI technology that streamlines the design process, improves accessibility, and delivers professional-grade design recommendations instantly.

## ✨ Key Features

### 🔤 **AI Font Suggestions**
- Smart typography recommendations with perfect font pairings
- Project-specific suggestions (Website, Mobile App, Logo, Branding)
- Tone-based recommendations (Modern, Professional, Elegant, Playful, Bold)
- Brand personality analysis
- WCAG accessibility compliance (A/AA/AAA levels)
- Ready-to-use CSS code with Google Fonts integration
- Live font previews with customizable text

### 🎨 **Color Palette Generator**
- AI-powered color scheme generation
- Multiple palette types (Monochromatic, Analogous, Complementary, Triadic, Tetradic, Split-Complementary)
- Mood-based generation (Calm, Energetic, Professional, Playful, Elegant, Bold, Minimal, Warm, Cool)
- Industry-specific palettes (Technology, Healthcare, Finance, Education, Retail, Food, Travel, Fashion, Entertainment)
- Advanced gradient generation (Linear, Radial, Glass morphism effects)
- Color accessibility testing (WCAG AA/AAA compliance)
- Contrast ratio calculations
- Export formats (CSS, SCSS, JSON, Tailwind)
- Color harmony analysis

### 🔍 **UX Audit Tool**
- Automated design analysis with image upload support
- Comprehensive accessibility compliance checking
- Usability recommendations and best practices
- Visual design critique with actionable insights
- Performance optimization suggestions
- Category-based scoring (Accessibility, Usability, Visual Design, Performance, Content)
- Quick wins and critical issues identification
- Downloadable PDF reports
- Executive summary with overall score
- Time-to-fix estimates

### 📐 **Layout Generator**
- AI-powered layout structure generation
- Multiple layout types (Landing Page, Dashboard, E-commerce, Blog, Portfolio, Web App)
- Style variations (Modern, Minimalist, Bold, Professional, Creative, Elegant)
- Component-based generation (Hero, Navigation, Footer, Features, Testimonials, CTA, Gallery, Pricing, FAQ)
- Industry-specific layouts
- Target audience optimization
- Color scheme integration
- Responsive design patterns
- Live HTML/CSS preview

### 📈 **Design Trends**
- Current design trend analysis and tracking
- Industry-specific trend insights
- Visual trend examples
- Best practice recommendations

### 👤 **User Management**
- Secure authentication with JWT
- User profiles with preferences
- Usage tracking and analytics
- Subscription-based access control (Free, Pro, Enterprise)
- Usage limits per plan
- Activity history

## 🛠️ Technology Stack

### **Frontend** (Client)

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2.0 | Core UI library |
| **React Router DOM** | 6.20.1 | Client-side routing |
| **Tailwind CSS** | 3.3.6 | Utility-first CSS framework |
| **Framer Motion** | 10.16.16 | Animation library |
| **Axios** | 1.6.2 | HTTP client |
| **React Hook Form** | 7.48.2 | Form state management |
| **React Hot Toast** | 2.4.1 | Toast notifications |
| **Recharts** | 2.8.0 | Data visualization |
| **React Colorful** | 5.6.1 | Color picker |
| **React Dropzone** | 14.2.3 | File upload |
| **React Markdown** | 9.0.1 | Markdown rendering |
| **Lucide React** | 0.294.0 | Icon library |
| **Heroicons** | 2.0.18 | Icon library |
| **Google Generative AI** | 0.24.1 | AI integration |
| **html2canvas** | 1.4.1 | Screenshot generation |

### **Backend** (Server)

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | - | Runtime environment |
| **Express.js** | 4.18.2 | Web framework |
| **MongoDB** | - | NoSQL database |
| **Mongoose** | 8.0.3 | MongoDB ODM |
| **JWT** | 9.0.2 | Authentication |
| **bcryptjs** | 2.4.3 | Password hashing |
| **Google Generative AI** | 0.24.1 | AI integration |
| **Multer** | 1.4.5 | File upload middleware |
| **Sharp** | 0.33.0 | Image processing |
| **Helmet** | 7.1.0 | Security headers |
| **CORS** | 2.8.5 | Cross-origin resource sharing |
| **Express Rate Limit** | 7.1.5 | Rate limiting |
| **Cookie Parser** | 1.4.7 | Cookie parsing |
| **Compression** | 1.7.4 | Response compression |
| **PDFKit** | 0.17.2 | PDF generation |
| **Cheerio** | 1.1.2 | HTML parsing |
| **Cloudinary** | 1.41.0 | Cloud storage |
| **Socket.io** | 4.7.4 | Real-time communication |
| **Joi** | 17.11.0 | Validation |
| **Zod** | 3.25.76 | Schema validation |

## 🏗️ Project Architecture

### **Directory Structure**

```
DesignMate/
│
├── client/                          # React Frontend Application
│   ├── public/                      # Static files
│   │   ├── index.html              # HTML template
│   │   └── favicon.ico             # Favicon
│   │
│   ├── src/                        # Source code
│   │   ├── components/             # Reusable components
│   │   │   ├── Layout.js          # Main layout wrapper
│   │   │   └── LivePreview.jsx    # Live preview component
│   │   │
│   │   ├── contexts/              # React contexts
│   │   │   └── AuthContext.js     # Authentication context
│   │   │
│   │   ├── pages/                 # Page components
│   │   │   ├── Home.js           # Landing page
│   │   │   ├── Dashboard.js      # User dashboard
│   │   │   ├── Login.js          # Login page
│   │   │   ├── Register.js       # Registration page
│   │   │   ├── Profile.js        # User profile
│   │   │   ├── ColorPalette.js   # Color palette generator
│   │   │   ├── FontSuggestions.js # Font suggestions tool
│   │   │   ├── LayoutGenerator.js # Layout generator
│   │   │   ├── UXAudit.js        # UX audit tool
│   │   │   ├── DesignTrends.js   # Design trends
│   │   │   └── NotFound.js       # 404 page
│   │   │
│   │   ├── services/             # API services
│   │   │   └── api.js           # API client
│   │   │
│   │   ├── App.js               # Main app component
│   │   ├── index.js             # Entry point
│   │   ├── index.css            # Global styles
│   │   └── mobile-responsive.css # Mobile styles
│   │
│   ├── package.json             # Frontend dependencies
│   └── tailwind.config.js       # Tailwind configuration
│
├── server/                       # Express Backend API
│   ├── middleware/              # Custom middleware
│   │   ├── auth.js             # Authentication middleware
│   │   └── errorHandler.js     # Error handling
│   │
│   ├── models/                 # Mongoose models
│   │   ├── User.js            # User schema
│   │   ├── ColorPalette.js    # Color palette schema
│   │   ├── Layout.js          # Layout schema
│   │   └── GeneratedSite.js   # Generated site schema
│   │
│   ├── routes/                # API routes
│   │   ├── auth.js           # Authentication routes
│   │   ├── users.js          # User routes
│   │   ├── colors.js         # Color palette routes
│   │   ├── fonts.js          # Font suggestion routes
│   │   ├── layout.js         # Layout generation routes
│   │   ├── audit.js          # UX audit routes
│   │   └── trends.js         # Design trends routes
│   │
│   ├── services/             # Business logic services
│   │   ├── aiService.js     # Google Gemini AI integration
│   │   ├── paletteService.js # Color palette logic
│   │   └── scraperService.js # Web scraping utilities
│   │
│   ├── uploads/             # File upload directory
│   ├── index.js             # Server entry point
│   ├── package.json         # Backend dependencies
│   └── .env.example         # Environment variables template
│
├── package.json             # Root package file
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

### **Application Flow**

```
User Request → React Router → Page Component → API Service → 
Express Route → Middleware (Auth/Validation) → Controller → 
AI Service (Gemini) → Database (MongoDB) → Response → 
State Update → UI Render
```

## 🚀 Quick Start

### **Prerequisites**

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (local or cloud) - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Google Gemini API Key** - [Get API Key](https://ai.google.dev/)
- **npm** or **yarn** package manager

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/ladHarsh/Designmate-AI.git
   cd DesignMate
   ```

2. **Install all dependencies**

   ```bash
   # Install root, client, and server dependencies
   npm run install-all
   ```

3. **Configure environment variables**

   **Server Configuration** (`server/.env`):

   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/designmate-ai
   # or MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/designmate-ai

   # Authentication
   JWT_SECRET=your_super_secret_jwt_key_here
   JWT_EXPIRE=30d

   # Google Gemini AI
   GEMINI_API_KEY=your_gemini_api_key_here
   GEMINI_MODEL=gemini-2.5-flash
   GEMINI_FALLBACK_MODEL=gemini-2.5-flash

   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # CORS
   CORS_ORIGIN=http://localhost:3000

   # Rate Limiting
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=100

   # File Upload
   MAX_FILE_SIZE=10485760
   ```

   **Client Configuration** (`client/.env`):

   ```env
   REACT_APP_API_URL=http://localhost:5000
   REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the application**

   ```bash
   # Development mode (runs both client and server concurrently)
   npm run dev

   # Or run separately in different terminals:
   npm run server  # Start backend server (http://localhost:5000)
   npm run client  # Start frontend app (http://localhost:3000)
   ```

5. **Access the application**
   - **Frontend**: http://localhost:3000
   - **Backend API**: http://localhost:5000
   - **Health Check**: http://localhost:5000/health

## 🎯 Detailed Features

### **1. AI Font Suggestions**

The Font Suggestions tool uses Google Gemini AI to generate intelligent typography recommendations.

**Input Parameters:**
- **Project Type**: Website, Mobile App, Logo, Branding, Print, Presentation, Social Media
- **Tone**: Modern, Professional, Elegant, Playful, Bold, Minimal, Vintage, Futuristic
- **Brand Personality**: Innovative, Trustworthy, Friendly, Luxurious, Energetic, Calm, Creative, Traditional
- **Accessibility Level**: WCAG A, AA, or AAA compliance
- **Include Pairings**: Generate complementary font combinations
- **Preview Text**: Custom text for live preview

**Output:**
- 3-5 curated font suggestions
- Font family names with Google Fonts links
- Usage guidelines (Headings, Body, Accents)
- Font weights and styles
- Character spacing recommendations
- Line height suggestions
- Ready-to-use CSS code
- Accessibility compliance notes
- Best use cases and reasoning

**API Endpoint:**
```
POST /api/fonts/suggest
```

### **2. Color Palette Generator**

Advanced color palette generation with AI-powered color theory and accessibility testing.

**Input Parameters:**
- **Prompt**: Natural language description of desired colors
- **Mood**: Calm, Energetic, Professional, Playful, Elegant, Bold, Minimal, Warm, Cool
- **Industry**: Technology, Healthcare, Finance, Education, Retail, Food, Travel, Fashion, Entertainment
- **Palette Type**: Monochromatic, Analogous, Complementary, Triadic, Tetradic, Split-Complementary

**Output:**
- Primary, Secondary, Accent colors
- Neutral color variations
- Background and Text colors
- RGB, HEX, and HSL values
- Advanced gradients (Linear, Radial, Glass morphism)
- Color combinations and harmonies
- Accessibility scores (WCAG AA/AAA)
- Contrast ratios
- Export formats (CSS, SCSS, JSON, Tailwind)

**Features:**
- Live color preview
- Color picker integration
- Copy to clipboard (HEX, RGB, HSL)
- Gradient generator
- Accessibility checker
- Color harmony visualization

**API Endpoint:**
```
POST /api/colors/generate
```

### **3. UX Audit Tool**

Comprehensive UX analysis with image upload support and detailed reporting.

**Input Parameters:**
- **Image Upload**: Design screenshot (PNG, JPG, JPEG, WebP)
- **Description**: Text description of the design
- **Context**: Website, Mobile App, Dashboard, E-commerce, Landing Page
- **Focus Areas**: Accessibility, Usability, Visual Design, Performance, Content, Navigation

**Output:**
- **Executive Summary**:
  - Overall score (0-100)
  - Total issues count
  - Critical issues count
  - Time to implement fixes
  - Key recommendations

- **Category Scores**:
  - Accessibility (0-100)
  - Usability (0-100)
  - Visual Design (0-100)
  - Performance (0-100)
  - Content (0-100)

- **Detailed Analysis**:
  - Issues list with severity (Critical, High, Medium, Low)
  - Issue descriptions and impact
  - Actionable recommendations
  - Quick wins (easy fixes with high impact)
  - Critical issues (must-fix items)

- **Downloadable PDF Report**

**API Endpoint:**
```
POST /api/audit/analyze
```

### **4. Layout Generator**

AI-powered layout structure generation with live preview.

**Input Parameters:**
- **Prompt**: Natural language description
- **Layout Type**: Landing Page, Dashboard, E-commerce, Blog, Portfolio, Web App
- **Style**: Modern, Minimalist, Bold, Professional, Creative, Elegant
- **Components**: Hero, Navigation, Footer, Features, Testimonials, CTA, Gallery, Pricing, FAQ
- **Color Scheme**: Predefined or custom colors
- **Industry**: Target industry
- **Target Audience**: Demographics and preferences

**Output:**
- Complete HTML structure
- CSS styling
- Component breakdown
- Layout description
- Design rationale
- Responsive design patterns
- Live preview

**API Endpoint:**
```
POST /api/layout/generate
```

## 📖 API Documentation

### **Base URL**
```
Development: http://localhost:5000/api
Production: https://your-domain.com/api
```

### **Authentication Endpoints**

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "profession": "UI Designer",
  "experience": "Intermediate"
}

Response: 201 Created
{
  "success": true,
  "data": {
    "user": { ... },
    "token": "jwt_token_here"
  }
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}

Response: 200 OK
{
  "success": true,
  "data": {
    "user": { ... },
    "token": "jwt_token_here"
  }
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer {token}

Response: 200 OK
{
  "success": true,
  "data": {
    "user": { ... }
  }
}
```

#### Logout
```http
POST /api/auth/logout
Authorization: Bearer {token}

Response: 200 OK
{
  "success": true,
  "message": "Logged out successfully"
}
```

### **Font Suggestions Endpoints**

#### Generate Font Suggestions
```http
POST /api/fonts/suggest
Authorization: Bearer {token}
Content-Type: application/json

{
  "prompt": "Modern tech startup website",
  "projectType": "Website",
  "tone": "Modern",
  "brandPersonality": ["Innovative", "Trustworthy"],
  "accessibilityLevel": "AA",
  "includePairings": true,
  "previewText": "The quick brown fox"
}

Response: 200 OK
{
  "success": true,
  "data": {
    "suggestions": [ ... ],
    "metadata": { ... }
  }
}
```

### **Color Palette Endpoints**

#### Generate Color Palette
```http
POST /api/colors/generate
Authorization: Bearer {token}
Content-Type: application/json

{
  "prompt": "Calm healthcare app",
  "mood": "calm",
  "industry": "healthcare",
  "paletteType": "analogous"
}

Response: 200 OK
{
  "success": true,
  "data": {
    "palette": {
      "colors": { ... },
      "gradients": { ... },
      "accessibility": { ... }
    }
  }
}
```

#### Get User Palettes
```http
GET /api/colors/user
Authorization: Bearer {token}

Response: 200 OK
{
  "success": true,
  "data": {
    "palettes": [ ... ]
  }
}
```

### **UX Audit Endpoints**

#### Analyze Design
```http
POST /api/audit/analyze
Authorization: Bearer {token}
Content-Type: multipart/form-data

FormData:
- image: File
- context: "Website"
- focusAreas: ["Accessibility", "Usability"]
- description: "Homepage design"

Response: 200 OK
{
  "success": true,
  "data": {
    "audit": {
      "executiveSummary": { ... },
      "categories": { ... },
      "issues": [ ... ],
      "quickWins": [ ... ],
      "criticalIssues": [ ... ]
    }
  }
}
```

#### Download Report
```http
GET /api/audit/report/:auditId
Authorization: Bearer {token}

Response: 200 OK (PDF file)
```

### **Layout Generator Endpoints**

#### Generate Layout
```http
POST /api/layout/generate
Authorization: Bearer {token}
Content-Type: application/json

{
  "prompt": "Modern SaaS landing page",
  "layoutType": "Landing Page",
  "style": "Modern",
  "componentsRequired": ["Hero", "Features", "CTA"],
  "colorScheme": "Blue and White",
  "industry": "Technology",
  "targetAudience": "Developers"
}

Response: 200 OK
{
  "success": true,
  "data": {
    "layout": {
      "html": "...",
      "css": "...",
      "components": [ ... ]
    }
  }
}
```

### **User Endpoints**

#### Get User Profile
```http
GET /api/users/profile
Authorization: Bearer {token}

Response: 200 OK
{
  "success": true,
  "data": {
    "user": { ... }
  }
}
```

#### Update Profile
```http
PUT /api/users/profile
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "John Doe Updated",
  "profession": "Product Designer",
  "preferences": { ... }
}

Response: 200 OK
{
  "success": true,
  "data": {
    "user": { ... }
  }
}
```

#### Get Usage Statistics
```http
GET /api/users/usage
Authorization: Bearer {token}

Response: 200 OK
{
  "success": true,
  "data": {
    "usage": {
      "layoutsGenerated": 15,
      "colorPalettesGenerated": 8,
      "fontSuggestions": 12,
      "auditsPerformed": 5
    }
  }
}
```

## 🗄️ Database Models

### **User Model**

```javascript
{
  name: String (required, max 50 chars),
  email: String (required, unique, lowercase),
  password: String (required, hashed, min 6 chars),
  avatar: String,
  role: Enum ['user', 'designer', 'admin'],
  profession: Enum ['UI Designer', 'UX Designer', 'Product Designer', 'Graphic Designer', 'Web Designer', 'Other'],
  experience: Enum ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
  preferences: {
    designStyle: Array of Strings,
    colorPreferences: Array of Strings,
    fontPreferences: Array of Strings,
    industries: Array of Strings
  },
  subscription: {
    plan: Enum ['free', 'pro', 'enterprise'],
    startDate: Date,
    endDate: Date,
    isActive: Boolean
  },
  usage: {
    layoutsGenerated: Number,
    colorPalettesGenerated: Number,
    fontSuggestions: Number,
    auditsPerformed: Number,
    lastActive: Date
  },
  isEmailVerified: Boolean,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### **ColorPalette Model**

```javascript
{
  user: ObjectId (ref: User),
  name: String (required, max 100 chars),
  description: String (max 500 chars),
  prompt: String (required),
  colors: {
    primary: { hex, rgb, hsl },
    secondary: { hex, rgb, hsl },
    accent: { hex, rgb, hsl },
    neutral: Array of { hex, rgb, hsl, name },
    background: { hex, rgb, hsl },
    text: { hex, rgb, hsl }
  },
  gradients: {
    primary: { linear, radial, usage },
    accent: { linear, radial, usage },
    neutral: { linear, usage },
    glass: { backdrop, border, usage },
    mix: { basePrimary, baseAccent },
    complementary: { linear, radial, usage }
  },
  paletteType: Enum ['monochromatic', 'analogous', 'complementary', 'triadic', 'tetradic', 'split-complementary', 'custom'],
  mood: Enum ['calm', 'energetic', 'professional', 'playful', 'elegant', 'bold', 'minimal', 'warm', 'cool'],
  industry: Enum ['technology', 'healthcare', 'finance', 'education', 'retail', 'food', 'travel', 'fashion', 'entertainment', 'other'],
  accessibility: {
    contrastRatio: Number,
    wcagAA: Boolean,
    wcagAAA: Boolean,
    colorBlindFriendly: Boolean
  },
  usage: {
    web: Boolean,
    mobile: Boolean,
    print: Boolean,
    branding: Boolean
  },
  tags: Array of Strings,
  isPublic: Boolean,
  likes: Array of ObjectId (ref: User),
  views: Number,
  downloads: Number,
  rating: {
    average: Number (0-5),
    count: Number
  },
  aiGenerated: Boolean,
  aiModel: String,
  aiConfidence: Number (0-1),
  status: Enum ['draft', 'published', 'archived'],
  version: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### **Layout Model**

```javascript
{
  user: ObjectId (ref: User),
  name: String (required),
  description: String,
  prompt: String (required),
  layoutType: Enum ['Landing Page', 'Dashboard', 'E-commerce', 'Blog', 'Portfolio', 'Web App'],
  style: Enum ['Modern', 'Minimalist', 'Bold', 'Professional', 'Creative', 'Elegant'],
  components: Array of {
    type: String,
    name: String,
    html: String,
    css: String,
    position: Number
  },
  html: String,
  css: String,
  colorScheme: Object,
  industry: String,
  targetAudience: String,
  aiGenerated: Boolean,
  aiModel: String,
  status: Enum ['draft', 'published', 'archived'],
  createdAt: Date,
  updatedAt: Date
}
```

## 🔐 Authentication & Security

### **Authentication Flow**

1. **Registration**:
   - User submits registration form
   - Password is hashed using bcrypt (12 salt rounds)
   - User document is created in MongoDB
   - JWT token is generated and sent in HTTP-only cookie
   - User is redirected to dashboard

2. **Login**:
   - User submits credentials
   - Password is compared with hashed password
   - JWT token is generated and sent in HTTP-only cookie
   - User data is returned (excluding password)

3. **Protected Routes**:
   - Frontend checks for user in AuthContext
   - Backend validates JWT token in auth middleware
   - User object is attached to request
   - Route handler processes authenticated request

4. **Logout**:
   - JWT cookie is cleared
   - User is redirected to home page

### **Security Features**

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt with 12 salt rounds
- **HTTP-only Cookies**: Prevents XSS attacks
- **Helmet.js**: Security headers (CSP, HSTS, X-Frame-Options)
- **CORS**: Configured for specific origins
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Input Validation**: Joi and Zod schema validation
- **XSS Protection**: Sanitized inputs
- **MongoDB Injection Prevention**: Mongoose schema validation
- **File Upload Validation**: File type and size restrictions
- **Error Handling**: Centralized error handling without exposing sensitive data

### **Subscription & Usage Limits**

| Feature | Free Plan | Pro Plan | Enterprise Plan |
|---------|-----------|----------|-----------------|
| Layouts Generated | 20 | 100 | Unlimited |
| Color Palettes | 10 | 200 | Unlimited |
| Font Suggestions | 15 | 300 | Unlimited |
| UX Audits | 23 | 50 | Unlimited |
| File Upload Size | 10MB | 10MB | 10MB |
| API Rate Limit | 100/15min | 100/15min | 100/15min |

## 🌐 Deployment

### **Production Build**

```bash
# Build client for production
cd client
npm run build

# The build folder will contain optimized production files
```

### **Deployment on Vercel (Frontend) + Render (Backend)**

#### **Frontend Deployment (Vercel)**

1. **Push code to GitHub**

2. **Connect to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Select the `client` folder as root directory

3. **Configure Build Settings**:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

4. **Set Environment Variables**:
   ```
   REACT_APP_API_URL=https://your-backend.onrender.com
   REACT_APP_GEMINI_API_KEY=your_gemini_api_key
   ```

5. **Deploy**: Click "Deploy"

#### **Backend Deployment (Render)**

1. **Push code to GitHub**

2. **Create Web Service on Render**:
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the `server` folder as root directory

3. **Configure Service**:
   - **Name**: designmate-ai-backend
   - **Environment**: Node
   - **Build Command**: `npm ci --omit=dev`
   - **Start Command**: `node index.js`
   - **Instance Type**: Free (or paid for better performance)

4. **Set Environment Variables**:
   ```
   NODE_ENV=production
   PORT=10000
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/designmate-ai
   JWT_SECRET=your_super_secret_jwt_key
   GEMINI_API_KEY=your_gemini_api_key
   GEMINI_MODEL=gemini-2.5-flash
   GEMINI_FALLBACK_MODEL=gemini-2.5-flash
   CORS_ORIGIN=https://your-frontend.vercel.app
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=100
   MAX_FILE_SIZE=10485760
   ```

5. **Deploy**: Click "Create Web Service"

#### **Cross-Origin Configuration**

For cross-origin authentication between Vercel (frontend) and Render (backend):

**Backend (`server/index.js`)**:
```javascript
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

// Cookie settings for production
res.cookie('token', token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
});
```

**Frontend (`client/src/services/api.js`)**:
```javascript
axios.defaults.withCredentials = true;
```

### **Deployment Notes**

- **Cold Starts**: Free Render services sleep after 15 minutes of inactivity, causing 30-60s delay on first request
- **File Uploads**: Use Cloudinary or AWS S3 for persistent file storage instead of local `/uploads`
- **Database**: Use MongoDB Atlas for production database
- **Environment Variables**: Never commit `.env` files to Git
- **HTTPS**: Both Vercel and Render provide free SSL certificates
- **Custom Domain**: Configure custom domains in Vercel and Render dashboards

## 💻 Development Guide

### **Available Scripts**

```bash
# Root directory
npm run dev          # Run both client and server concurrently
npm run server       # Run server only (http://localhost:5000)
npm run client       # Run client only (http://localhost:3000)
npm run build        # Build client for production
npm start            # Start production server
npm run install-all  # Install all dependencies (root, client, server)

# Client directory
cd client
npm start            # Start development server
npm run build        # Create production build
npm test             # Run tests
npm run eject        # Eject from Create React App (irreversible)

# Server directory
cd server
npm start            # Start production server
npm run dev          # Start development server with nodemon
npm test             # Run tests
```

### **Development Workflow**

1. **Create a new feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes and test locally**:
   ```bash
   npm run dev
   ```

3. **Commit changes**:
   ```bash
   git add .
   git commit -m "Add: your feature description"
   ```

4. **Push to GitHub**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request** on GitHub

### **Code Style Guidelines**

- **JavaScript**: ES6+ syntax
- **React**: Functional components with hooks
- **Naming**: camelCase for variables/functions, PascalCase for components
- **File Structure**: One component per file
- **Comments**: JSDoc for functions, inline for complex logic
- **Error Handling**: Try-catch blocks with meaningful error messages

### **Testing**

```bash
# Run frontend tests
cd client
npm test

# Run backend tests
cd server
npm test
```

### **Debugging**

**Frontend**:
- Use React DevTools browser extension
- Console.log for quick debugging
- React Error Boundaries for error handling

**Backend**:
- Use `console.log` or `console.error`
- Check server logs in terminal
- Use Postman or Thunder Client for API testing
- MongoDB Compass for database inspection

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### **How to Contribute**

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/AmazingFeature`
3. **Make your changes**
4. **Test thoroughly**
5. **Commit your changes**: `git commit -m 'Add some AmazingFeature'`
6. **Push to the branch**: `git push origin feature/AmazingFeature`
7. **Open a Pull Request**

### **Contribution Guidelines**

- Follow the existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR
- Be respectful and constructive in discussions

### **Bug Reports**

If you find a bug, please open an issue with:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details (OS, browser, Node version)

### **Feature Requests**

We love new ideas! Open an issue with:
- Clear description of the feature
- Use case and benefits
- Possible implementation approach

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Harsh Lad**

- GitHub: [@ladHarsh](https://github.com/ladHarsh)
- Repository: [Designmate-AI](https://github.com/ladHarsh/Designmate-AI)
- Email: support@designmate.ai

## 🙏 Acknowledgments

- **[Google Gemini AI](https://ai.google.dev/)** - Powerful AI capabilities
- **[React](https://reactjs.org/)** - Frontend framework
- **[Tailwind CSS](https://tailwindcss.com/)** - CSS framework
- **[MongoDB](https://www.mongodb.com/)** - Database
- **[Express.js](https://expressjs.com/)** - Backend framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Heroicons](https://heroicons.com/)** - Icon library
- **[Unsplash](https://unsplash.com/)** - Stock images

## 📞 Support

For support, questions, or feedback:

- **Email**: support@designmate.ai
- **GitHub Issues**: [Open an issue](https://github.com/ladHarsh/Designmate-AI/issues)
- **Documentation**: This README file

## 🗺️ Roadmap

### **Upcoming Features**

- [ ] Real-time collaboration
- [ ] Design version control
- [ ] Team workspaces
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Figma plugin integration
- [ ] AI-powered design critique
- [ ] Component library generator
- [ ] Design system builder
- [ ] Accessibility scanner
- [ ] Performance optimizer
- [ ] SEO analyzer
- [ ] A/B testing suggestions
- [ ] Design handoff tools
- [ ] Code export (React, Vue, Angular)

---

<div align="center">

**DesignMate AI** - Empowering designers with artificial intelligence 🚀

Made with ❤️ by [Harsh Lad](https://github.com/ladHarsh)

⭐ Star this repo if you find it helpful!

</div>
