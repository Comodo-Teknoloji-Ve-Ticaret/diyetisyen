import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { SmartTools } from './components/SmartTools';
import { MoodNutri } from './components/MoodNutri';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { ClientPortalModal } from './components/ClientPortalModal';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('nutri_theme');
    return (saved === 'dark' || saved === 'light') ? saved : 'light';
  });

  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('nutri_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleOpenAppointment = (serviceId?: string) => {
    setBookingServiceId(serviceId || 'surdurulebilir-kilo');
    setIsAppointmentOpen(true);
  };

  const handleScrollToTools = () => {
    const element = document.getElementById('akilli-araclar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      {/* Navigation Bar */}
      <Navbar
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenPortal={() => setIsPortalOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Page Sections */}
      <main>
        <Hero
          onOpenAppointment={() => handleOpenAppointment()}
          onScrollToTools={handleScrollToTools}
        />

        <About />

        <Services
          onSelectServiceForBooking={(id) => handleOpenAppointment(id)}
        />

        <SmartTools />

        <MoodNutri
          onOpenAppointment={() => handleOpenAppointment('moodnutri-vip')}
        />

        <Testimonials
          onOpenAppointment={() => handleOpenAppointment()}
        />

        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        preSelectedServiceId={bookingServiceId}
      />

      <ClientPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />
    </div>
  );
};

export default App;
