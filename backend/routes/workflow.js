const express = require('express');
const router = express.Router();
const Workflow = require('../models/Workflow');
const auth = require('../middleware/auth');

// Get all workflow steps
router.get('/', async (req, res) => {
  try {
    const steps = await Workflow.find().sort('stepNumber');
    res.json(steps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a workflow step (admin only)
router.post('/', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const step = new Workflow(req.body);
    await step.save();
    res.status(201).json(step);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a workflow step (admin only)
router.patch('/:id', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const step = await Workflow.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!step) {
      return res.status(404).json({ message: 'Workflow step not found' });
    }
    res.json(step);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a workflow step (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const step = await Workflow.findByIdAndDelete(req.params.id);
    if (!step) {
      return res.status(404).json({ message: 'Workflow step not found' });
    }
    res.json({ message: 'Workflow step deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 