const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

// Import routes
const authRoutes = require('./routes/authRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const symptomRoutes = require('./routes/symptomRoutes');

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors({
  origin: true, // Allow all origins
  credentials: true
}));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.static(__dirname));
// Add this line to serve the doctors images
app.use('/doctors', express.static(__dirname + '/doctors'));
// Serve the fallback image
app.use('/fallback-doctor.jpg', express.static(__dirname + '/fallback-doctor.jpg'));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/remedyrx', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB successfully');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
  process.exit(1); // Exit if we can't connect to the database
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});
db.on('reconnected', () => {
  console.log('MongoDB reconnected');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/symptoms', symptomRoutes);

// Serve frontend
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    message: 'Internal server error', 
    error: process.env.NODE_ENV === 'development' ? err.message : {} 
  });
});

// Handle 404 errors
app.use((req, res) => {
  console.log(`404 Not Found: ${req.originalUrl}`);
  res.status(404).json({ message: 'Route not found' });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Process ID: ${process.pid}`);
  
  // Seed initial data if database is empty
  seedDatabase();
});

server.on('error', (error) => {
  console.error('Server error:', error);
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Please use a different port.`);
    process.exit(1);
  }
});

server.on('listening', () => {
  console.log('Server is now listening for connections');
});

// Seed database with initial data
async function seedDatabase() {
  try {
    const Doctor = require('./models/Doctor');
    const Symptom = require('./models/Symptom');
    
    console.log('Checking database for existing data...');
    
    const doctorCount = await Doctor.countDocuments();
    console.log(`Found ${doctorCount} doctors in database`);
    
    if (doctorCount === 0) {
      console.log('Seeding doctors...');
      const doctors = [
        {
          name: "Dr. Sarah Johnson",
          specialty: "Ayurvedic Medicine",
          experience: 15,
          rating: 4.5,
          image: "/doctors/doctor1.jpg"
        },
        {
          name: "Dr. Michael Chen",
          specialty: "Cardiology",
          experience: 12,
          rating: 5.0,
          image: "/doctors/doctor2.jpg"
        },
        {
          name: "Dr. Priya Sharma",
          specialty: "Ayurvedic Specialist",
          experience: 10,
          rating: 4.7,
          image: "/doctors/doctor3.jpg"
        },
        {
          name: "Dr. James Wilson",
          specialty: "Neurology",
          experience: 18,
          rating: 4.2,
          image: "/doctors/doctor1.jpg"
        },
        {
          name: "Dr. Emily Rodriguez",
          specialty: "Pediatrics",
          experience: 8,
          rating: 4.9,
          image: "/doctors/doctor2.jpg"
        },
        {
          name: "Dr. Raj Patel",
          specialty: "Ayurvedic Practitioner",
          experience: 14,
          rating: 4.6,
          image: "/doctors/doctor3.jpg"
        }
      ];
      
      await Doctor.insertMany(doctors);
      console.log('Doctors seeded successfully');
    }
    
    const symptomCount = await Symptom.countDocuments();
    console.log(`Found ${symptomCount} symptoms in database`);
    
    if (symptomCount === 0) {
      console.log('Seeding symptoms...');
      const symptoms = [
        {
          name: "Headache",
          description: "Pain in the head or upper neck",
          remedies: [
            "Rest in a quiet, dark room",
            "Apply a cold compress to your forehead",
            "Stay hydrated",
            "Consider over-the-counter pain relievers"
          ]
        },
        {
          name: "Fever",
          description: "Elevated body temperature",
          remedies: [
            "Rest and stay hydrated",
            "Take fever-reducing medications",
            "Use a cool, damp cloth on your forehead",
            "Wear light clothing"
          ]
        },
        {
          name: "Common Cold",
          description: "Viral infection of the upper respiratory tract",
          remedies: [
            "Drink plenty of fluids",
            "Get adequate rest",
            "Use a humidifier",
            "Gargle with warm salt water"
          ]
        }
      ];
      
      await Symptom.insertMany(symptoms);
      console.log('Symptoms seeded successfully');
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}