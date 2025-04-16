const mongoose = require('mongoose');

const workflowSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  stepNumber: {
    type: Number,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Workflow', workflowSchema); 