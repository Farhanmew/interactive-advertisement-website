import api from './config';

// Features
export const getFeatures = async () => {
  try {
    const response = await api.get('/features');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Workflow
export const getWorkflowSteps = async () => {
  try {
    const response = await api.get('/workflow');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Testimonials
export const getTestimonials = async () => {
  try {
    const response = await api.get('/testimonials');
    return response.data;
  } catch (error) {
    throw error;
  }
}; 