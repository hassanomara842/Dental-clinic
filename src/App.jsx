import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutDoctor from './components/AboutDoctor';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BookingModal from './components/BookingModal';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutDoctor />
        <Booking />
        <Testimonials />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BookingModal />
    </>
  );
}

export default App;
