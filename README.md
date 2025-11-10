# RemedyRx - Healthcare Platform

RemedyRx is an AI-powered healthcare platform that provides symptom checking, remedy suggestions, and comprehensive health management features.

## 🚀 Features

- **User Authentication** - Secure login/signup with JWT
- **AI Chatbot** - Get instant remedies for 18+ health conditions
- **Doctor Directory** - Browse expert doctors across specialties
- **User Profile Management** - Manage personal and medical information
- **Admin Dashboard** - Comprehensive user management system
- **Multi-language Support** - English, Hindi, and Nepali
- **Dark/Light Mode** - Toggle between themes
- **Responsive Design** - Works on all devices

---

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

1. **Node.js** (v14 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **MongoDB** (v4.4 or higher)
   - Download from: https://www.mongodb.com/try/download/community
   - Verify installation: `mongod --version`

3. **Git** (optional, for cloning)
   - Download from: https://git-scm.com/

---

## 🛠️ Installation Steps

### Step 1: Navigate to Project Directory

```bash
cd "c:\Users\nikhi\Desktop\remedyRX latest"
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- express
- mongoose
- bcryptjs
- jsonwebtoken
- cors
- dotenv
- body-parser

### Step 3: Start MongoDB

**Option A - Windows Service:**
```bash
net start MongoDB
```

**Option B - Manual Start:**
```bash
mongod
```

Keep this terminal window open. MongoDB must be running for the application to work.

### Step 4: Configure Environment Variables

The `.env` file is already configured with:
```
PORT=3002
MONGODB_URI=mongodb://localhost:27017/remedyrx
JWT_SECRET=your_jwt_secret_key
```

No changes needed unless you want to use a different port or MongoDB URI.

### Step 5: Create Admin User (Optional but Recommended)

To access the admin dashboard, create an admin account:

```bash
node createAdmin.js
```

**Admin Credentials Created:**
- Email: `admin@remedyrx.com`
- Password: `admin123`

### Step 6: Start the Application

```bash
npm start
```

**Expected Output:**
```
Server is running on port 3002
Process ID: XXXX
Connected to MongoDB
Server is now listening for connections
```

---

## 🌐 Access the Application

Once the server is running, open your web browser and navigate to:

```
http://localhost:3002
```

---

## 👥 User Roles & Access

### Regular User
1. Click **"Sign Up"** to create an account
2. Fill in your details (First Name, Last Name, Email, Password)
3. After signup, you'll be automatically logged in
4. Access features:
   - View your **Profile** and update information
   - Use the **Chatbot** for health queries
   - Browse **Doctors**
   - Submit **Contact** form

### Admin User
1. Click **"Sign In"**
2. Use admin credentials:
   - Email: `admin@remedyrx.com`
   - Password: `admin123`
3. After login, the **"Admin Dashboard"** link appears in navigation
4. Admin capabilities:
   - View all registered users
   - See user statistics
   - View detailed user information
   - Delete users (except other admins)

---

## 💻 Usage Guide

### Using the Chatbot

1. Navigate to the **Chatbot** section
2. Type any health concern or symptom, such as:
   - "I have a headache"
   - "What to do for diabetes?"
   - "fever remedy"
   - "anxiety help"
3. The chatbot provides detailed remedies including:
   - Description of the condition
   - Common causes
   - Treatment suggestions
   - Prevention tips
   - When to see a doctor

**Supported Conditions:** Headache, Fever, Cough, Cold, Stomach ache, Nausea, Diarrhea, Constipation, Back pain, Insomnia, Anxiety, Depression, Diabetes, Asthma, Arthritis, Migraine, Allergies, Acne, Hypertension

### Managing Your Profile

1. Click **"Profile"** in the navigation menu
2. Update your information:
   - Personal details (Name, Phone, DOB, Gender)
   - Address (Street, City, State)
   - Medical information (Blood Group)
3. Click **"Update Profile"** to save changes

### Admin Dashboard

1. Log in as admin
2. Click **"Admin Dashboard"**
3. View dashboard statistics:
   - Total users
   - New users today
   - Number of admins
4. Manage users:
   - Click **"View"** to see detailed user information
   - Click **"Delete"** to remove users

---

## 📁 Project Structure

```
remedyRX latest/
├── controllers/
│   ├── authController.js       # Authentication & user management logic
│   ├── doctorController.js     # Doctor-related operations
│   └── symptomController.js    # Chatbot & remedy database
├── models/
│   ├── User.js                 # User schema with extended fields
│   ├── Doctor.js               # Doctor schema
│   └── Symptom.js              # Symptom schema
├── routes/
│   ├── authRoutes.js           # Auth & profile API routes
│   ├── doctorRoutes.js         # Doctor API routes
│   └── symptomRoutes.js        # Symptom/chatbot API routes
├── middleware/
│   └── authMiddleware.js       # JWT authentication middleware
├── server.js                   # Main application entry point
├── index.html                  # Frontend HTML
├── script.js                   # Frontend JavaScript
├── styles.css                  # Frontend styling
├── createAdmin.js              # Admin user creation script
├── .env                        # Environment configuration
├── package.json                # Project dependencies
└── README.md                   # This file
```

---

## 🔧 Development Mode

For development with auto-restart on file changes:

```bash
npm run dev
```

This uses `nodemon` to automatically restart the server when you modify files.

---

## 🗄️ Database Information

**Database Name:** `remedyrx`

**Collections:**
- `users` - Stores all user accounts with profiles and medical history
- `doctors` - Contains doctor information (seeded automatically)
- `symptoms` - Stores symptom data (seeded automatically)

### Viewing Database Data

**MongoDB Compass (GUI):**
1. Download MongoDB Compass: https://www.mongodb.com/products/compass
2. Connect to: `mongodb://localhost:27017`
3. Select database: `remedyrx`
4. Browse collections: `users`, `doctors`, `symptoms`

**MongoDB Shell:**
```bash
mongosh
use remedyrx
db.users.find().pretty()        # View all users
db.doctors.find().pretty()      # View all doctors
db.symptoms.find().pretty()     # View all symptoms
```

---

## 🛑 Stopping the Application

1. **Stop the Node.js server:**
   - Press `Ctrl + C` in the terminal where the server is running

2. **Stop MongoDB (if manually started):**
   - Press `Ctrl + C` in the MongoDB terminal
   - Or use: `net stop MongoDB` (Windows Service)

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Windows - Kill process on port 3002
Get-Process -Name node | Stop-Process -Force
```

### MongoDB Connection Error
```bash
# Ensure MongoDB is running
mongod

# Or start as Windows service
net start MongoDB
```

### Dependencies Not Installed
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Can't Access Admin Dashboard
```bash
# Re-create admin user
node createAdmin.js
```

---

## 📞 Developer Contact

**Developer:** Nikhil Yadav  
**Phone:** 9350748849  
**Email:** nikhilyadavbrj@gmail.com

---

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Create new user account
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (requires auth)
- `PUT /api/auth/profile` - Update user profile (requires auth)
- `GET /api/auth/users` - Get all users (admin only)
- `DELETE /api/auth/users/:id` - Delete user (admin only)

### Symptoms/Chatbot
- `POST /api/symptoms/remedy` - Get remedy for symptom
- `GET /api/symptoms` - Get all symptoms
- `GET /api/symptoms/:id` - Get symptom by ID

### Doctors
- `GET /api/doctors` - Get all doctors
- `GET /api/doctors/:id` - Get doctor by ID

---

## 🎨 Themes

Toggle between **Light Mode** and **Dark Mode** using the settings icon (⚙️) in the navigation bar.

---

## 🌍 Languages

Switch between:
- English
- हिंदी (Hindi)
- नेपाली (Nepali)

Use the language selector in the settings menu (⚙️).

---

## ⚠️ Important Notes

1. **MongoDB must be running** before starting the application
2. **Admin credentials** are for demonstration purposes - change in production
3. **JWT Secret** should be changed in production environment
4. User passwords are **hashed** using bcrypt for security
5. The application automatically **seeds** doctors and symptoms on first run

---

## 🚀 Quick Start Summary

```bash
# 1. Navigate to project
cd "c:\Users\nikhi\Desktop\remedyRX latest"

# 2. Install dependencies (first time only)
npm install

# 3. Start MongoDB
net start MongoDB

# 4. Create admin user (first time only)
node createAdmin.js

# 5. Start the application
npm start

# 6. Open browser to http://localhost:3002
```

---

## 📚 Technology Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **Password Security:** bcrypt.js
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Styling:** Custom CSS with Glassmorphism design
- **Icons:** Font Awesome

---

**Enjoy using RemedyRx! 🏥💊**
