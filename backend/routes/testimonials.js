const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');
const auth = require('../middleware/auth');

// Get all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a testimonial (admin only)
router.post('/', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const testimonial = new Testimonial(req.body);
    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a testimonial (admin only)
router.patch('/:id', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    res.json(testimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a testimonial (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    res.json({ message: 'Testimonial deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 