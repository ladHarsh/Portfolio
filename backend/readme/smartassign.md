# SmartAssign

> **AI-Powered Assignment Management & Evaluation Platform**

SmartAssign is a comprehensive educational platform that revolutionizes classroom management, assignment creation, submission, and grading through intelligent automation. Built with the MERN stack and powered by Groq AI (Llama-3), it provides faculty and students with a seamless, efficient, and intelligent learning experience.

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Architecture](#-architecture)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#️-configuration)
- [Running the Application](#️-running-the-application)
- [Project Structure](#-project-structure)
- [Database Models](#-database-models)
- [API Documentation](#-api-documentation)
- [AI Integration](#-ai-integration)
- [Email Notifications](#-email-notifications)
- [Authentication & Authorization](#-authentication--authorization)
- [File Upload System](#-file-upload-system)
- [Analytics & Reporting](#-analytics--reporting)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Features

### For Faculty
- **Classroom Management**: Create, update, and delete virtual classrooms with unique room codes
- **Student Invitation System**: Invite students via email with automated invitation emails
- **Smart Assignment Creation**: Upload PDF assignments with AI-powered ideal answer generation
- **AI-Powered Grading**: Automatic grading of student submissions using Groq Llama-3
- **Manual Grading**: Review and grade submissions manually with feedback
- **Analytics Dashboard**: Comprehensive statistics on student performance, submission rates, and grade distribution
- **Announcement System**: Post announcements to classrooms
- **Student Management**: View enrolled students, remove students from classrooms

### For Students
- **Classroom Enrollment**: Join classrooms using room codes
- **Assignment Viewing**: View all assignments with due dates and details
- **File Submission**: Upload assignment submissions (PDF format)
- **Grade Tracking**: View grades and feedback from faculty
- **Email Notifications**: Receive notifications for new assignments and posted grades
- **Submission History**: Track submission status and timestamps

### For Admins
- **User Management**: View and manage all users (Faculty, Students, Admins)
- **Classroom Oversight**: Monitor all classrooms across the platform
- **User Deletion**: Remove users with automatic cleanup of associated data
- **Admin Limit Control**: Maximum of 2 admins allowed on the platform

### General Features
- **Role-Based Access Control (RBAC)**: Secure authentication with JWT tokens
- **Responsive Design**: Mobile-friendly interface with Bootstrap 5
- **Real-time Updates**: Context-based state management for instant UI updates
- **Error Handling**: Comprehensive error boundaries and middleware
- **File Management**: Organized file storage system for assignments and submissions
- **Email Service**: Automated email notifications using Nodemailer

---

## 🛠️ Tech Stack

### Frontend (Client)
| Technology | Purpose |
|------------|---------|
| **React.js 19.0** | UI framework with hooks and functional components |
| **React Router DOM 7.1** | Client-side routing and navigation |
| **Bootstrap 5.3** | Responsive CSS framework |
| **React-Bootstrap 2.10** | Bootstrap components for React |
| **Axios 1.7** | HTTP client for API requests |
| **TanStack React Query 5.64** | Server state management and caching |
| **Chart.js 4.4** | Data visualization library |
| **React-Chartjs-2 5.3** | React wrapper for Chart.js |
| **FontAwesome 6.7** | Icon library |
| **Heroicons 2.2** | Additional icon set |
| **XLSX 0.18** | Excel file generation for exports |
| **File-Saver 2.0** | Client-side file downloads |

### Backend (Server)
| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express.js 4.21** | Web application framework |
| **MongoDB** | NoSQL database |
| **Mongoose 8.9** | MongoDB object modeling |
| **JWT (jsonwebtoken 9.0)** | Authentication tokens |
| **Bcrypt 5.1** | Password hashing |
| **Multer 1.4** | File upload middleware |
| **PDF-Parse 1.1** | PDF text extraction |
| **pdf2json 3.1** | PDF parsing library |
| **Nodemailer 6.10** | Email sending service |
| **LangChain 0.3** | AI framework |
| **@langchain/groq 0.1** | Groq AI integration |
| **Axios 1.8** | HTTP client for external APIs |
| **CORS 2.8** | Cross-origin resource sharing |
| **Dotenv 16.4** | Environment variable management |

---

## 🏗 Architecture

SmartAssign follows a **three-tier architecture**:

### 1. Presentation Layer (Frontend)
- React-based SPA with component-based architecture
- Context API for global state (Auth, Updates)
- Protected routes with role-based access
- Responsive UI with Bootstrap components

### 2. Application Layer (Backend)
- RESTful API with Express.js
- JWT-based authentication middleware
- Role-specific route protection
- File upload handling with Multer
- AI integration for answer generation and grading

### 3. Data Layer (Database)
- MongoDB for persistent storage
- Mongoose schemas with relationships
- Indexed fields for performance
- Embedded documents for submissions

### Data Flow
```
Client → API Request → Auth Middleware → Route Handler → Database → Response → Client
                                ↓
                         AI Processing (Groq)
                                ↓
                         Email Service (Nodemailer)
```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v14.0.0 or higher ([Download](https://nodejs.org/))
- **npm**: v6.0.0 or higher (comes with Node.js)
- **MongoDB**: Local installation or MongoDB Atlas account ([Setup Guide](https://www.mongodb.com/))
- **Groq API Key**: Sign up at [Groq Console](https://console.groq.com/)
- **Gmail Account**: For email notifications (with App Password enabled)

---

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/SmartAssign.git
cd SmartAssign
```

### 2. Install Root Dependencies
```bash
npm install
```

### 3. Install Client Dependencies
```bash
cd client
npm install
cd ..
```

### 4. Install Server Dependencies
```bash
cd server
npm install
cd ..
```

### 5. Create Upload Directories
```bash
# Windows
mkdir server\uploads\assignments
mkdir server\uploads\submissions

# Linux/Mac
mkdir -p server/uploads/assignments
mkdir -p server/uploads/submissions
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the `server/` directory:

```env
# Server Configuration
PORT=9000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/smartassign

# Authentication
JWT_SECRET=your_super_secret_jwt_key_here

# AI Configuration (Groq)
GROQ_API_KEY=your_groq_api_key_here

# Email Service (Gmail)
EMAIL_USER=your_email@gmail.com
EMAIL_APP_PASSWORD=your_gmail_app_password

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

### Gmail App Password Setup
1. Enable 2-Factor Authentication on your Google Account
2. Go to [App Passwords](https://myaccount.google.com/apppasswords)
3. Generate a new app password for "Mail"
4. Use this password in `EMAIL_APP_PASSWORD`

### Frontend Configuration

Update `client/src/config/api.config.js` if needed:

```javascript
const BASE_URL = process.env.NODE_ENV === 'production'
    ? 'https://your-production-url.com'
    : 'http://localhost:9000';
```

---

## 🏃‍♂️ Running the Application

### Development Mode

#### Option 1: Run Both Servers Separately

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```
Server runs on `http://localhost:9000`

**Terminal 2 - Frontend:**
```bash
cd client
npm start
```
Client runs on `http://localhost:3000`

#### Option 2: Using Root Scripts

```bash
# Install all dependencies
npm run install-all

# Build client for production
npm run build

# Start production server
npm start
```

### Production Mode

```bash
# Build the client
cd client
npm run build
cd ..

# Start the server (serves built client)
cd server
NODE_ENV=production npm start
```

---

## 📂 Project Structure

```
SmartAssign/
├── client/                          # React Frontend Application
│   ├── public/                      # Static files
│   │   ├── index.html              # HTML template
│   │   └── favicon.ico             # App icon
│   ├── src/                        # Source code
│   │   ├── components/             # React components
│   │   │   ├── About/             # About page component
│   │   │   ├── Assignment/        # Assignment-related components
│   │   │   │   ├── AssignmentDetailView.js
│   │   │   │   ├── AssignmentEditModal.js
│   │   │   │   ├── AssignmentList.js
│   │   │   │   ├── AssignmentModal.js
│   │   │   │   ├── AssignmentStatistics.js
│   │   │   │   ├── AssignmentSubmissionModal.js
│   │   │   │   ├── FacultyAssignmentList.js
│   │   │   │   ├── GradeSubmissionModal.js
│   │   │   │   └── StudentAssignmentList.js
│   │   │   ├── Classroom/         # Classroom components
│   │   │   │   ├── CreateClassroomModal.js
│   │   │   │   └── JoinClassroomModal.js
│   │   │   ├── Dashboard/         # Dashboard components
│   │   │   │   ├── AdminDashboard.js
│   │   │   │   ├── FacultyDashboard.js
│   │   │   │   └── StudentDashboard.js
│   │   │   ├── LandingPage/       # Landing page
│   │   │   ├── header/            # Header/Navigation
│   │   │   ├── login_details/     # Auth components
│   │   │   │   ├── Login.js
│   │   │   │   └── SignUp.js
│   │   │   ├── ErrorBoundary.js   # Error handling
│   │   │   ├── LoadingSpinner.js  # Loading indicator
│   │   │   ├── Notification.js    # Notification component
│   │   │   └── UploadProgress.js  # Upload progress bar
│   │   ├── context/               # React Context
│   │   │   ├── AuthContext.js     # Authentication state
│   │   │   └── UpdateContext.js   # Update notifications
│   │   ├── config/                # Configuration
│   │   │   └── api.config.js      # API base URL config
│   │   ├── styles/                # Global styles
│   │   ├── App.js                 # Main app component
│   │   ├── App.css                # App styles
│   │   ├── index.js               # Entry point
│   │   └── setupProxy.js          # Proxy configuration
│   └── package.json               # Client dependencies
│
├── server/                         # Node.js Backend Application
│   ├── config/                    # Configuration files
│   │   └── db.js                  # Database connection
│   ├── middleware/                # Express middleware
│   │   ├── auth.middleware.js     # JWT authentication
│   │   └── error.middleware.js    # Error handling
│   ├── models/                    # Mongoose schemas
│   │   ├── user.js                # User model
│   │   ├── classroom.js           # Classroom model
│   │   ├── assignment.js          # Assignment model
│   │   └── announcements.js       # Announcement model
│   ├── routes/                    # API routes
│   │   ├── signup.routes.js       # Auth routes
│   │   ├── admin.routes.js        # Admin routes
│   │   ├── faculty.routes.js      # Faculty routes
│   │   ├── student.routes.js      # Student routes
│   │   ├── assignment.routes.js   # Assignment routes
│   │   └── upload.routes.js       # File upload routes
│   ├── utils/                     # Utility functions
│   │   └── emailService.js        # Email sending service
│   ├── uploads/                   # File storage
│   │   ├── assignments/           # Assignment PDFs
│   │   └── submissions/           # Student submissions
│   ├── server.js                  # Express app entry point
│   ├── .env                       # Environment variables
│   └── package.json               # Server dependencies
│
├── package.json                    # Root package.json
├── .gitignore                      # Git ignore rules
└── README.md                       # This file
```

---

## 🗄 Database Models

### User Model
```javascript
{
  name: String,           // User's full name
  email: String,          // Unique email address
  password: String,       // Hashed password (bcrypt)
  role: String            // "Admin" | "Faculty" | "Student"
}
```

### Classroom Model
```javascript
{
  name: String,           // Classroom name
  subject: String,        // Subject/course name
  description: String,    // Optional description
  faculty: ObjectId,      // Reference to User (Faculty)
  roomCode: String,       // Unique 6-character code
  students: [ObjectId],   // Array of User references
  invitedEmails: [{
    email: String,
    status: String        // "pending" | "joined"
  }],
  createdAt: Date
}
```

### Assignment Model
```javascript
{
  title: String,          // Assignment title
  description: String,    // Assignment description
  dueDate: Date,          // Submission deadline
  maxMarks: Number,       // Maximum marks
  classroom: ObjectId,    // Reference to Classroom
  createdBy: ObjectId,    // Reference to User (Faculty)
  assignmentFile: String, // Path to PDF file
  idealAnswers: Object,   // AI-generated ideal answers
  submissions: [{
    student: ObjectId,    // Reference to User (Student)
    submissionUrl: String,// Path to submission file
    submittedAt: Date,
    grade: Number,
    feedback: String,
    isAutoGraded: Boolean
  }],
  timestamps: true        // createdAt, updatedAt
}
```

### Announcement Model
```javascript
{
  classroom: ObjectId,    // Reference to Classroom
  faculty: ObjectId,      // Reference to User (Faculty)
  content: String,        // Announcement text
  createdAt: Date
}
```

---

## 📡 API Documentation

### Authentication Routes (`/api/auth`)

#### POST `/api/auth/signup`
Register a new user.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "Student"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Registration successful",
  "token": "jwt_token_here"
}
```

#### POST `/api/auth/login`
Authenticate user and get token.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "name": "John Doe",
    "email": "john@example.com",
    "role": "Student"
  }
}
```

#### GET `/api/auth/status`
Check authentication status.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "isAuthenticated": true,
  "userRole": "Student",
  "userName": "John Doe"
}
```

---

### Faculty Routes (`/api/faculty`)

#### GET `/api/faculty/classrooms`
Get all classrooms created by faculty.

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "success": true,
  "classrooms": [...]
}
```

#### POST `/api/faculty/classrooms`
Create a new classroom.

**Request Body:**
```json
{
  "name": "Computer Science 101",
  "subject": "Introduction to Programming",
  "description": "Beginner programming course",
  "studentEmails": ["student1@example.com", "student2@example.com"]
}
```

#### PUT `/api/faculty/classrooms/:classroomId`
Update classroom details.

#### DELETE `/api/faculty/classrooms/:classroomId`
Delete a classroom.

#### POST `/api/faculty/classrooms/:classroomId/assignments`
Create a new assignment with AI-generated answers.

**Request Body:**
```json
{
  "title": "Assignment 1",
  "description": "Complete the programming tasks",
  "dueDate": "2024-12-31",
  "maxMarks": 100,
  "assignmentFile": "path/to/file.pdf"
}
```

#### GET `/api/faculty/classrooms/:classroomId/assignments`
Get all assignments for a classroom.

#### POST `/api/faculty/assignments/:assignmentId/grade/:submissionId`
Grade a student submission.

**Request Body:**
```json
{
  "grade": 85,
  "feedback": "Good work!",
  "isAutoGraded": false
}
```

#### POST `/api/faculty/assignments/:assignmentId/auto-grade/:submissionId`
Auto-grade using AI.

---

### Student Routes (`/api/student`)

#### GET `/api/student/classrooms/enrolled`
Get all enrolled classrooms.

#### POST `/api/student/classrooms/join`
Join a classroom using room code.

**Request Body:**
```json
{
  "roomCode": "ABC123"
}
```

#### GET `/api/student/classrooms/:classroomId/assignments`
Get assignments for a classroom.

#### POST `/api/student/assignments/:assignmentId/submit`
Submit an assignment.

**Form Data:**
- `file`: PDF file

#### POST `/api/student/classrooms/:classroomId/exit`
Leave a classroom.

---

### Admin Routes (`/api/admin`)

#### GET `/api/admin/users`
Get all users.

#### DELETE `/api/admin/users/:userId`
Delete a user.

#### GET `/api/admin/classrooms`
Get all classrooms.

#### DELETE `/api/admin/classrooms/:classroomId`
Delete a classroom.

---

## 🤖 AI Integration

SmartAssign uses **Groq AI with Llama-3** for intelligent features:

### 1. Ideal Answer Generation
When faculty upload an assignment PDF:
1. PDF text is extracted using `pdf-parse`
2. Text is sent to Groq AI with a prompt
3. AI generates ideal answers and marking criteria
4. Results are stored in the assignment document

**Prompt Template:**
```
Analyze this assignment and provide ideal answers and marking criteria:
[Assignment Text]
```

### 2. Auto-Grading
When faculty trigger auto-grading:
1. Student submission PDF is extracted
2. Submission is compared with ideal answers using AI
3. AI provides a grade and detailed feedback
4. Results are saved to the submission

**Grading Criteria:**
- Content accuracy
- Completeness
- Structure and organization
- Technical correctness

---

## 📧 Email Notifications

SmartAssign sends automated emails for various events:

### Email Types

1. **Classroom Invitation**
   - Sent when faculty invite students
   - Contains room code and join instructions

2. **New Assignment Notification**
   - Sent to all enrolled students
   - Includes assignment title, due date, and description

3. **Assignment Updated**
   - Notifies students of changes to assignments

4. **Submission Confirmation**
   - Sent to student after successful submission
   - Copy sent to faculty

5. **Grade Posted**
   - Notifies student when grade is available
   - Includes grade, feedback, and max marks

6. **Submission Reminder**
   - Sent before due date
   - Reminds students to submit

### Email Service Configuration

Uses **Nodemailer** with Gmail SMTP:
```javascript
{
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
}
```

---

## 🔐 Authentication & Authorization

### JWT Token System

**Token Generation:**
```javascript
jwt.sign(
  { _id, name, email, role },
  process.env.JWT_SECRET,
  { expiresIn: '1d' }
)
```

**Token Storage:**
- Stored in `sessionStorage` with session ID
- Format: `token_${sessionId}`
- Automatically attached to requests via Axios interceptor

### Authorization Middleware

```javascript
authMiddleware(requiredRole)
```

**Flow:**
1. Extract token from `Authorization` header
2. Verify token with JWT_SECRET
3. Check if user exists in database
4. Verify user role matches required role
5. Attach user object to request
6. Call next middleware

### Protected Routes

**Frontend:**
```javascript
<ProtectedRoute allowedRoles={["Faculty"]}>
  <FacultyDashboard />
</ProtectedRoute>
```

**Backend:**
```javascript
router.get('/classrooms', authMiddleware('Faculty'), handler)
```

---

## 📤 File Upload System

### Configuration

**Storage:**
```javascript
multer.diskStorage({
  destination: './uploads/assignments',
  filename: `${Date.now()}-${originalname}`
})
```

**Limits:**
- Max file size: 5MB
- Allowed types: PDF only

### Upload Flow

1. Client selects file
2. File sent via FormData
3. Multer middleware processes upload
4. File saved to disk
5. Path stored in database
6. File served via static route

### File Access

```javascript
app.use('/uploads', express.static('uploads'))
```

Access: `http://localhost:9000/uploads/assignments/file.pdf`

---

## 📊 Analytics & Reporting

### Faculty Analytics Dashboard

**Metrics Displayed:**
1. **Total Students**: Count of enrolled students
2. **Total Assignments**: Number of assignments created
3. **Pending Submissions**: Unsubmitted assignments
4. **Graded Submissions**: Completed gradings

**Visualizations:**
- **Submission Rate Chart**: Bar chart showing submission percentages
- **Grade Distribution**: Pie chart of grade ranges
- **Average Grades**: Line chart over time
- **Student Performance**: Individual student statistics

**Data Export:**
- Export to Excel (XLSX format)
- Includes all student grades and statistics

---

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

**Build Command:**
```bash
npm run build
```

**Output Directory:** `build/`

**Environment Variables:**
```
REACT_APP_BASE_URL=https://your-api-url.com
```

### Backend Deployment (Render/Heroku)

**Start Command:**
```bash
npm start
```

**Environment Variables:**
- Set all variables from `.env` file
- Update `FRONTEND_URL` to production URL
- Update `NODE_ENV` to `production`

**MongoDB Atlas:**
1. Create cluster
2. Whitelist deployment IP
3. Get connection string
4. Update `MONGODB_URI`

### Production Checklist

- [ ] Update CORS origins
- [ ] Set secure JWT_SECRET
- [ ] Configure production database
- [ ] Set up email service
- [ ] Test file uploads
- [ ] Enable HTTPS
- [ ] Set up monitoring
- [ ] Configure backups

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Coding Standards

- Use ESLint for JavaScript linting
- Follow React best practices
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors

- **Harsh Lad** - *Initial work* - [GitHub Profile](https://github.com/harshladdev)

---

## 🙏 Acknowledgments

- **Groq AI** for providing the Llama-3 model
- **MongoDB** for the database platform
- **React** and **Express** communities
- All contributors and testers

---

## 📞 Support

For support, email harshladdev@gmail.com or open an issue in the repository.

---

**Made with ❤️ by Harsh Lad**
