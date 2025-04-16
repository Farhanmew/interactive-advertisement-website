const express = require('express');
const router = express.Router();
const Feature = require('../models/Feature');
const auth = require('../middleware/auth');

// Get all features
router.get('/', async (req, res) => {
  try {
    const features = await Feature.find().sort('order');
    res.json(features);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a feature (admin only)
router.post('/', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const feature = new Feature(req.body);
    await feature.save();
    res.status(201).json(feature);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a feature (admin only)
router.patch('/:id', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const feature = await Feature.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!feature) {
      return res.status(404).json({ message: 'Feature not found' });
    }
    res.json(feature);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a feature (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const feature = await Feature.findByIdAndDelete(req.params.id);
    if (!feature) {
      return res.status(404).json({ message: 'Feature not found' });
    }
    res.json({ message: 'Feature deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 