const Doctor = require('../models/Doctor');

// Get all doctors
const getAllDoctors = async (req, res) => {
  try {
    console.log('Fetching all doctors...');
    const doctors = await Doctor.find().sort({ rating: -1 });
    console.log(`Found ${doctors.length} doctors`);
    
    // Add a fallback image if image is missing
    const doctorsWithFallback = doctors.map(doctor => {
      return {
        ...doctor.toObject(),
        image: doctor.image || '/fallback-doctor.jpg'
      };
    });
    
    res.json(doctorsWithFallback);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ message: 'Server error. Please try again later.', error: error.message });
  }
};

// Get doctor by ID
const getDoctorById = async (req, res) => {
  try {
    console.log(`Fetching doctor with ID: ${req.params.id}`);
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      console.log(`Doctor with ID ${req.params.id} not found`);
      return res.status(404).json({ message: 'Doctor not found' });
    }
    console.log(`Found doctor: ${doctor.name}`);
    
    // Add a fallback image if image is missing
    const doctorWithFallback = {
      ...doctor.toObject(),
      image: doctor.image || '/fallback-doctor.jpg'
    };
    
    res.json(doctorWithFallback);
  } catch (error) {
    console.error('Error fetching doctor by ID:', error);
    res.status(500).json({ message: 'Server error. Please try again later.', error: error.message });
  }
};

// Create new doctor
const createDoctor = async (req, res) => {
  try {
    const { name, specialty, experience, rating, image } = req.body;
    
    // Validate input
    if (!name || !specialty || !experience || !rating) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    console.log('Creating new doctor:', { name, specialty, experience, rating, image });
    
    const doctor = new Doctor({
      name,
      specialty,
      experience,
      rating,
      image: image || '/fallback-doctor.jpg'
    });
    
    await doctor.save();
    console.log('Doctor created successfully:', doctor.name);
    res.status(201).json(doctor);
  } catch (error) {
    console.error('Error creating doctor:', error);
    res.status(500).json({ message: 'Server error. Please try again later.', error: error.message });
  }
};

module.exports = { getAllDoctors, getDoctorById, createDoctor };