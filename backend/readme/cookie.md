# 🍪 Cookie - Language Learning Social Platform

**Cookie** is a modern, full-stack social platform designed to connect language learners worldwide. Built with the MERN stack, it enables users to find language partners, chat in real-time, and practice languages through video calls.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Database Models](#database-models)
- [Key Components](#key-components)
- [Authentication & Security](#authentication--security)
- [Third-Party Integrations](#third-party-integrations)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 Overview

Cookie is a language learning social network that helps users:
- **Connect** with native speakers and fellow learners
- **Practice** languages through real-time chat and video calls
- **Build** meaningful friendships across cultures
- **Learn** languages in an immersive, social environment

The platform features a beautiful, responsive UI with dark/light theme support, powered by DaisyUI and TailwindCSS.

---

## ✨ Features

### 🔐 Authentication & User Management
- **Secure Authentication**: JWT-based authentication with HTTP-only cookies
- **User Registration**: Email/password signup with validation
- **Profile Onboarding**: Complete profile setup with language preferences
- **Random Avatar Generation**: Auto-generated profile pictures

### 👥 Social Features
- **Friend System**: Send, receive, and accept friend requests
- **User Discovery**: Smart recommendations based on language learning goals
- **Friend Management**: View and manage your connections
- **Profile Customization**: Bio, location, native/learning languages

### 💬 Real-Time Communication
- **Live Chat**: Powered by Stream Chat SDK
- **Message History**: Persistent chat conversations
- **Emoji Support**: Full emoji picker integration
- **Typing Indicators**: Real-time typing status
- **Read Receipts**: Message delivery and read status

### 📹 Video Calling
- **HD Video Calls**: Built with Stream Video SDK
- **Screen Sharing**: Share your screen during calls
- **Call Controls**: Mute, camera toggle, and hang up
- **Multi-participant Support**: Group video calls

### 🎨 UI/UX
- **Responsive Design**: Mobile-first, works on all devices
- **Theme Switching**: Dark and light mode support
- **Modern Interface**: Clean, intuitive design with DaisyUI
- **Loading States**: Smooth loading animations
- **Toast Notifications**: User-friendly feedback system

---

## 🛠 Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **Vite 6.3.1** - Build tool and dev server
- **React Router 7.5.1** - Client-side routing
- **TailwindCSS 3.4.17** - Utility-first CSS framework
- **DaisyUI 4.12.24** - Component library
- **Zustand 5.0.3** - State management
- **TanStack Query 5.74.4** - Server state management
- **Axios 1.8.4** - HTTP client
- **Stream Chat React 12.14.0** - Chat UI components
- **Stream Video React SDK 1.14.4** - Video call components
- **Emoji Mart 5.6.0** - Emoji picker
- **React Hot Toast 2.5.2** - Toast notifications
- **Lucide React 0.503.0** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express 4.21.0** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 8.13.2** - ODM for MongoDB
- **JWT (jsonwebtoken 9.0.2)** - Authentication tokens
- **bcryptjs 3.0.2** - Password hashing
- **Stream Chat 8.60.0** - Chat backend
- **cookie-parser 1.4.7** - Cookie parsing middleware
- **CORS 2.8.5** - Cross-origin resource sharing
- **dotenv 16.5.0** - Environment variable management

### Development Tools
- **Nodemon 3.1.9** - Auto-restart server
- **ESLint 9.22.0** - Code linting
- **PostCSS 8.5.3** - CSS processing
- **Autoprefixer 10.4.21** - CSS vendor prefixes

---

## 📁 Project Structure

```
Cookie/
├── client/                      # Frontend React application
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── CallButton.jsx
│   │   │   ├── ChatLoader.jsx
│   │   │   ├── FriendCard.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoFriendsFound.jsx
│   │   │   ├── NoNotificationsFound.jsx
│   │   │   ├── PageLoader.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── ThemeSelector.jsx
│   │   ├── constants/           # App constants
│   │   │   └── index.js         # Languages, themes, flags
│   │   ├── hooks/               # Custom React hooks
│   │   │   ├── useAuthUser.js   # Auth user hook
│   │   │   ├── useLogin.js      # Login hook
│   │   │   ├── useLogout.js     # Logout hook
│   │   │   └── useSignUp.js     # Signup hook
│   │   ├── lib/                 # Utility libraries
│   │   │   ├── api.js           # API functions
│   │   │   ├── axios.js         # Axios instance
│   │   │   └── utils.js         # Helper functions
│   │   ├── pages/               # Page components
│   │   │   ├── CallPage.jsx     # Video call page
│   │   │   ├── ChatPage.jsx     # Chat interface
│   │   │   ├── FriendsPage.jsx  # Friends list
│   │   │   ├── HomePage.jsx     # Main dashboard
│   │   │   ├── LoginPage.jsx    # Login form
│   │   │   ├── NotificationsPage.jsx  # Friend requests
│   │   │   ├── OnboardingPage.jsx     # Profile setup
│   │   │   └── SignUpPage.jsx   # Registration form
│   │   ├── store/               # State management
│   │   │   └── useThemeStore.js # Theme state
│   │   ├── App.jsx              # Main app component
│   │   ├── index.css            # Global styles
│   │   └── main.jsx             # App entry point
│   ├── index.html               # HTML template
│   ├── package.json             # Frontend dependencies
│   ├── tailwind.config.js       # Tailwind configuration
│   ├── vite.config.js           # Vite configuration
│   └── .env                     # Frontend environment variables
│
├── server/                      # Backend Node.js application
│   ├── src/
│   │   ├── controllers/         # Request handlers
│   │   │   ├── auth.controller.js    # Auth logic
│   │   │   ├── chat.controller.js    # Chat logic
│   │   │   └── user.controller.js    # User logic
│   │   ├── lib/                 # Utility libraries
│   │   │   ├── db.js            # MongoDB connection
│   │   │   └── stream.js        # Stream Chat/Video setup
│   │   ├── middleware/          # Express middleware
│   │   │   └── auth.middleware.js    # JWT verification
│   │   ├── models/              # Mongoose schemas
│   │   │   ├── FriendRequest.js # Friend request model
│   │   │   └── User.js          # User model
│   │   ├── routes/              # API routes
│   │   │   ├── auth.route.js    # Auth endpoints
│   │   │   ├── chat.route.js    # Chat endpoints
│   │   │   └── user.route.js    # User endpoints
│   │   └── server.js            # Express app setup
│   ├── package.json             # Backend dependencies
│   └── .env                     # Backend environment variables
│
├── package.json                 # Root package.json
├── .gitignore                   # Git ignore rules
└── README.md                    # This file
```

---

## 🚀 Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local or Atlas)
- **npm** or **yarn**
- **Stream Account** (for chat and video features)

### Clone Repository
```bash
git clone https://github.com/yourusername/cookie.git
cd cookie
```

### Install Dependencies
```bash
# Install root dependencies
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

---

## 🔑 Environment Variables

### Server (.env in `/server`)
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=your_mongodb_connection_string

# JWT Secret
JWT_SECRET_KEY=your_jwt_secret_key

# Stream API (typo in code: STEAM instead of STREAM)
STEAM_API_KEY=your_stream_api_key
STEAM_API_SECRET=your_stream_api_secret
```

### Client (.env in `/client`)
```env
# Stream API Key
VITE_STREAM_API_KEY=your_stream_api_key
```

### Getting Stream Credentials
1. Sign up at [getstream.io](https://getstream.io/)
2. Create a new app
3. Get your API Key and Secret from the dashboard
4. Add them to your environment variables

---

## 🏃‍♂️ Running the Application

### Development Mode

#### Option 1: Run Both (from root)
```bash
# Build and start (production-like)
npm run build
npm start
```

#### Option 2: Run Separately
```bash
# Terminal 1 - Start backend server
cd server
npm run dev

# Terminal 2 - Start frontend dev server
cd client
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000

### Production Build
```bash
# From root directory
npm run build
npm start
```

This will:
1. Install all dependencies
2. Build the client for production
3. Serve the built client from the server

---

## 🔌 API Endpoints

### Authentication Routes (`/api/auth`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/signup` | Register new user | ❌ |
| POST | `/login` | Login user | ❌ |
| POST | `/logout` | Logout user | ❌ |
| POST | `/onboarding` | Complete profile setup | ✅ |
| GET | `/me` | Get current user | ✅ |

### User Routes (`/api/users`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get recommended users | ✅ |
| GET | `/friends` | Get user's friends | ✅ |
| POST | `/friend-request/:id` | Send friend request | ✅ |
| PUT | `/friend-request/:id/accept` | Accept friend request | ✅ |
| GET | `/friend-requests` | Get incoming/accepted requests | ✅ |
| GET | `/outgoing-friend-requests` | Get outgoing requests | ✅ |

### Chat Routes (`/api/chat`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/token` | Get Stream Chat token | ✅ |

---

## 💾 Database Models

### User Model
```javascript
{
  fullName: String (required),
  email: String (required, unique),
  password: String (required, min: 6, hashed),
  bio: String,
  profilePic: String,
  nativeLanguage: String,
  learningLanguage: String,
  location: String,
  isOnboarded: Boolean (default: false),
  friends: [ObjectId] (ref: User),
  timestamps: true
}
```

**Methods:**
- `matchPassword(enteredPassword)` - Compare password with hash

**Hooks:**
- Pre-save: Hash password before saving

### FriendRequest Model
```javascript
{
  sender: ObjectId (required, ref: User),
  recipient: ObjectId (required, ref: User),
  status: String (enum: ['pending', 'accepted'], default: 'pending'),
  timestamps: true
}
```

---

## 🧩 Key Components

### Frontend Components

#### Layout Components
- **`Layout.jsx`** - Main layout wrapper with navbar and optional sidebar
- **`Navbar.jsx`** - Top navigation bar
- **`Sidebar.jsx`** - Side navigation menu
- **`ThemeSelector.jsx`** - Theme switcher component

#### Feature Components
- **`FriendCard.jsx`** - Friend profile card with language flags
- **`CallButton.jsx`** - Video call initiation button
- **`ChatLoader.jsx`** - Loading state for chat
- **`PageLoader.jsx`** - Full-page loading spinner
- **`NoFriendsFound.jsx`** - Empty state for friends list
- **`NoNotificationsFound.jsx`** - Empty state for notifications

#### Pages
- **`HomePage.jsx`** - Dashboard with friends and recommendations
- **`ChatPage.jsx`** - Real-time chat interface
- **`CallPage.jsx`** - Video call interface
- **`FriendsPage.jsx`** - Friends management
- **`NotificationsPage.jsx`** - Friend request notifications
- **`OnboardingPage.jsx`** - Profile completion form
- **`LoginPage.jsx`** - User login
- **`SignUpPage.jsx`** - User registration

### Custom Hooks
- **`useAuthUser`** - Fetch and manage authenticated user
- **`useLogin`** - Handle login logic
- **`useLogout`** - Handle logout logic
- **`useSignUp`** - Handle signup logic

### State Management
- **`useThemeStore`** - Zustand store for theme (dark/light)

---

## 🔒 Authentication & Security

### JWT Authentication
- **Token Storage**: HTTP-only cookies (prevents XSS attacks)
- **Token Expiry**: 7 days
- **Cookie Settings**:
  - `httpOnly: true` - Prevents JavaScript access
  - `sameSite: 'strict'` - Prevents CSRF attacks
  - `secure: true` (production) - HTTPS only

### Password Security
- **Hashing**: bcryptjs with salt rounds (10)
- **Validation**: Minimum 6 characters
- **Pre-save Hook**: Automatic hashing before database save

### Protected Routes
- **Middleware**: `protectRoute` verifies JWT token
- **User Injection**: Adds user object to `req.user`
- **Error Handling**: Returns 401 for invalid/missing tokens

### CORS Configuration
```javascript
{
  origin: 'http://localhost:5173',
  credentials: true  // Allow cookies
}
```

---

## 🌐 Third-Party Integrations

### Stream Chat & Video
**Stream** powers the real-time chat and video calling features.

#### Chat Features
- Real-time messaging
- Message history
- Typing indicators
- Read receipts
- Emoji support
- File sharing

#### Video Features
- HD video calls
- Screen sharing
- Call controls
- Multi-participant support

#### Implementation
```javascript
// Server-side: Generate Stream token
const token = streamClient.createToken(userId);

// Client-side: Connect user
const client = StreamChat.getInstance(apiKey);
await client.connectUser(user, token);
```

### Avatar Generation
- **Service**: [avatar.iran.liara.run](https://avatar.iran.liara.run)
- **Usage**: Random profile pictures (1-100)
- **Format**: PNG images

---

## 📱 Responsive Design

### Breakpoints (TailwindCSS)
- **sm**: 640px - Small devices
- **md**: 768px - Medium devices
- **lg**: 1024px - Large devices
- **xl**: 1280px - Extra large devices

### Mobile Optimizations
- Touch-friendly UI elements
- Responsive grid layouts
- Mobile-first approach
- Adaptive navigation

---

## 🎨 Theming

### Available Themes
1. **Dark Theme** - Default dark mode
2. **Cupcake Theme** - Light mode

### Theme Implementation
```javascript
// Zustand store
const useThemeStore = create((set) => ({
  theme: localStorage.getItem('theme') || 'dark',
  setTheme: (theme) => {
    localStorage.setItem('theme', theme);
    set({ theme });
  }
}));
```

### DaisyUI Themes
Configured in `tailwind.config.js`:
```javascript
daisyui: {
  themes: ["dark", "cupcake"]
}
```

---

## 🚢 Deployment

### Production Build
```bash
# From root directory
npm run build
```

This command:
1. Installs server dependencies
2. Installs client dependencies
3. Builds client for production (creates `/client/dist`)

### Environment Setup
1. Set `NODE_ENV=production`
2. Update CORS origin to your domain
3. Configure MongoDB connection string
4. Set secure JWT secret
5. Add Stream API credentials

### Server Configuration
The server serves the built React app in production:
```javascript
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'dist', 'index.html'));
  });
}
```

### Deployment Platforms
- **Vercel** - Frontend (recommended)
- **Render** - Full-stack deployment
- **Heroku** - Full-stack deployment
- **Railway** - Full-stack deployment
- **MongoDB Atlas** - Database hosting

### Deployment Checklist
- [ ] Set all environment variables
- [ ] Update CORS settings
- [ ] Configure MongoDB Atlas
- [ ] Set up Stream account
- [ ] Build production bundle
- [ ] Test authentication flow
- [ ] Test chat functionality
- [ ] Test video calls
- [ ] Enable HTTPS
- [ ] Set up monitoring

---

## 🐛 Known Issues

1. **Environment Variable Typo**: Server uses `STEAM_API_KEY` instead of `STREAM_API_KEY`
2. **Missing CameraIcon Import**: OnboardingPage references undefined `CameraIcon`

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test thoroughly before submitting
- Update documentation as needed

---

## 📄 License

This project is licensed under the ISC License.

---

## 👨‍💻 Author

**Harsh Lad**

---

## 🙏 Acknowledgments

- [Stream](https://getstream.io/) - Chat and video infrastructure
- [DaisyUI](https://daisyui.com/) - Beautiful UI components
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS
- [MongoDB](https://www.mongodb.com/) - Database
- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool

---

## 📞 Support

For support, email your-email@example.com or open an issue on GitHub.

---

## 🗺 Roadmap

### Planned Features
- [ ] Group chat support
- [ ] Language learning resources
- [ ] Progress tracking
- [ ] Gamification (points, badges)
- [ ] Voice messages
- [ ] Translation integration
- [ ] Mobile app (React Native)
- [ ] Advanced user matching algorithm
- [ ] Language proficiency levels
- [ ] Study sessions scheduling

---

**Built with ❤️ for language learners worldwide**
