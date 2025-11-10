const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/remedyrx';

async function createAdminUser() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@remedyrx.com' });
    if (existingAdmin) {
      console.log('Admin user already exists!');
      console.log('Email: admin@remedyrx.com');
      console.log('Password: admin123');
      process.exit(0);
    }

    // Create admin user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);

    const admin = new User({
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@remedyrx.com',
      password: hashedPassword,
      phone: '1234567890',
      gender: 'Other',
      role: 'admin'
    });

    await admin.save();
    console.log('✅ Admin user created successfully!');
    console.log('-----------------------------------');
    console.log('Email: admin@remedyrx.com');
    console.log('Password: admin123');
    console.log('-----------------------------------');
    console.log('Use these credentials to log in as admin');

    process.exit(0);
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
}

createAdminUser();
