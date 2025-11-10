const Symptom = require('../models/Symptom');

// Comprehensive remedy database  
const remedyDatabase = {
  headache: {
    description: 'Pain or discomfort in the head or face area',
    causes: ['Tension', 'Stress', 'Dehydration', 'Eye strain', 'Lack of sleep'],
    remedies: ['Rest in a quiet dark room', 'Stay hydrated', 'Apply cold or warm compress', 'Practice relaxation techniques', 'Over-the-counter pain relievers'],
    prevention: ['Maintain regular sleep schedule', 'Stay hydrated', 'Manage stress'],
    whenToSeeDoctor: 'If headaches are severe, frequent, or accompanied by vision changes'
  },
  fever: {
    description: 'Elevated body temperature',
    causes: ['Viral infections', 'Bacterial infections', 'Inflammation'],
    remedies: ['Rest and sleep', 'Stay hydrated', 'Take fever reducers', 'Use lukewarm baths'],
    prevention: ['Wash hands frequently', 'Avoid sick people', 'Get vaccinated'],
    whenToSeeDoctor: 'If fever exceeds 103F or persists more than 3 days'
  },
  cough: {
    description: 'Reflex action to clear airways',
    causes: ['Viral infection', 'Allergies', 'Asthma', 'Postnasal drip'],
    remedies: ['Honey for soothing', 'Stay hydrated', 'Use humidifier', 'Elevate head while sleeping', 'Gargle salt water'],
    prevention: ['Avoid allergens', 'Stay hydrated', 'Avoid smoke'],
    whenToSeeDoctor: 'If cough persists 3+ weeks, produces blood, or chest pain'
  },
  cold: {
    description: 'Viral infection of upper respiratory tract',
    causes: ['Rhinovirus', 'Coronavirus', 'Respiratory syncytial virus'],
    remedies: ['Rest', 'Drink fluids', 'Saline nasal spray', 'Gargle salt water', 'Use humidifier'],
    prevention: ['Wash hands regularly', 'Avoid touching face', 'Stay away from sick people'],
    whenToSeeDoctor: 'If symptoms persist 10+ days or include high fever'
  },
  stomach: {
    description: 'Pain or discomfort in abdominal area',
    causes: ['Indigestion', 'Gas', 'Constipation', 'Food poisoning'],
    remedies: ['Eat bland foods', 'Stay hydrated', 'Apply heating pad', 'Avoid fatty spicy foods', 'Try ginger or peppermint tea'],
    prevention: ['Eat slowly', 'Avoid trigger foods', 'Manage stress'],
    whenToSeeDoctor: 'If pain is severe or accompanied by vomiting or fever'
  },
  nausea: {
    description: 'Sensation of unease with urge to vomit',
    causes: ['Motion sickness', 'Pregnancy', 'Food poisoning', 'Medications'],
    remedies: ['Ginger tea', 'Small frequent meals', 'Avoid strong odors', 'Get fresh air', 'Peppermint'],
    prevention: ['Eat slowly', 'Avoid trigger foods', 'Stay hydrated'],
    whenToSeeDoctor: 'If accompanied by severe pain or persistent vomiting'
  },
  diarrhea: {
    description: 'Frequent loose watery bowel movements',
    causes: ['Viral infection', 'Bacterial infection', 'Food intolerance'],
    remedies: ['Stay hydrated', 'BRAT diet', 'Avoid dairy and fatty foods', 'Probiotics', 'Rest'],
    prevention: ['Practice good hygiene', 'Safe food handling', 'Clean water'],
    whenToSeeDoctor: 'If persists 2+ days, bloody stools, or high fever'
  },
  constipation: {
    description: 'Infrequent or difficult bowel movements',
    causes: ['Low fiber diet', 'Dehydration', 'Lack of exercise'],
    remedies: ['Increase fiber intake', 'Drink water', 'Exercise regularly', 'Prune juice'],
    prevention: ['High-fiber diet', 'Stay hydrated', 'Regular exercise'],
    whenToSeeDoctor: 'If persists 3+ weeks or severe pain'
  },
  backpain: {
    description: 'Pain in the back',
    causes: ['Muscle strain', 'Poor posture', 'Herniated disc'],
    remedies: ['Apply ice then heat', 'Gentle stretching', 'Pain relievers', 'Good posture', 'Rest'],
    prevention: ['Exercise regularly', 'Maintain good posture', 'Lift properly'],
    whenToSeeDoctor: 'If pain radiates down legs or causes numbness'
  },
  insomnia: {
    description: 'Difficulty falling or staying asleep',
    causes: ['Stress', 'Anxiety', 'Poor sleep habits', 'Caffeine'],
    remedies: ['Regular sleep schedule', 'Relaxing bedtime routine', 'Dark quiet room', 'Avoid screens', 'Limit caffeine'],
    prevention: ['Good sleep hygiene', 'Stress management', 'Regular exercise'],
    whenToSeeDoctor: 'If persists 3+ weeks or impacts daily life'
  },
  anxiety: {
    description: 'Excessive worry nervousness or fear',
    causes: ['Stress', 'Trauma', 'Genetics', 'Medical conditions'],
    remedies: ['Deep breathing', 'Progressive muscle relaxation', 'Regular exercise', 'Meditation', 'Limit caffeine'],
    prevention: ['Stress management', 'Regular exercise', 'Social support'],
    whenToSeeDoctor: 'If anxiety is severe or interfering with daily activities'
  },
  depression: {
    description: 'Persistent feelings of sadness',
    causes: ['Brain chemistry', 'Genetics', 'Life events', 'Medical conditions'],
    remedies: ['Seek professional help', 'Exercise regularly', 'Regular sleep', 'Balanced diet', 'Stay connected'],
    prevention: ['Stress management', 'Social connections', 'Regular exercise'],
    whenToSeeDoctor: 'Professional help important; seek immediate care if thoughts of self-harm'
  },
  diabetes: {
    description: 'Body cannot properly process blood sugar',
    causes: ['Genetics', 'Obesity', 'Inactivity', 'Poor diet'],
    remedies: ['Monitor blood sugar', 'Healthy meal plan', 'Exercise regularly', 'Take medications', 'Manage stress'],
    prevention: ['Healthy diet', 'Regular exercise', 'Maintain healthy weight'],
    whenToSeeDoctor: 'Regular medical supervision required'
  },
  asthma: {
    description: 'Chronic condition causing breathing difficulty',
    causes: ['Allergens', 'Exercise', 'Cold air', 'Respiratory infections'],
    remedies: ['Use prescribed inhalers', 'Avoid triggers', 'Breathing exercises', 'Keep rescue inhaler accessible'],
    prevention: ['Avoid triggers', 'Take medications as prescribed', 'Get flu vaccine'],
    whenToSeeDoctor: 'Always work with doctor; seek emergency care for severe attacks'
  },
  arthritis: {
    description: 'Joint inflammation causing pain and stiffness',
    causes: ['Aging', 'Injury', 'Genetics', 'Autoimmune conditions'],
    remedies: ['Low-impact exercises', 'Maintain healthy weight', 'Apply heat or cold', 'Pain relievers'],
    prevention: ['Maintain healthy weight', 'Exercise regularly', 'Avoid joint injuries'],
    whenToSeeDoctor: 'If joint pain is severe or limits daily activities'
  },
  migraine: {
    description: 'Severe headache with nausea and light sensitivity',
    causes: ['Hormonal changes', 'Stress', 'Certain foods', 'Weather changes'],
    remedies: ['Rest in dark room', 'Cold compress', 'Stay hydrated', 'Small amounts of caffeine', 'Pain relievers'],
    prevention: ['Identify triggers', 'Regular sleep', 'Stress management'],
    whenToSeeDoctor: 'If migraines are frequent or severe'
  },
  allergies: {
    description: 'Immune system reaction to foreign substances',
    causes: ['Pollen', 'Dust mites', 'Pet dander', 'Certain foods'],
    remedies: ['Avoid allergens', 'Air purifiers', 'Antihistamines', 'Nasal sprays', 'Saline rinses'],
    prevention: ['Identify triggers', 'Keep home clean', 'Monitor pollen counts'],
    whenToSeeDoctor: 'If symptoms are severe or cause breathing difficulty'
  },
  acne: {
    description: 'Skin condition causing pimples',
    causes: ['Hormones', 'Bacteria', 'Excess oil', 'Clogged pores'],
    remedies: ['Wash face twice daily', 'Non-comedogenic products', 'Benzoyl peroxide', 'Avoid picking'],
    prevention: ['Good hygiene', 'Avoid touching face', 'Remove makeup before bed'],
    whenToSeeDoctor: 'If over-the-counter treatments do not work or severe scarring'
  },
  hypertension: {
    description: 'High blood pressure',
    causes: ['Genetics', 'Poor diet', 'Lack of exercise', 'Obesity', 'Stress'],
    remedies: ['Reduce sodium', 'Healthy diet', 'Exercise regularly', 'Maintain healthy weight', 'Limit alcohol'],
    prevention: ['Healthy diet', 'Regular exercise', 'Maintain healthy weight'],
    whenToSeeDoctor: 'Regular monitoring required'
  }
};

const getRemedy = async (req, res) => {
  try {
    const { symptom } = req.body;
    if (!symptom) return res.status(400).json({ message: 'Symptom required' });
    
    const lower = symptom.toLowerCase();
    let match = null;
    let key = null;
    
    for (const [k, v] of Object.entries(remedyDatabase)) {
      if (lower.includes(k)) { match = v; key = k; break; }
    }
    
    let remedy = '';
    if (match) {
      remedy = '**' + key.toUpperCase() + '**\n\n' + match.description + '\n\n';
      remedy += '**Common Causes:**\n' + match.causes.map((c,i) => (i+1) + '. ' + c).join('\n') + '\n\n';
      remedy += '**Remedies:**\n' + match.remedies.map((r,i) => (i+1) + '. ' + r).join('\n') + '\n\n';
      remedy += '**Prevention:**\n' + match.prevention.map(p => ' ' + p).join('\n') + '\n\n';
      remedy += '**When to See a Doctor:** ' + match.whenToSeeDoctor + '\n\n';
      remedy += ' **Disclaimer:** For educational purposes only. Consult a healthcare professional.';
    } else {
      remedy = 'I understand you are asking about "' + symptom + '". General advice: Rest, stay hydrated, eat well, get sleep, manage stress. Seek medical attention if symptoms are severe or persistent.';
    }
    
    res.json({ symptom, remedy });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getAllSymptoms = async (req, res) => {
  try {
    const symptoms = await Symptom.find();
    res.json(symptoms);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getSymptomById = async (req, res) => {
  try {
    const symptom = await Symptom.findById(req.params.id);
    if (!symptom) return res.status(404).json({ message: 'Symptom not found' });
    res.json(symptom);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { getRemedy, getAllSymptoms, getSymptomById };
