const express = require('express');
const { getRemedy, getAllSymptoms, getSymptomById } = require('../controllers/symptomController');

const router = express.Router();

router.post('/remedy', getRemedy);
router.get('/', getAllSymptoms);
router.get('/:id', getSymptomById);

module.exports = router;