const express = require('express');
const { getAllDoctors, getDoctorById, createDoctor } = require('../controllers/doctorController');

const router = express.Router();

router.get('/', getAllDoctors);
router.get('/:id', getDoctorById);
router.post('/', createDoctor);

module.exports = router;