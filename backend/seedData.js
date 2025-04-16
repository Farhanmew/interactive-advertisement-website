const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Feature = require('./models/Feature');
const Workflow = require('./models/Workflow');
const Testimonial = require('./models/Testimonial');
const Appointment = require('./models/Appointment');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/website')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Sample data
const features = [
  {
    title: 'Responsive Design',
    description: 'Our websites look great on all devices, from mobile phones to desktop computers.',
    icon: '📱',
    order: 1
  },
  {
    title: 'Fast Performance',
    description: 'Optimized for speed to ensure your users have the best experience possible.',
    icon: '⚡',
    order: 2
  },
  {
    title: 'SEO Friendly',
    description: 'Built with search engines in mind to help your site rank higher in search results.',
    icon: '🔍',
    order: 3
  },
  {
    title: 'Modern UI/UX',
    description: 'Clean, intuitive interfaces that your users will love to interact with.',
    icon: '🎨',
    order: 4
  },
  {
    title: 'Secure',
    description: 'Built with security best practices to protect your data and your users.',
    icon: '🔒',
    order: 5
  },
  {
    title: 'Scalable',
    description: 'Our solutions grow with your business, handling increased traffic and data.',
    icon: '📈',
    order: 6
  }
];

const workflowSteps = [
  {
    title: 'Discovery',
    description: 'We start by understanding your business, goals, and target audience.',
    stepNumber: 1,
    icon: '🔍'
  },
  {
    title: 'Planning',
    description: 'We create a detailed project plan with timelines and milestones.',
    stepNumber: 2,
    icon: '📋'
  },
  {
    title: 'Design',
    description: 'We design wireframes and mockups for your approval.',
    stepNumber: 3,
    icon: '✏️'
  },
  {
    title: 'Development',
    description: 'We build your website using the latest technologies and best practices.',
    stepNumber: 4,
    icon: '💻'
  },
  {
    title: 'Testing',
    description: 'We thoroughly test your website to ensure everything works perfectly.',
    stepNumber: 5,
    icon: '🔍'
  },
  {
    title: 'Launch',
    description: 'We deploy your website and provide ongoing support and maintenance.',
    stepNumber: 6,
    icon: '🚀'
  }
];

const testimonials = [
  {
    name: 'John Smith',
    role: 'CEO',
    company: 'Tech Solutions Inc.',
    content: 'Working with this team was a fantastic experience. They delivered our website on time and exceeded our expectations.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'Global Brands',
    content: 'The website they built for us has significantly increased our online presence and conversion rates.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    rating: 5
  },
  {
    name: 'Michael Brown',
    role: 'Founder',
    company: 'Startup Hub',
    content: 'Professional, responsive, and incredibly skilled. I highly recommend their services to anyone looking for a quality website.',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    rating: 4
  }
];

const appointments = [
  {
    name: 'Alice Cooper',
    email: 'alice@example.com',
    phone: '123-456-7890',
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    time: '10:00 AM',
    service: 'intro',
    message: 'I would like to discuss a new website for my business.',
    status: 'pending'
  },
  {
    name: 'Bob Wilson',
    email: 'bob@example.com',
    phone: '987-654-3210',
    date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
    time: '2:30 PM',
    service: 'consultation',
    message: 'Looking for a consultation on improving my existing website.',
    status: 'confirmed'
  }
];

// Function to seed the database
const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Feature.deleteMany({});
    await Workflow.deleteMany({});
    await Testimonial.deleteMany({});
    await Appointment.deleteMany({});
    
    console.log('Cleared existing data');
    
    // Create admin user
    const adminUser = new User({
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'password123',
      role: 'admin'
    });
    
    await adminUser.save();
    console.log('Created admin user');
    
    // Add features
    await Feature.insertMany(features);
    console.log('Added features');
    
    // Add workflow steps
    await Workflow.insertMany(workflowSteps);
    console.log('Added workflow steps');
    
    // Add testimonials
    await Testimonial.insertMany(testimonials);
    console.log('Added testimonials');
    
    // Add appointments
    await Appointment.insertMany(appointments);
    console.log('Added appointments');
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase(); 