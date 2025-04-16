import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import FeatureSection from './Components/FeatureSection';
import Workflow from './Components/Workflow';
import Pricing from './Components/Pricing';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import { AuthProvider } from './context/AuthContext';
import AppointmentModal from './Components/AppointmentModal';

const App = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const openAppointmentModal = () => setIsAppointmentModalOpen(true);
  const closeAppointmentModal = () => setIsAppointmentModalOpen(false);

  return (
    <AuthProvider>
      <Navbar onBookIntro={openAppointmentModal} />
      <div className='max-w-7xl mx-auto mt-20 px-6'>
        <HeroSection onBookIntro={openAppointmentModal} />
        <FeatureSection/>
        <Workflow/>
        <Testimonials/>
        <Footer/>
      </div>
      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={closeAppointmentModal} 
      />
    </AuthProvider>
  );
};

export default App
